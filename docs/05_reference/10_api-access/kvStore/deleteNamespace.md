---
name: deleteNamespace
cbbaseinfo:
  description: "Deletes all key-value pairs in a namespace, effectively clearing the entire namespace."
cbparameters:
  parameters:
    - name: instanceId
      type: string
      required: true
      description: The unique identifier of the KV store instance.
    - name: namespace
      type: string
      required: true
      description: "The namespace to delete (clears all keys within it)."
  returns:
    signatureTypeName: "Promise<KVDeleteNamespaceResponse>"
    description: A promise that resolves with the number of deleted records.
data:
  name: deleteNamespace
  category: kvStore
  link: deleteNamespace.md
---
# deleteNamespace

```typescript
codebolt.kvStore.deleteNamespace(instanceId: undefined, namespace: undefined): Promise<KVDeleteNamespaceResponse>
```

Deletes all key-value pairs in a namespace, effectively clearing the entire namespace.
### Parameters

- **`instanceId`** (unknown): The unique identifier of the KV store instance.
- **`namespace`** (unknown): The namespace to delete (clears all keys within it).

### Returns

- **`Promise<[KVDeleteNamespaceResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/KVDeleteNamespaceResponse)>`**: A promise that resolves with the number of deleted records.

### Response Structure

The method returns a Promise that resolves to a [`KVDeleteNamespaceResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/KVDeleteNamespaceResponse) object:

```typescript
{
  type: 'kvStore.deleteNamespace',
  success: boolean,
  data?: {
    deletedCount: number;    // Number of records deleted
  },
  message?: string,
  error?: string,
  timestamp: string,
  requestId: string
}
```

### Examples

#### Example 1: Delete an Entire Namespace

Clear all keys in a namespace:

```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.kvStore.deleteNamespace(
  'kv-instance-id',
  'temp-cache'
);

if (result.success) {
  console.log(`Deleted ${result.data.deletedCount} records`);
} else {
  console.error('Failed to delete namespace:', result.error);
}
```

#### Example 2: Clear User Session Data

Clear all sessions for a user:

```javascript
async function clearUserSessions(instanceId, userId) {
  const namespace = `user-sessions-${userId}`;

  const result = await codebolt.kvStore.deleteNamespace(
    instanceId,
    namespace
  );

  if (result.success) {
    console.log(`Cleared ${result.data.deletedCount} sessions for user ${userId}`);
    return true;
  }

  return false;
}

// Usage
await clearUserSessions('kv-instance-id', 'user-123');
```

#### Example 3: Reset Application State

Clear all state for an application restart:

```javascript
async function resetApplicationState(instanceId) {
  const namespaces = [
    'active-sessions',
    'pending-requests',
    'temp-data',
    'locks'
  ];

  let totalDeleted = 0;

  for (const namespace of namespaces) {
    const result = await codebolt.kvStore.deleteNamespace(
      instanceId,
      namespace
    );

    if (result.success) {
      totalDeleted += result.data.deletedCount;
      console.log(`Cleared ${namespace}: ${result.data.deletedCount} records`);
    }
  }

  console.log(`Total records deleted: ${totalDeleted}`);
  return totalDeleted;
}

// Usage
await resetApplicationState('kv-instance-id');
```

#### Example 4: Conditional Deletion with Verification

Delete namespace only if it contains data:

```javascript
async function deleteNamespaceIfNotEmpty(instanceId, namespace) {
  // First, check if namespace has data
  const countResult = await codebolt.kvStore.getRecordCount(
    instanceId,
    namespace
  );

  if (!countResult.success) {
    console.error('Failed to check namespace:', countResult.error);
    return false;
  }

  const count = countResult.data.count;

  if (count === 0) {
    console.log('Namespace is empty, nothing to delete');
    return false;
  }

  console.log(`Deleting ${count} records from namespace: ${namespace}`);

  // Proceed with deletion
  const deleteResult = await codebolt.kvStore.deleteNamespace(
    instanceId,
    namespace
  );

  return deleteResult.success;
}

// Usage
await deleteNamespaceIfNotEmpty('kv-instance-id', 'temp-data');
```

#### Example 5: Batch Delete Multiple Namespaces

Clear multiple namespaces at once:

```javascript
async function clearMultipleNamespaces(instanceId, namespaces) {
  const results = [];

  for (const namespace of namespaces) {
    const result = await codebolt.kvStore.deleteNamespace(
      instanceId,
      namespace
    );

    results.push({
      namespace,
      success: result.success,
      deletedCount: result.data?.deletedCount || 0,
      error: result.error
    });
  }

  // Summary
  const successful = results.filter(r => r.success);
  const totalDeleted = successful.reduce((sum, r) => sum + r.deletedCount, 0);

  console.log(`Cleared ${successful.length}/${namespaces.length} namespaces`);
  console.log(`Total records deleted: ${totalDeleted}`);

  return results;
}

// Usage
await clearMultipleNamespaces('kv-instance-id', [
  'cache-day-1',
  'cache-day-2',
  'cache-day-3'
]);
```

#### Example 6: Implement Namespace Rotation

Rotate namespaces for time-based data retention:

```javascript
async function rotateNamespaces(instanceId, baseName, maxAge) {
  const now = Date.now();
  const dayInMs = 24 * 60 * 60 * 1000;

  // Get all namespaces
  const listResult = await codebolt.kvStore.getNamespaces(instanceId);

  if (!listResult.success) {
    return;
  }

  const relevantNamespaces = listResult.data.namespaces.filter(ns =>
    ns.startsWith(baseName)
  );

  // Delete old namespaces
  for (const namespace of relevantNamespaces) {
    // Extract date from namespace name (assumes format: baseName-YYYY-MM-DD)
    const match = namespace.match(new RegExp(`^${baseName}-(\\d{4}-\\d{2}-\\d{2})$`));

    if (match) {
      const namespaceDate = new Date(match[1]).getTime();
      const age = now - namespaceDate;
      const ageInDays = age / dayInMs;

      if (ageInDays > maxAge) {
        const result = await codebolt.kvStore.deleteNamespace(
          instanceId,
          namespace
        );

        if (result.success) {
          console.log(`Deleted old namespace ${namespace} (${Math.round(ageInDays)} days old)`);
        }
      }
    }
  }

  // Create new namespace for today
  const today = new Date().toISOString().split('T')[0];
  const newNamespace = `${baseName}-${today}`;

  console.log(`Using namespace: ${newNamespace}`);
  return newNamespace;
}

// Usage: Rotate daily namespaces, keep max 7 days
const currentNamespace = await rotateNamespaces(
  'kv-instance-id',
  'daily-logs',
  7
);
```

### Common Use Cases

**Session Management**: Clear all sessions when logging out or resetting authentication.

**Cache Invalidation**: Invalidate entire caches when data changes.

**Data Archival**: Clear old data before importing new datasets.

**Testing**: Clean up test data between test runs.

**Reset Operations**: Reset application state to initial conditions.

**Periodic Cleanup**: Regularly clean temporary data namespaces.

**User Data Deletion**: Remove all data for a specific user (compliance).

### Notes

- This operation deletes ALL keys in the namespace, not just selected ones
- The namespace itself remains available for new data after deletion
- Use `getRecordCount()` to check how many records will be deleted before calling this function
- Deleted data cannot be recovered; ensure you have backups if needed
- For selective deletion, use `query()` to find specific keys and `delete()` to remove them
- Consider the performance implications for large namespaces
- The operation is atomic - either all records are deleted or none are
- Use `delete()` for single key removal when you only need to remove specific data