---
name: deleteInstance
cbbaseinfo:
  description: Deletes a KV store instance and all its data, including all namespaces and records.
cbparameters:
  parameters:
    - name: instanceId
      type: string
      required: true
      description: The unique identifier of the KV store instance to delete.
  returns:
    signatureTypeName: "Promise<KVDeleteResponse>"
    description: A promise that resolves with the deletion status.
data:
  name: deleteInstance
  category: kvStore
  link: deleteInstance.md
---
# deleteInstance

```typescript
codebolt.kvStore.deleteInstance(instanceId: undefined): Promise<KVDeleteResponse>
```

Deletes a KV store instance and all its data, including all namespaces and records.
### Parameters

- **`instanceId`** (unknown): The unique identifier of the KV store instance to delete.

### Returns

- **`Promise<[KVDeleteResponse](/docs/reference/type-reference/codeboltjs/interfaces/KVDeleteResponse)>`**: A promise that resolves with the deletion status.

### Response Structure

The method returns a Promise that resolves to a [`KVDeleteResponse`](/docs/reference/type-reference/codeboltjs/interfaces/KVDeleteResponse) object:

```typescript
{
  type: 'kvStore.deleteInstance',
  success: boolean,
  data?: {
    deleted: boolean;    // Whether the instance was deleted
  },
  message?: string,
  error?: string,
  timestamp: string,
  requestId: string
}
```

### Examples

#### Example 1: Delete an Instance

Remove an instance and all its data:

```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.kvStore.deleteInstance('kv-instance-id');

if (result.success) {
  if (result.data.deleted) {
    console.log('Instance deleted successfully');
  } else {
    console.log('Instance not found');
  }
} else {
  console.error('Failed to delete instance:', result.error);
}
```

#### Example 2: Delete with Confirmation

Implement a confirmation prompt before deletion:

```javascript
async function deleteInstanceWithConfirmation(instanceId) {
  // Get instance details first
  const instanceResult = await codebolt.kvStore.getInstance(instanceId);

  if (!instanceResult.success) {
    console.error('Instance not found');
    return false;
  }

  const instance = instanceResult.data.instance;

  // Get record count
  const countResult = await codebolt.kvStore.getRecordCount(instanceId);
  const recordCount = countResult.success ? countResult.data.count : 'unknown';

  // Display confirmation prompt
  console.log('\n=== Delete Instance Confirmation ===');
  console.log(`Name: ${instance.name}`);
  console.log(`ID: ${instance.id}`);
  console.log(`Records: ${recordCount}`);
  console.log(`Created: ${new Date(instance.createdAt).toLocaleString()}`);
  console.log('=====================================\n');

  // In production, you might want a real confirmation mechanism
  const confirmed = true; // Replace with actual confirmation logic

  if (!confirmed) {
    console.log('Deletion cancelled');
    return false;
  }

  // Proceed with deletion
  const deleteResult = await codebolt.kvStore.deleteInstance(instanceId);

  if (deleteResult.success && deleteResult.data.deleted) {
    console.log('Instance deleted successfully');
    return true;
  }

  console.error('Failed to delete instance');
  return false;
}

// Usage
await deleteInstanceWithConfirmation('kv-instance-id');
```

#### Example 3: Delete with Backup

Backup instance data before deletion:

```javascript
async function deleteInstanceWithBackup(instanceId, backupPath) {
  // Query all data for backup
  const queryResult = await codebolt.kvStore.query({
    from: { instance: instanceId }
  });

  if (!queryResult.success) {
    throw new Error('Failed to query instance data');
  }

  const backupData = {
    instanceId,
    exportedAt: new Date().toISOString(),
    recordCount: queryResult.data.result.total,
    records: queryResult.data.result.records
  };

  // Save backup (in a real implementation, write to file/database)
  console.log(`Backing up ${backupData.recordCount} records to ${backupPath}`);

  // For this example, we'll just log the backup
  console.log('Backup data:', JSON.stringify(backupData, null, 2));

  // Delete the instance
  const deleteResult = await codebolt.kvStore.deleteInstance(instanceId);

  if (deleteResult.success && deleteResult.data.deleted) {
    console.log('Instance deleted, backup saved');
    return { success: true, backupPath };
  }

  throw new Error('Failed to delete instance after backup');
}

// Usage
await deleteInstanceWithBackup('kv-instance-id', './backups/kv-instance.json');
```

