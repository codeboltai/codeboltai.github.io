---
name: getVector
cbbaseinfo:
  description: Retrieves a vector from the vector database based on the provided key.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key of the vector to retrieve.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the retrieved vector.
    typeArgs:
      - type: reference
        name: GetVectorResponse
data:
  name: getVector
  category: vectordb
  link: getVector.md
---
# getVector

```typescript
codebolt.vectordb.getVector(key: string): Promise<GetVectorResponse>
```

Retrieves a vector from the vector database based on the provided key.
### Parameters

- **`key`** (string): The key of the vector to retrieve.

### Returns

- **`Promise<GetVectorResponse>`**: A promise that resolves with the retrieved vector.

### Response Structure
```typescript
{
  type: 'getVectorResponse';
  vector: {
    object: string;           // 'list'
    data: any[];             // Array of vector data
    model: string;           // 'text-embedding-3-small'
    usage: {
      prompt_tokens: number;
      total_tokens: number;
    };
  };
}
```

### Simple Example
```javascript
// Get vector by key
const getResult = await codebolt.vectordb.getVector('test-vector-001');
console.log('✅ Vector retrieval result:', getResult);
```

### Detailed Example
```javascript
// Get vector with error handling
try {
  const getResult = await codebolt.vectordb.getVector('test-vector-001');
  console.log('✅ Vector retrieval result:', getResult);
  console.log('   - Type:', getResult?.type);
  console.log('   - Data available:', !!getResult?.data);
  console.log('   - Model:', getResult?.vector?.model);
} catch (error) {
  console.log('⚠️  Vector retrieval failed:', error.message);
}
```

### Advanced Examples

#### Example 3: Get Vector with Validation

```javascript
async function getVectorWithValidation(key) {
  if (!key || typeof key !== 'string') {
    throw new Error('Key must be a non-empty string');
  }

  const result = await codebolt.vectordb.getVector(key);

  // Validate response structure
  if (!result || result.type !== 'getVectorResponse') {
    throw new Error('Invalid response structure');
  }

  if (!result.vector || !result.vector.data) {
    throw new Error('Vector data not found in response');
  }

  if (!Array.isArray(result.vector.data)) {
    throw new Error('Vector data must be an array');
  }

  console.log('Vector validation successful');
  console.log(`- Dimensions: ${result.vector.data.length}`);
  console.log(`- Model: ${result.vector.model}`);
  console.log(`- Tokens: ${result.vector.usage?.total_tokens || 'N/A'}`);

  return result;
}
```

#### Example 4: Batch Vector Retrieval

```javascript
async function batchGetVectors(keys, concurrency = 5) {
  const results = [];
  const total = keys.length;

  console.log(`Retrieving ${total} vectors with concurrency ${concurrency}`);

  for (let i = 0; i < keys.length; i += concurrency) {
    const batch = keys.slice(i, i + concurrency);

    const batchResults = await Promise.allSettled(
      batch.map(key => codebolt.vectordb.getVector(key))
    );

    batchResults.forEach((result, index) => {
      const globalIndex = i + index;
      results.push({
        key: keys[globalIndex],
        success: result.status === 'fulfilled',
        vector: result.status === 'fulfilled' ? result.value : null,
        error: result.status === 'rejected' ? result.reason : null
      });
    });

    const progress = ((i + batch.length) / total * 100).toFixed(1);
    console.log(`Progress: ${progress}%`);
  }

  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  console.log(`Batch retrieval complete: ${successful} succeeded, ${failed} failed`);

  return { results, successful, failed };
}

// Usage
const batchResults = await batchGetVectors(['vec1', 'vec2', 'vec3', 'vec4', 'vec5']);
```

#### Example 5: Vector Comparison

```javascript
async function compareVectors(key1, key2) {
  const [vector1, vector2] = await Promise.all([
    codebolt.vectordb.getVector(key1),
    codebolt.vectordb.getVector(key2)
  ]);

  const data1 = vector1.vector?.data || [];
  const data2 = vector2.vector?.data || [];

  if (data1.length !== data2.length) {
    console.log(`Vectors have different dimensions: ${data1.length} vs ${data2.length}`);
    return null;
  }

  // Calculate cosine similarity
  let dotProduct = 0;
  let norm1 = 0;
  let norm2 = 0;

  for (let i = 0; i < data1.length; i++) {
    dotProduct += data1[i] * data2[i];
    norm1 += data1[i] * data1[i];
    norm2 += data2[i] * data2[i];
  }

  const similarity = dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));

  console.log(`Vector similarity: ${similarity.toFixed(4)}`);
  console.log(`- Vector 1 dimensions: ${data1.length}`);
  console.log(`- Vector 2 dimensions: ${data2.length}`);
  console.log(`- Cosine similarity: ${similarity.toFixed(4)}`);

  return {
    key1,
    key2,
    similarity,
    dimensions: data1.length
  };
}

// Usage
const comparison = await compareVectors('doc1-vector', 'doc2-vector');
```

