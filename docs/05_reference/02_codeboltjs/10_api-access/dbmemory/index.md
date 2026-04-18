---
cbapicategory:
  - name: addKnowledge
    link: /docs/api/apiaccess/dbmemory/addKnowledge
    description: "Adds a key-value pair to the in-memory database."
  - name: getKnowledge
    link: /docs/api/apiaccess/dbmemory/getKnowledge
    description: "Retrieves a value from the in-memory database by key."

---
# dbmemory
<CBAPICategory />

## Quick Start Guide

The `dbmemory` module provides a fast in-memory key-value store for caching and temporary data storage. It supports all JavaScript data types and is ideal for:

- **Session Management**: Store user sessions and preferences
- **Caching**: Cache frequently accessed data for performance
- **State Management**: Maintain application state across operations
- **Temporary Data**: Store intermediate processing results

### Basic Usage

```javascript
import codebolt from '@codebolt/codeboltjs';

// Store data
await codebolt.dbmemory.addKnowledge('user:123', {
  name: 'John Doe',
  email: 'john@example.com',
  role: 'developer'
});

// Retrieve data
const user = await codebolt.dbmemory.getKnowledge('user:123');
console.log('User:', user.value);

// Update data (simply add again with same key)
await codebolt.dbmemory.addKnowledge('user:123', {
  ...user.value,
  lastLogin: new Date().toISOString()
});
```

## Common Workflows

### Workflow 1: User Session Cache

```javascript
class SessionCache {
  async createUserSession(userId, userData) {
    const sessionId = `session:${userId}:${Date.now()}`;

    const sessionData = {
      userId,
      userData,
      createdAt: new Date().toISOString(),
      lastAccessed: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 3600000).toISOString() // 1 hour
    };

    await codebolt.dbmemory.addKnowledge(sessionId, sessionData);
    await codebolt.dbmemory.addKnowledge(`user:${userId}:active_session`, sessionId);

    return sessionId;
  }

  async getSession(sessionId) {
    const result = await codebolt.dbmemory.getKnowledge(sessionId);

    if (!result.value) {
      return null;
    }

    // Check if expired
    const session = result.value;
    if (new Date(session.expiresAt) < new Date()) {
      await this.deleteSession(sessionId);
      return null;
    }

    // Update last accessed
    session.lastAccessed = new Date().toISOString();
    await codebolt.dbmemory.addKnowledge(sessionId, session);

    return session;
  }

  async deleteSession(sessionId) {
    const session = await this.getSession(sessionId);
    if (session) {
      await codebolt.dbmemory.addKnowledge(`user:${session.userId}:active_session`, null);
      await codebolt.dbmemory.addKnowledge(sessionId, null);
    }
  }
}

// Usage
const cache = new SessionCache();
const sessionId = await cache.createUserSession('user_123', { name: 'John' });
const session = await cache.getSession(sessionId);
```

### Workflow 2: API Response Cache

```javascript
class ApiCache {
  constructor(ttl = 300000) { // 5 minutes default
    this.ttl = ttl;
  }

  async get(key, fetchFn) {
    // Try to get from cache
    const cached = await codebolt.dbmemory.getKnowledge(`cache:${key}`);

    if (cached.value && cached.value.data) {
      // Check if still valid
      if (Date.now() - cached.value.timestamp < this.ttl) {
        console.log('Cache hit:', key);
        return cached.value.data;
      }
    }

    // Cache miss or expired, fetch new data
    console.log('Cache miss:', key);
    const data = await fetchFn();

    // Store in cache
    await codebolt.dbmemory.addKnowledge(`cache:${key}`, {
      data,
      timestamp: Date.now()
    });

    return data;
  }

  async invalidate(key) {
    await codebolt.dbmemory.addKnowledge(`cache:${key}`, null);
  }

  async clear() {
    // Clear all cache entries (requires knowing keys)
    await codebolt.dbmemory.addKnowledge('cache:cleared_at', Date.now());
  }
}

// Usage
const apiCache = new ApiCache(60000); // 1 minute TTL

const users = await apiCache.get('users', async () => {
  // Expensive API call
  return await fetchUsersFromAPI();
});

// Next call returns cached data
const cachedUsers = await apiCache.get('users', async () => {
  return await fetchUsersFromAPI();
});
```

### Workflow 3: Rate Limiting

```javascript
class RateLimiter {
  async checkLimit(identifier, limit, windowMs) {
    const key = `ratelimit:${identifier}`;
    const now = Date.now();
    const windowStart = now - windowMs;

    // Get current requests
    const result = await codebolt.dbmemory.getKnowledge(key);
    const requests = result.value || [];

    // Filter out old requests
    const validRequests = requests.filter(time => time > windowStart);

    // Check if limit exceeded
    if (validRequests.length >= limit) {
      return {
        allowed: false,
        remaining: 0,
        resetAt: validRequests[0] + windowMs
      };
    }

    // Add current request
    validRequests.push(now);
    await codebolt.dbmemory.addKnowledge(key, validRequests);

    return {
      allowed: true,
      remaining: limit - validRequests.length,
      resetAt: now + windowMs
    };
  }
}

// Usage
const rateLimiter = new RateLimiter();

// Check rate limit for API calls
const result = await rateLimiter.checkLimit('api:user_123', 100, 60000);

if (!result.allowed) {
  console.log('Rate limit exceeded. Try again in:', result.resetAt);
} else {
  console.log('Request allowed. Remaining:', result.remaining);
}
```

