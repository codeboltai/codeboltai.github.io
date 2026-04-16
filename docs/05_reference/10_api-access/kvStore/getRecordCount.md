---
name: getRecordCount
cbbaseinfo:
  description: Gets the total number of records in an instance or namespace.
cbparameters:
  parameters:
    - name: instanceId
      type: string
      required: true
      description: The unique identifier of the KV store instance.
    - name: namespace
      type: string
      required: false
      description: Optional namespace to count records in. If not provided, counts all records in the instance.
  returns:
    signatureTypeName: "Promise<KVRecordCountResponse>"
    description: A promise that resolves with the total record count.
data:
  name: getRecordCount
  category: kvStore
  link: getRecordCount.md
---
# getRecordCount

```typescript
codebolt.kvStore.getRecordCount(instanceId: undefined, namespace: undefined): Promise<KVRecordCountResponse>
```

Gets the total number of records in an instance or namespace.
### Parameters

- **`instanceId`** (unknown): The unique identifier of the KV store instance.
- **`namespace`** (unknown): Optional namespace to count records in. If not provided, counts all records in the instance.

### Returns

- **`Promise<[KVRecordCountResponse](/docs/reference/type-reference/codeboltjs/interfaces/KVRecordCountResponse)>`**: A promise that resolves with the total record count.

### Response Structure

The method returns a Promise that resolves to a [`KVRecordCountResponse`](/docs/reference/type-reference/codeboltjs/interfaces/KVRecordCountResponse) object:

```typescript
{
  type: 'kvStore.getRecordCount',
  success: boolean,
  data?: {
    count: number    // Total number of records
  },
  message?: string,
  error?: string,
  timestamp: string,
  requestId: string
}
```

### Examples

#### Example 1: Count All Records in Instance

Get total records across all namespaces:

```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.kvStore.getRecordCount('kv-instance-id');

if (result.success) {
  console.log(`Total records in instance: ${result.data.count}`);
} else {
  console.error('Failed to get count:', result.error);
}
```

#### Example 2: Count Records in Namespace

Get record count for a specific namespace:

```javascript
const result = await codebolt.kvStore.getRecordCount(
  'kv-instance-id',
  'users'
);

if (result.success) {
  console.log(`Users namespace has ${result.data.count} records`);
}
```

#### Example 3: Compare Namespace Sizes

Compare record counts across namespaces:

```javascript
async function compareNamespaceSizes(instanceId, namespaces) {
  const sizes = {};

  for (const namespace of namespaces) {
    const result = await codebolt.kvStore.getRecordCount(
      instanceId,
      namespace
    );

    if (result.success) {
      sizes[namespace] = result.data.count;
    }
  }

  // Sort by size
  const sorted = Object.entries(sizes)
    .sort(([, a], [, b]) => b - a)
    .map(([namespace, count]) => ({ namespace, count }));

  console.log('Namespace sizes (largest first):');
  sorted.forEach(({ namespace, count }) => {
    console.log(`  ${namespace}: ${count} records`);
  });

  return sorted;
}

// Usage
await compareNamespaceSizes('kv-instance-id', [
  'users',
  'sessions',
  'cache',
  'logs'
]);
```

#### Example 4: Monitor Storage Growth

Track storage usage over time:

```javascript
class StorageMonitor {
  constructor(instanceId) {
    this.instanceId = instanceId;
    this.history = [];
  }

  async snapshot() {
    const result = await codebolt.kvStore.getRecordCount(this.instanceId);

    if (result.success) {
      this.history.push({
        timestamp: Date.now(),
        count: result.data.count
      });

      // Keep only last 100 snapshots
      if (this.history.length > 100) {
        this.history.shift();
      }
    }

    return this.history[this.history.length - 1];
  }

  getGrowthRate() {
    if (this.history.length < 2) {
      return null;
    }

    const oldest = this.history[0];
    const newest = this.history[this.history.length - 1];

    const timeDiff = (newest.timestamp - oldest.timestamp) / 1000; // seconds
    const countDiff = newest.count - oldest.count;

    return {
      recordsPerSecond: countDiff / timeDiff,
      recordsPerMinute: (countDiff / timeDiff) * 60,
      recordsPerHour: (countDiff / timeDiff) * 3600
    };
  }
}

// Usage
const monitor = new StorageMonitor('kv-instance-id');

// Take periodic snapshots
setInterval(async () => {
  const snapshot = await monitor.snapshot();
  console.log(`Current count: ${snapshot.count}`);

  const growth = monitor.getGrowthRate();
  if (growth) {
    console.log(`Growth rate: ${growth.recordsPerHour.toFixed(2)} records/hour`);
  }
}, 60000); // Every minute
```