#### Example 6: Vector Caching

```javascript
class VectorCache {
  constructor(ttl = 30 * 60 * 1000) { // 30 minutes TTL
    this.cache = new Map();
    this.ttl = ttl;
  }

  async getVector(key) {
    // Check cache
    if (this.cache.has(key)) {
      const cached = this.cache.get(key);

      if (Date.now() - cached.timestamp < this.ttl) {
        console.log(`Cache hit for vector: ${key}`);
        return cached.vector;
      }

      // Cache expired
      this.cache.delete(key);
    }

    // Fetch vector
    console.log(`Cache miss, fetching vector: ${key}`);
    const vector = await codebolt.vectordb.getVector(key);

    // Store in cache
    this.cache.set(key, {
      timestamp: Date.now(),
      vector
    });

    return vector;
  }

  async preload(keys) {
    console.log(`Preloading ${keys.length} vectors...`);

    await Promise.all(
      keys.map(key => this.getVector(key))
    );

    console.log('Preload complete');
  }

  clear() {
    this.cache.clear();
    console.log('Vector cache cleared');
  }

  getStats() {
    return {
      size: this.cache.size,
      ttl: this.ttl,
      entries: Array.from(this.cache.keys())
    };
  }
}

// Usage
const vectorCache = new VectorCache();
const vector = await vectorCache.getVector('doc1-vector');
```

### Integration Examples

#### Example 7: Integration with Query

```javascript
async function getVectorAndQuery(key, queryKey) {
  // Get the vector
  const vectorResult = await codebolt.vectordb.getVector(key);

  if (!vectorResult.vector?.data) {
    throw new Error('Vector data not found');
  }

  console.log(`Retrieved vector with ${vectorResult.vector.data.length} dimensions`);

  // Use vector for query
  const queryResult = await codebolt.vectordb.queryVectorItem(queryKey);

  console.log(`Query returned ${queryResult.item?.length || 0} results`);

  return {
    vector: vectorResult.vector,
    queryResults: queryResult.item
  };
}
```

#### Example 8: Vector Analysis

```javascript
async function analyzeVector(key) {
  const result = await codebolt.vectordb.getVector(key);

  if (!result.vector?.data) {
    throw new Error('Vector not found');
  }

  const data = result.vector.data;

  // Calculate statistics
  const stats = {
    dimensions: data.length,
    mean: data.reduce((sum, val) => sum + val, 0) / data.length,
    min: Math.min(...data),
    max: Math.max(...data),
    magnitude: Math.sqrt(data.reduce((sum, val) => sum + val * val, 0)),
    sparsity: data.filter(val => val === 0).length / data.length
  };

  console.log('Vector Analysis:');
  console.log(`- Dimensions: ${stats.dimensions}`);
  console.log(`- Mean: ${stats.mean.toFixed(4)}`);
  console.log(`- Min: ${stats.min.toFixed(4)}`);
  console.log(`- Max: ${stats.max.toFixed(4)}`);
  console.log(`- Magnitude: ${stats.magnitude.toFixed(4)}`);
  console.log(`- Sparsity: ${(stats.sparsity * 100).toFixed(2)}%`);
  console.log(`- Model: ${result.vector.model}`);
  console.log(`- Tokens Used: ${result.vector.usage?.total_tokens || 'N/A'}`);

  return stats;
}

// Usage
const analysis = await analyzeVector('document-123-vector');
```

### Error Handling Examples

#### Example 9: Comprehensive Error Handling

```javascript
async function safeGetVector(key, retries = 3) {
  let lastError = null;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      // Validate input
      if (!key) {
        throw new Error('Key is required');
      }

      if (typeof key !== 'string') {
        throw new Error('Key must be a string');
      }

      // Get vector
      const result = await codebolt.vectordb.getVector(key);

      // Validate response
      if (!result) {
        throw new Error('No response from vector database');
      }

      if (result.type !== 'getVectorResponse') {
        throw new Error(`Unexpected response type: ${result.type}`);
      }

      if (!result.vector?.data) {
        throw new Error('Vector data not found');
      }

      if (attempt > 1) {
        console.log(`Successfully retrieved vector after ${attempt} attempts`);
      }

      return result;

    } catch (error) {
      lastError = error;
      console.error(`Attempt ${attempt} failed:`, error.message);

      if (attempt < retries) {
        const delay = Math.min(Math.pow(2, attempt) * 1000, 10000);
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  // All retries failed
  console.error(`Failed to get vector after ${retries} attempts`);
  throw lastError;
}
```

#### Example 10: Fallback Strategy