### Workflow 4: Data Aggregation

```javascript
class DataAggregator {
  async addDataPoint(metric, value) {
    const key = `aggregate:${metric}`;
    const result = await codebolt.dbmemory.getKnowledge(key);

    const data = result.value || {
      count: 0,
      sum: 0,
      min: Infinity,
      max: -Infinity,
      values: []
    };

    // Update statistics
    data.count++;
    data.sum += value;
    data.min = Math.min(data.min, value);
    data.max = Math.max(data.max, value);
    data.values.push({ value, timestamp: Date.now() });

    // Keep only last 1000 values
    if (data.values.length > 1000) {
      data.values.shift();
    }

    await codebolt.dbmemory.addKnowledge(key, data);

    return data;
  }

  async getStats(metric) {
    const result = await codebolt.dbmemory.getKnowledge(`aggregate:${metric}`);
    const data = result.value;

    if (!data || data.count === 0) {
      return null;
    }

    return {
      count: data.count,
      sum: data.sum,
      average: data.sum / data.count,
      min: data.min,
      max: data.max,
      lastValue: data.values[data.values.length - 1]
    };
  }

  async getTrend(metric, points = 10) {
    const result = await codebolt.dbmemory.getKnowledge(`aggregate:${metric}`);
    const data = result.value;

    if (!data || data.values.length < points) {
      return null;
    }

    // Get last N points
    const recent = data.values.slice(-points);
    const trend = recent.map(v => v.value);

    // Calculate trend direction
    const first = trend[0];
    const last = trend[trend.length - 1];
    const direction = last > first ? 'up' : last < first ? 'down' : 'stable';

    return { trend, direction };
  }
}

// Usage
const aggregator = new DataAggregator();

// Add data points
await aggregator.addDataPoint('response_time', 150);
await aggregator.addDataPoint('response_time', 200);
await aggregator.addDataPoint('response_time', 175);

// Get statistics
const stats = await aggregator.getStats('response_time');
console.log('Average response time:', stats.average);

// Get trend
const trend = await aggregator.getTrend('response_time', 10);
console.log('Trend:', trend.direction);
```

## Module Integration Examples

### Integration with State Module

```javascript
async function syncStateToMemory() {
  // Get project state
  const projectState = await codebolt.cbstate.getProjectState();

  // Cache in memory for fast access
  await codebolt.dbmemory.addKnowledge(
    'cache:project_config',
    projectState.projectState.state
  );

  console.log('✅ Project state cached in memory');
  return projectState;
}
```

### Integration with Debug Module

```javascript
async function debugMemoryUsage() {
  // Get memory cache info
  const cacheKey = 'cache:users';
  const result = await codebolt.dbmemory.getKnowledge(cacheKey);

  if (result.value) {
    await codebolt.debug.debug(
      `Memory cache hit for ${cacheKey}: ${JSON.stringify(result.value).length} bytes`,
      'info'
    );
  } else {
    await codebolt.debug.debug(`Memory cache miss for ${cacheKey}`, 'warning');
  }
}
```

### Integration with History Module

```javascript
async function cacheConversationHistory() {
  // Get conversation summary
  const summary = await codebolt.history.summarizeAll();

  // Cache in memory for quick access
  await codebolt.dbmemory.addKnowledge(
    'cache:conversation_summary',
    {
      summary,
      cachedAt: new Date().toISOString()
    }
  );

  return summary;
}
```

## Best Practices

### 1. Use Namespaced Keys

```javascript
// ✅ Good: Namespaced keys
await codebolt.dbmemory.addKnowledge('user:123:profile', userData);
await codebolt.dbmemory.addKnowledge('user:123:preferences', preferences);
await codebolt.dbmemory.addKnowledge('cache:api:users', userList);

// ❌ Bad: Non-descriptive keys
await codebolt.dbmemory.addKnowledge('data1', userData);
await codebolt.dbmemory.addKnowledge('data2', preferences);
```

### 2. Implement TTL for Cache

```javascript
// ✅ Good: Cache with TTL
async function getCachedData(key, ttlMs) {
  const cached = await codebolt.dbmemory.getKnowledge(`cache:${key}`);

  if (cached.value && Date.now() - cached.value.timestamp < ttlMs) {
    return cached.value.data;
  }

  return null;
}

// ❌ Bad: Cache without expiration
await codebolt.dbmemory.addKnowledge('cache:data', data);
// Data never expires, can become stale
```