#### Example 5: Check Before Bulk Operations

Verify data size before bulk operations:

```javascript
async function safeBulkDelete(instanceId, namespace) {
  // First, check how many records we'll be deleting
  const countResult = await codebolt.kvStore.getRecordCount(
    instanceId,
    namespace
  );

  if (!countResult.success) {
    throw new Error('Failed to get record count');
  }

  const count = countResult.data.count;

  if (count === 0) {
    console.log('Namespace is empty, nothing to delete');
    return 0;
  }

  // Warn if deleting many records
  if (count > 1000) {
    console.warn(`WARNING: About to delete ${count} records`);
    // In production, you might want confirmation here
  }

  // Proceed with deletion
  const deleteResult = await codebolt.kvStore.deleteNamespace(
    instanceId,
    namespace
  );

  return deleteResult.data.deletedCount;
}

// Usage
const deleted = await safeBulkDelete('kv-instance-id', 'temp-cache');
console.log(`Deleted ${deleted} records`);
```

#### Example 6: Calculate Storage Statistics

Generate comprehensive storage statistics:

```javascript
async function getStorageStats(instanceId) {
  // Get total count
  const totalResult = await codebolt.kvStore.getRecordCount(instanceId);

  if (!totalResult.success) {
    return null;
  }

  const totalCount = totalResult.data.count;

  // Get all namespaces
  const namespacesResult = await codebolt.kvStore.getNamespaces(instanceId);

  if (!namespacesResult.success) {
    return null;
  }

  // Get count per namespace
  const namespaceStats = [];
  let maxCount = 0;
  let largestNamespace = '';

  for (const namespace of namespacesResult.data.namespaces) {
    const nsResult = await codebolt.kvStore.getRecordCount(
      instanceId,
      namespace
    );

    if (nsResult.success) {
      const count = nsResult.data.count;
      const percentage = (count / totalCount) * 100;

      namespaceStats.push({
        namespace,
        count,
        percentage: percentage.toFixed(2)
      });

      if (count > maxCount) {
        maxCount = count;
        largestNamespace = namespace;
      }
    }
  }

  // Sort by count
  namespaceStats.sort((a, b) => b.count - a.count);

  return {
    totalRecords: totalCount,
    totalNamespaces: namespacesResult.data.namespaces.length,
    largestNamespace,
    largestCount: maxCount,
    namespaceStats: namespaceStats.slice(0, 10) // Top 10
  };
}

// Usage
const stats = await getStorageStats('kv-instance-id');

console.log('Storage Statistics:');
console.log(`  Total Records: ${stats.totalRecords}`);
console.log(`  Total Namespaces: ${stats.totalNamespaces}`);
console.log(`  Largest Namespace: ${stats.largestNamespace} (${stats.largestCount} records)`);
console.log('\nTop 10 Namespaces:');
stats.namespaceStats.forEach(({ namespace, count, percentage }) => {
  console.log(`  ${namespace}: ${count} records (${percentage}%)`);
});
```

### Common Use Cases

**Storage Monitoring**: Track overall storage usage and growth.

**Capacity Planning**: Monitor storage trends and plan for scaling.

**Data Validation**: Verify expected data amounts before/after operations.

**Resource Management**: Make decisions based on data volume.

**Performance Optimization**: Identify large namespaces that might need optimization.

**Billing Analysis**: Track storage usage for cost allocation.

### Notes

- Counting records is a fast operation and doesn't consume significant resources
- The count is real-time and reflects the current state
- Use without namespace parameter to get instance-wide totals
- Consider sampling for very large instances if precise counts aren't critical
- Combine with `getNamespaces()` for comprehensive namespace analysis
- Counts include all records regardless of their value size
- This is a metadata operation and doesn't load the actual data
