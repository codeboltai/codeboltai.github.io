---
name: set
cbbaseinfo:
  description: Stores a value in the KV store with a specified key within a namespace.
cbparameters:
  parameters:
    - name: instanceId
      type: string
      required: true
      description: The unique identifier of the KV store instance.
    - name: namespace
      type: string
      required: true
      description: "The namespace to store the key-value pair in."
    - name: key
      type: string
      required: true
      description: The key under which to store the value.
    - name: value
      type: any
      required: true
      description: "Any JSON-serializable value to store."
    - name: autoCreateInstance
      type: boolean
      required: false
      description: "If true, automatically creates the instance if it doesn't exist. Default is false."
  returns:
    signatureTypeName: "Promise<KVSetResponse>"
    description: A promise that resolves with the stored record details including timestamps.
data:
  name: set
  category: kvStore
  link: set.md
---
# set

```typescript
codebolt.kvStore.set(instanceId: undefined, namespace: undefined, key: undefined, value: undefined, autoCreateInstance: undefined): Promise<KVSetResponse>
```

Stores a value in the KV store with a specified key within a namespace.
### Parameters

- **`instanceId`** (unknown): The unique identifier of the KV store instance.
- **`namespace`** (unknown): The namespace to store the key-value pair in.
- **`key`** (unknown): The key under which to store the value.
- **`value`** (unknown): Any JSON-serializable value to store.
- **`autoCreateInstance`** (unknown): If true, automatically creates the instance if it doesn't exist. Default is false.

### Returns

- **`Promise<[KVSetResponse](/docs/reference/type-reference/codeboltjs/interfaces/KVSetResponse)>`**: A promise that resolves with the stored record details including timestamps.

### Response Structure

The method returns a Promise that resolves to a [`KVSetResponse`](/docs/reference/type-reference/codeboltjs/interfaces/KVSetResponse) object:

```typescript
{
  type: 'kvStore.set',
  success: boolean,
  data?: {
    record: {
      id: string;              // Unique record identifier
      instanceId: string;      // Instance ID
      namespace: string;       // Namespace
      key: string;             // Key
      value: any;              // Stored value
      createdAt: string;       // ISO timestamp
      updatedAt: string;       // ISO timestamp
    }
  },
  message?: string,
  error?: string,
  timestamp: string,
  requestId: string
}
```

### Examples

#### Example 1: Store a Simple Value

Store a basic string value:

```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.kvStore.set(
  'kv-instance-id',
  'user-preferences',
  'theme',
  'dark'
);

if (result.success) {
  console.log('Value stored successfully');
  console.log('Record ID:', result.data.record.id);
} else {
  console.error('Failed to store value:', result.error);
}
```

#### Example 2: Store Complex Object Data

Store a complex object with nested data:

```javascript
const userProfile = {
  userId: 'user-123',
  name: 'John Doe',
  email: 'john@example.com',
  preferences: {
    theme: 'dark',
    language: 'en',
    notifications: {
      email: true,
      push: false,
      sms: false
    }
  },
  metadata: {
    createdAt: Date.now(),
    source: 'registration'
  }
};

const result = await codebolt.kvStore.set(
  'kv-instance-id',
  'users',
  'user-123',
  userProfile
);

if (result.success) {
  console.log('User profile stored:', result.data.record.id);
}
```

#### Example 3: Update Existing Value

Update an existing key (overwrites previous value):

```javascript
// First, store initial value
await codebolt.kvStore.set(
  'kv-instance-id',
  'counter',
  'visits',
  { count: 0, lastVisit: null }
);

// Later, update the value
const current = await codebolt.kvStore.get(
  'kv-instance-id',
  'counter',
  'visits'
);

if (current.data.exists) {
  const updated = {
    count: current.data.value.count + 1,
    lastVisit: Date.now()
  };

  await codebolt.kvStore.set(
    'kv-instance-id',
    'counter',
    'visits',
    updated
  );

  console.log('Counter updated');
}
```

#### Example 4: Store Array Data

Store an array of items:

```javascript
const shoppingList = [
  { id: 1, name: 'Milk', quantity: 2, purchased: false },
  { id: 2, name: 'Bread', quantity: 1, purchased: false },
  { id: 3, name: 'Eggs', quantity: 12, purchased: true }
];

const result = await codebolt.kvStore.set(
  'kv-instance-id',
  'shopping',
  'list-2024-01-19',
  shoppingList
);

if (result.success) {
  console.log('Shopping list saved');
}
```

#### Example 5: Auto-Create Instance

Automatically create the instance if it doesn't exist:

```javascript
const result = await codebolt.kvStore.set(
  'new-instance-id',
  'cache',
  'key1',
  { data: 'value' },
  true // autoCreateInstance
);

if (result.success) {
  console.log('Value stored (instance auto-created if needed)');
} else if (result.error?.includes('not found')) {
  console.log('Instance does not exist and auto-create is disabled');
}
```

#### Example 6: Store with TTL Concept

Store data with an expiration time:

```javascript
function setWithExpiry(instanceId, namespace, key, value, ttlMinutes) {
  const data = {
    value,
    expiresAt: Date.now() + (ttlMinutes * 60 * 1000),
    createdAt: Date.now()
  };

  return codebolt.kvStore.set(instanceId, namespace, key, data);
}

// Usage: Store data that expires in 5 minutes
await setWithExpiry(
  'kv-instance-id',
  'temp-cache',
  'api-response',
  { temperature: 72, condition: 'Sunny' },
  5
);

// When retrieving, check expiration
async function getWithExpiry(instanceId, namespace, key) {
  const result = await codebolt.kvStore.get(instanceId, namespace, key);

  if (!result.data.exists) {
    return { exists: false };
  }

  const data = result.data.value;

  if (Date.now() > data.expiresAt) {
    // Expired, delete and return null
    await codebolt.kvStore.delete(instanceId, namespace, key);
    return { exists: false, expired: true };
  }

  return { exists: true, value: data.value };
}
```

### Common Use Cases

**Session Management**: Store user session data with session IDs as keys.

**Configuration Storage**: Persist application configuration settings.

**Caching**: Cache expensive computation results or API responses.

**State Management**: Maintain application or agent state between operations.

**User Preferences**: Store user-specific settings and preferences.

**Temporary Data**: Store intermediate results or temporary data.

**Counters and Metrics**: Track counts, visits, or other metrics.

**Queue Management**: Maintain simple queue structures using arrays.

### Notes

- The value must be JSON-serializable (no functions, circular references, or special types)
- If a key already exists, it will be overwritten with the new value
- Both `createdAt` and `updatedAt` timestamps are set to the current time for new records
- For existing keys, `createdAt` remains the same but `updatedAt` is updated
- Use `autoCreateInstance: true` to automatically create instances (useful for dynamic setups)
- Consider using a consistent naming convention for namespaces and keys
- Large values may impact performance; consider splitting large data into multiple keys
- The key must be unique within the namespace
- Namespace and key names are case-sensitive