### 3. Handle Cache Misses Gracefully

```javascript
// ✅ Good: Handle cache misses
async function getDataWithFallback(key) {
  const cached = await codebolt.dbmemory.getKnowledge(key);

  if (cached.value) {
    return cached.value;
  }

  // Fallback to source
  return await fetchFromSource();
}

// ❌ Bad: Assume cache exists
const data = (await codebolt.dbmemory.getKnowledge(key)).value;
// Throws error if cache doesn't exist
```

### 4. Clean Up Expired Data

```javascript
// ✅ Good: Regular cleanup
async function cleanupExpiredCache() {
  const now = Date.now();
  const ttl = 3600000; // 1 hour

  // Check and clean cache entries
  const keys = ['cache:users', 'cache:posts', 'cache:comments'];

  for (const key of keys) {
    const result = await codebolt.dbmemory.getKnowledge(key);
    if (result.value && result.value.timestamp) {
      if (now - result.value.timestamp > ttl) {
        await codebolt.dbmemory.addKnowledge(key, null);
      }
    }
  }
}
```

### 5. Use Structured Data

```javascript
// ✅ Good: Structured data with metadata
await codebolt.dbmemory.addKnowledge('session:user_123', {
  userId: 'user_123',
  data: { /* session data */ },
  metadata: {
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 3600000).toISOString()
  }
});

// ❌ Bad: Flat data without metadata
await codebolt.dbmemory.addKnowledge('session:user_123', sessionData);
// No way to track creation or expiration
```

## Performance Considerations

### Memory Usage

```javascript
// Monitor memory usage
async function checkMemorySize() {
  const keys = ['cache:users', 'cache:posts', 'cache:comments'];
  let totalSize = 0;

  for (const key of keys) {
    const result = await codebolt.dbmemory.getKnowledge(key);
    if (result.value) {
      const size = JSON.stringify(result.value).length;
      totalSize += size;
      console.log(`${key}: ${size} bytes`);
    }
  }

  console.log(`Total memory usage: ${totalSize} bytes`);
  return totalSize;
}
```

### Batch Operations

```javascript
// ✅ Good: Batch operations
async function batchCache(items) {
  const promises = items.map(item =>
    codebolt.dbmemory.addKnowledge(item.key, item.value)
  );
  await Promise.all(promises);
}

// ❌ Bad: Sequential operations
for (const item of items) {
  await codebolt.dbmemory.addKnowledge(item.key, item.value);
}
```

## Common Pitfalls

### Pitfall 1: No Expiration Strategy

```javascript
// ❌ Problem: Data never expires
await codebolt.dbmemory.addKnowledge('cache:data', expensiveData);

// ✅ Solution: Implement TTL
async function setWithTTL(key, value, ttl) {
  await codebolt.dbmemory.addKnowledge(key, {
    value,
    expiresAt: Date.now() + ttl
  });
}
```

### Pitfall 2: Race Conditions

```javascript
// ❌ Problem: Concurrent updates
const data = await codebolt.dbmemory.getKnowledge('counter');
data.value.count++;
await codebolt.dbmemory.addKnowledge('counter', data.value);

// ✅ Solution: Use atomic operations
async function incrementCounter(key) {
  const current = await codebolt.dbmemory.getKnowledge(key);
  const newValue = (current.value?.count || 0) + 1;
  await codebolt.dbmemory.addKnowledge(key, { count: newValue });
  return newValue;
}
```

### Pitfall 3: Memory Leaks

```javascript
// ❌ Problem: Unbounded growth
for (let i = 0; i < 10000; i++) {
  await codebolt.dbmemory.addKnowledge(`item_${i}`, largeObject);
}

// ✅ Solution: Implement size limits
class BoundedCache {
  constructor(maxSize = 1000) {
    this.maxSize = maxSize;
  }

  async set(key, value) {
    // Check size and evict if needed
    const currentKeys = await this.getCurrentKeys();
    if (currentKeys.length >= this.maxSize) {
      await this.evictOldest();
    }

    await codebolt.dbmemory.addKnowledge(key, {
      value,
      timestamp: Date.now()
    });
  }
}
```

### Pitfall 4: Storing Large Objects

```javascript
// ❌ Problem: Storing very large objects
await codebolt.dbmemory.addKnowledge('large_data', hugeArray);

// ✅ Solution: Split into chunks
async function storeLargeData(key, largeObject) {
  const json = JSON.stringify(largeObject);
  const chunkSize = 100000; // 100KB chunks
  const chunks = [];

  for (let i = 0; i < json.length; i += chunkSize) {
    chunks.push(json.substring(i, i + chunkSize));
  }

  await codebolt.dbmemory.addKnowledge(`${key}:meta`, {
    chunks: chunks.length,
    originalSize: json.length
  });

  for (let i = 0; i < chunks.length; i++) {
    await codebolt.dbmemory.addKnowledge(`${key}:chunk_${i}`, chunks[i]);
  }
}
```
