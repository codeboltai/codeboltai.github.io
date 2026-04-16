---
name: delete
cbbaseinfo:
  description: "Deletes a specific key-value pair from the KV store."
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
      description: The key to delete.
  returns:
    signatureTypeName: "Promise<KVDeleteResponse>"
    description: A promise that resolves with deletion status.
data:
  name: delete
  category: kvStore
  link: delete.md
---
# delete

```typescript
codebolt.kvStore.delete(instanceId: undefined, namespace: undefined, key: undefined): Promise<KVDeleteResponse>
```

Deletes a specific key-value pair from the KV store.
### Parameters

- **`instanceId`** (unknown): The unique identifier of the KV store instance.
- **`namespace`** (unknown): The namespace containing the key.
- **`key`** (unknown): The key to delete.

### Returns

- **`Promise<[KVDeleteResponse](/docs/reference/type-reference/codeboltjs/interfaces/KVDeleteResponse)>`**: A promise that resolves with deletion status.

### Response Structure

The method returns a Promise that resolves to a [`KVDeleteResponse`](/docs/reference/type-reference/codeboltjs/interfaces/KVDeleteResponse) object:

```typescript
{
  type: 'kvStore.delete',
  success: boolean,
  data?: {
    deleted: boolean;    // Whether the key was deleted
  },
  message?: string,
  error?: string,
  timestamp: string,
  requestId: string
}
```

### Examples

#### Example 1: Delete a Single Key

Delete a specific key from the store:

```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.kvStore.delete(
  'kv-instance-id',
  'temp-cache',
  'expired-key'
);

if (result.success) {
  if (result.data.deleted) {
    console.log('Key deleted successfully');
  } else {
    console.log('Key did not exist');
  }
} else {
  console.error('Failed to delete:', result.error);
}
```

#### Example 2: Delete with Verification

Check if a key exists before deleting:

```javascript
async function safeDelete(instanceId, namespace, key) {
  // First check if key exists
  const checkResult = await codebolt.kvStore.get(
    instanceId,
    namespace,
    key
  );

  if (!checkResult.data.exists) {
    console.log('Key does not exist, nothing to delete');
    return false;
  }

  // Key exists, proceed with deletion
  const deleteResult = await codebolt.kvStore.delete(
    instanceId,
    namespace,
    key
  );

  return deleteResult.data.deleted;
}

// Usage
const deleted = await safeDelete(
  'kv-instance-id',
  'sessions',
  'session-123'
);

if (deleted) {
  console.log('Session deleted');
}
```

#### Example 3: Conditional Delete Based on Value

Delete only if the value matches a condition:

```javascript
async function deleteIfMatch(instanceId, namespace, key, expectedValue) {
  const result = await codebolt.kvStore.get(
    instanceId,
    namespace,
    key
  );

  if (!result.data.exists) {
    return false;
  }

  const currentValue = result.data.value;

  // Check if value matches
  const matches = JSON.stringify(currentValue) === JSON.stringify(expectedValue);

  if (matches) {
    await codebolt.kvStore.delete(instanceId, namespace, key);
    return true;
  }

  return false;
}

// Usage
const deleted = await deleteIfMatch(
  'kv-instance-id',
  'locks',
  'file-123',
  { owner: 'agent-1', status: 'completed' }
);

if (deleted) {
  console.log('Lock deleted');
} else {
  console.log('Lock not deleted (value mismatch or not found)');
}
```

#### Example 4: Delete Multiple Keys

Delete multiple keys in parallel:

```javascript
async function deleteMultiple(instanceId, namespace, keys) {
  const promises = keys.map(key =>
    codebolt.kvStore.delete(instanceId, namespace, key)
  );

  const results = await Promise.all(promises);

  const deleted = results.filter(r => r.data.deleted).length;
  const notFound = results.filter(r => !r.data.deleted).length;

  console.log(`Deleted: ${deleted}, Not found: ${notFound}`);

  return { deleted, notFound, results };
}

// Usage
await deleteMultiple(
  'kv-instance-id',
  'temp-cache',
  ['key1', 'key2', 'key3', 'key4']
);
```

#### Example 5: Delete with Pattern Matching

Delete all keys matching a pattern (requires query):

```javascript
async function deleteByPattern(instanceId, namespace, pattern) {
  // First, query for matching keys
  const queryResult = await codebolt.kvStore.query({
    from: { instance: instanceId, namespace },
    where: [
      { field: 'key', operator: 'contains', value: pattern }
    ]
  });

  if (!queryResult.success || !queryResult.data.result.records.length) {
    console.log('No matching keys found');
    return 0;
  }

  // Delete all matching keys
  const keys = queryResult.data.result.records.map(r => r.key);
  const { deleted } = await deleteMultiple(instanceId, namespace, keys);

  return deleted;
}

// Usage
const count = await deleteByPattern(
  'kv-instance-id',
  'cache',
  'expired-'
);

console.log(`Deleted ${count} expired cache entries`);
```

#### Example 6: Implement TTL Cleanup

Implement a cleanup routine for time-based expiration:

```javascript
async function cleanupExpiredKeys(instanceId, namespace) {
  // Get all records in namespace
  const queryResult = await codebolt.kvStore.query({
    from: { instance: instanceId, namespace }
  });

  if (!queryResult.success) {
    return 0;
  }

  const now = Date.now();
  const expiredKeys = [];

  // Find expired keys
  queryResult.data.result.records.forEach(record => {
    if (record.value.expiresAt && record.value.expiresAt < now) {
      expiredKeys.push(record.key);
    }
  });

  if (expiredKeys.length === 0) {
    console.log('No expired keys found');
    return 0;
  }

  // Delete expired keys
  const { deleted } = await deleteMultiple(
    instanceId,
    namespace,
    expiredKeys
  );

  console.log(`Cleaned up ${deleted} expired keys`);
  return deleted;
}

// Usage: Run periodically
setInterval(() => {
  cleanupExpiredKeys('kv-instance-id', 'temp-cache');
}, 60000); // Every minute
```

### Common Use Cases

**Session Cleanup**: Delete user sessions when they expire or users log out.

**Cache Invalidation**: Remove cached data when it becomes stale.

**Data Cleanup**: Remove temporary or processed data.

**Lock Release**: Delete locks after processing is complete.

**Queue Processing**: Remove items from a queue after processing.

**Privacy Compliance**: Delete user data on request (GDPR, etc.).

### Notes

- Deleting a non-existent key is not an error; `deleted` will be `false`
- The operation is idempotent - deleting the same key multiple times has the same effect
- Deleted keys cannot be recovered (no undo functionality)
- Use `deleteNamespace()` to delete all keys in a namespace at once
- Consider using `query()` to find keys matching certain criteria before deleting
- For bulk deletions, consider whether `deleteNamespace()` might be more efficient
- Deletion is permanent; ensure you have backups if the data is important