#### Example 4: Conditional Deletion

Delete instance only if it meets certain criteria:

```javascript
async function deleteIfEmpty(instanceId) {
  // Check if instance has any records
  const countResult = await codebolt.kvStore.getRecordCount(instanceId);

  if (!countResult.success) {
    console.error('Failed to check instance');
    return false;
  }

  const count = countResult.data.count;

  if (count > 0) {
    console.log(`Instance has ${count} records, not deleting`);
    return false;
  }

  // Instance is empty, safe to delete
  console.log('Instance is empty, deleting...');
  const deleteResult = await codebolt.kvStore.deleteInstance(instanceId);

  return deleteResult.success && deleteResult.data.deleted;
}

// Usage
const deleted = await deleteIfEmpty('kv-instance-id');

if (deleted) {
  console.log('Empty instance deleted');
}
```

#### Example 5: Batch Delete Old Instances

Find and delete instances older than a certain age:

```javascript
async function deleteOldInstances(daysThreshold = 30) {
  // List all instances
  const listResult = await codebolt.kvStore.listInstances();

  if (!listResult.success) {
    return [];
  }

  const threshold = Date.now() - (daysThreshold * 24 * 60 * 60 * 1000);
  const oldInstances = listResult.data.instances.filter(
    instance => new Date(instance.createdAt).getTime() < threshold
  );

  console.log(`Found ${oldInstances.length} instances older than ${daysThreshold} days`);

  const deleted = [];

  for (const instance of oldInstances) {
    const result = await codebolt.kvStore.deleteInstance(instance.id);

    if (result.success && result.data.deleted) {
      deleted.push(instance);
      console.log(`Deleted: ${instance.name}`);
    }
  }

  return deleted;
}

// Usage: Delete instances older than 90 days
const deleted = await deleteOldInstances(90);
console.log(`Deleted ${deleted.length} old instances`);
```

#### Example 6: Delete by Name Pattern

Delete instances matching a name pattern:

```javascript
async function deleteInstancesByPattern(pattern, dryRun = true) {
  // List all instances
  const listResult = await codebolt.kvStore.listInstances();

  if (!listResult.success) {
    return [];
  }

  const regex = new RegExp(pattern, 'i');
  const matching = listResult.data.instances.filter(
    instance => regex.test(instance.name)
  );

  console.log(`Found ${matching.length} instances matching "${pattern}"`);

  if (dryRun) {
    console.log('DRY RUN - No instances will be deleted');
    matching.forEach(instance => {
      console.log(`  Would delete: ${instance.name} (${instance.id})`);
    });
    return matching;
  }

  // Actually delete
  const deleted = [];

  for (const instance of matching) {
    const result = await codebolt.kvStore.deleteInstance(instance.id);

    if (result.success && result.data.deleted) {
      deleted.push(instance);
      console.log(`Deleted: ${instance.name}`);
    }
  }

  return deleted;
}

// Usage
await deleteInstancesByPattern('temp-.*-test', false);
```

### Common Use Cases

**Cleanup**: Remove unused or obsolete instances.

**Testing**: Delete test instances after testing is complete.

**Environment Reset**: Clean up all instances for a fresh start.

**Data Migration**: Delete old instances after migrating data to new ones.

**Storage Management**: Free up storage by deleting unnecessary instances.

**Compliance**: Remove instances per data retention policies.

### Notes

- **WARNING**: This operation is irreversible and permanently deletes all data
- All namespaces and records within the instance are deleted
- The instance ID cannot be reused after deletion
- Consider using `deleteNamespace()` for partial cleanup
- Always verify the instance ID before deleting
- Back up important data before deletion
- Deleted instances cannot be recovered
- Use `getInstance()` to verify instance details before deletion
- Consider implementing a confirmation mechanism for production use
- The operation may take time for instances with large amounts of data