```javascript
async function getVectorWithFallback(key, fallbackKeys = []) {
  try {
    // Try primary key
    const result = await codebolt.vectordb.getVector(key);

    if (result?.vector?.data) {
      console.log(`Successfully retrieved vector: ${key}`);
      return result;
    }

    throw new Error('Vector data not found');

  } catch (error) {
    console.warn(`Failed to get vector ${key}:`, error.message);

    // Try fallback keys
    for (const fallbackKey of fallbackKeys) {
      try {
        const fallbackResult = await codebolt.vectordb.getVector(fallbackKey);

        if (fallbackResult?.vector?.data) {
          console.log(`Successfully retrieved fallback vector: ${fallbackKey}`);
          return { ...fallbackResult, fallback: true, originalKey: key };
        }
      } catch (fallbackError) {
        console.warn(`Fallback ${fallbackKey} also failed:`, fallbackError.message);
      }
    }

    throw new Error(`All vector retrieval attempts failed for key: ${key}`);
  }
}

// Usage
const vector = await getVectorWithFallback(
  'primary-vector',
  ['fallback-1', 'fallback-2', 'fallback-3']
);
```

### Performance Optimization

#### Example 11: Parallel Vector Retrieval

```javascript
async function parallelGetVector(keys) {
  console.log(`Retrieving ${keys.length} vectors in parallel...`);

  const startTime = Date.now();

  const results = await Promise.allSettled(
    keys.map(key => codebolt.vectordb.getVector(key))
  );

  const duration = Date.now() - startTime;

  const successful = results.filter(r => r.status === 'fulfilled').length;
  const failed = results.filter(r => r.status === 'rejected').length;

  console.log(`Parallel retrieval complete in ${duration}ms`);
  console.log(`Successful: ${successful}, Failed: ${failed}`);

  return {
    results,
    successful,
    failed,
    duration
  };
}
```

#### Example 12: Vector Pooling

```javascript
class VectorPool {
  constructor() {
    this.vectors = new Map();
    this.lastAccess = new Map();
  }

  async get(key, refresh = false) {
    const now = Date.now();

    // Check if vector exists and doesn't need refresh
    if (!refresh && this.vectors.has(key)) {
      this.lastAccess.set(key, now);
      return this.vectors.get(key);
    }

    // Fetch vector
    const result = await codebolt.vectordb.getVector(key);

    if (result?.vector?.data) {
      this.vectors.set(key, result.vector);
      this.lastAccess.set(key, now);
      console.log(`Vector ${key} added to pool`);
    }

    return result.vector;
  }

  async preload(keys) {
    console.log(`Preloading ${keys.length} vectors into pool...`);

    await Promise.all(
      keys.map(key => this.get(key))
    );

    console.log('Preload complete');
  }

  getStats() {
    const now = Date.now();
    const ages = Array.from(this.lastAccess.entries()).map(([key, time]) => ({
      key,
      age: now - time
    }));

    return {
      poolSize: this.vectors.size,
      averageAge: ages.length > 0
        ? ages.reduce((sum, a) => sum + a.age, 0) / ages.length
        : 0,
      oldest: ages.length > 0 ? Math.max(...ages.map(a => a.age)) : 0
    };
  }

  clear() {
    this.vectors.clear();
    this.lastAccess.clear();
    console.log('Vector pool cleared');
  }
}
```

### Best Practices

1. **Always validate vector data** structure before using it
2. **Implement caching** for frequently accessed vectors
3. **Use parallel retrieval** for multiple vectors
4. **Handle missing vectors** gracefully with fallbacks
5. **Monitor vector dimensions** to ensure consistency
6. **Calculate vector statistics** for quality monitoring
7. **Implement retry logic** for transient failures
8. **Clean up unused vectors** to manage memory

### Common Pitfalls and Solutions

#### Pitfall 1: Not Checking Vector Exists

```javascript
// Problem: Assuming vector exists
const result = await codebolt.vectordb.getVector(key);
console.log(result.vector.data.length); // May fail

// Solution: Always check
const result = await codebolt.vectordb.getVector(key);
if (result?.vector?.data) {
  console.log(result.vector.data.length);
} else {
  console.log('Vector not found');
}
```

#### Pitfall 2: Ignoring Vector Dimensions

```javascript
// Problem: Not checking dimensions
const result = await codebolt.vectordb.getVector(key);
processVector(result.vector.data); // May fail if dimensions wrong

// Solution: Validate dimensions
const result = await codebolt.vectordb.getVector(key);
if (result.vector.data.length === expectedDimensions) {
  processVector(result.vector.data);
} else {
  console.error(`Expected ${expectedDimensions} dimensions, got ${result.vector.data.length}`);
}
```

#### Pitfall 3: No Error Handling

```javascript
// Problem: No try-catch
const result = await codebolt.vectordb.getVector(key); // May throw

// Solution: Always handle errors
try {
  const result = await codebolt.vectordb.getVector(key);
  // Process vector
} catch (error) {
  console.error('Failed to get vector:', error);
}
```

### Notes

- Vector retrieval returns the raw embedding data
- Always check the response structure before accessing vector data
- Vector dimensions should be consistent for comparisons
- Consider implementing caching for frequently accessed vectors
- Monitor token usage when working with embeddings
- Use parallel retrieval for better performance when getting multiple vectors