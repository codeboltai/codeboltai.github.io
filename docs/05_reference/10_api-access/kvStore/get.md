---
name: get
cbbaseinfo:
  description: Retrieves a value from the KV store by key within a namespace.
cbparameters:
  parameters:
    - name: instanceId
      type: string
      required: true
      description: The unique identifier of the KV store instance.
    - name: namespace
      type: string
      required: true
      description: The namespace containing the key.
    - name: key
      type: string
      required: true
      description: The key to retrieve.
  returns:
    signatureTypeName: "Promise<KVGetResponse>"
    description: A promise that resolves with the value and existence status.
data:
  name: get
  category: kvStore
  link: get.md
---
# get

```typescript
codebolt.kvStore.get(instanceId: undefined, namespace: undefined, key: undefined): Promise<KVGetResponse>
```

Retrieves a value from the KV store by key within a namespace.
### Parameters

- **`instanceId`** (unknown): The unique identifier of the KV store instance.
- **`namespace`** (unknown): The namespace containing the key.
- **`key`** (unknown): The key to retrieve.

### Returns

- **`Promise<[KVGetResponse](/docs/reference/type-reference/codeboltjs/interfaces/KVGetResponse)>`**: A promise that resolves with the value and existence status.

### Response Structure

The method returns a Promise that resolves to a [`KVGetResponse`](/docs/reference/type-reference/codeboltjs/interfaces/KVGetResponse) object:

```typescript
{
  type: 'kvStore.get',
  success: boolean,
  data?: {
    value: any;           // The stored value (if exists)
    exists: boolean;      // Whether the key exists
  },
  message?: string,
  error?: string,
  timestamp: string,
  requestId: string
}
```

### Examples

#### Example 1: Retrieve a Simple Value

Get a basic string value:

```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.kvStore.get(
  'kv-instance-id',
  'user-preferences',
  'theme'
);

if (result.success) {
  if (result.data.exists) {
    console.log('Theme:', result.data.value);
  } else {
    console.log('Theme not set');
  }
} else {
  console.error('Failed to get value:', result.error);
}
```

#### Example 2: Retrieve Complex Object

Get and use a complex object:

```javascript
const result = await codebolt.kvStore.get(
  'kv-instance-id',
  'users',
  'user-123'
);

if (result.success && result.data.exists) {
  const user = result.data.value;
  console.log('User:', user.name);
  console.log('Email:', user.email);
  console.log('Preferences:', user.preferences);

  // Use the data
  if (user.preferences.notifications.email) {
    await sendWelcomeEmail(user.email);
  }
}
```

#### Example 3: Get with Default Value

Implement a default value pattern:

```javascript
async function getOrDefault(instanceId, namespace, key, defaultValue) {
  const result = await codebolt.kvStore.get(
    instanceId,
    namespace,
    key
  );

  if (result.success && result.data.exists) {
    return result.data.value;
  }

  return defaultValue;
}

// Usage
const theme = await getOrDefault(
  'kv-instance-id',
  'preferences',
  'theme',
  'light' // Default value
);

console.log('Using theme:', theme);
```

#### Example 4: Get or Create Pattern

Retrieve a value or create it if it doesn't exist:

```javascript
async function getOrCreate(instanceId, namespace, key, createFn) {
  const result = await codebolt.kvStore.get(
    instanceId,
    namespace,
    key
  );

  if (result.success && result.data.exists) {
    return result.data.value;
  }

  // Create the value
  const newValue = await createFn();
  await codebolt.kvStore.set(
    instanceId,
    namespace,
    key,
    newValue
  );

  return newValue;
}

// Usage
const counter = await getOrCreate(
  'kv-instance-id',
  'counters',
  'page-visits',
  () => ({ count: 0, lastReset: Date.now() })
);
```

#### Example 5: Batch Get Multiple Keys

Retrieve multiple keys in parallel:

```javascript
async function getMultiple(instanceId, namespace, keys) {
  const promises = keys.map(key =>
    codebolt.kvStore.get(instanceId, namespace, key)
  );

  const results = await Promise.all(promises);

  const values = {};
  results.forEach((result, index) => {
    values[keys[index]] = result.success && result.data.exists
      ? result.data.value
      : null;
  });

  return values;
}

// Usage
const settings = await getMultiple(
  'kv-instance-id',
  'config',
  ['theme', 'language', 'timezone']
);

console.log('Settings:', settings);
// { theme: 'dark', language: 'en', timezone: 'UTC' }
```

#### Example 6: Get with Caching Layer

Implement a caching layer:

```javascript
class KVCache {
  constructor(instanceId, namespace) {
    this.instanceId = instanceId;
    this.namespace = namespace;
    this.localCache = new Map();
    this.cacheTimeout = 60000; // 1 minute
  }

  async get(key) {
    // Check local cache first
    const cached = this.localCache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.value;
    }

    // Fetch from KV store
    const result = await codebolt.kvStore.get(
      this.instanceId,
      this.namespace,
      key
    );

    if (result.success && result.data.exists) {
      // Update local cache
      this.localCache.set(key, {
        value: result.data.value,
        timestamp: Date.now()
      });

      return result.data.value;
    }

    return null;
  }

  async set(key, value) {
    await codebolt.kvStore.set(
      this.instanceId,
      this.namespace,
      key,
      value
    );

    // Update local cache
    this.localCache.set(key, {
      value,
      timestamp: Date.now()
    });
  }
}

// Usage
const cache = new KVCache('kv-instance-id', 'api-cache');
const data = await cache.get('user-123-profile');
```

### Common Use Cases

**Configuration Retrieval**: Fetch application or user configuration settings.

**Session Lookup**: Retrieve user session data by session ID.

**State Restoration**: Restore saved application or agent state.

**Cache Access**: Access cached computation results or API responses.

**Data Validation**: Check if a key exists before updating it.

**Conditional Logic**: Branch logic based on stored values.

### Notes

- Always check the `exists` field before using the value
- The value will be `null` if `exists` is `false`
- Returns the exact value that was stored (maintains type and structure)
- Use `query()` for retrieving multiple records with filtering
- Consider implementing a local cache layer for frequently accessed values
- The get operation is fast and doesn't count as a read operation for billing purposes
- Keys that don't exist won't cause an error; check `exists` to handle this case