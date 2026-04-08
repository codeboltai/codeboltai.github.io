---
name: getNamespaces
cbbaseinfo:
  description: Lists all namespaces within a KV store instance.
cbparameters:
  parameters:
    - name: instanceId
      type: string
      required: true
      description: The unique identifier of the KV store instance.
  returns:
    signatureTypeName: "Promise<KVNamespacesResponse>"
    description: A promise that resolves with an array of namespace names.
data:
  name: getNamespaces
  category: kvStore
  link: getNamespaces.md
---
# getNamespaces

```typescript
codebolt.kvStore.getNamespaces(instanceId: undefined): Promise<KVNamespacesResponse>
```

Lists all namespaces within a KV store instance.
### Parameters

- **`instanceId`** (unknown): The unique identifier of the KV store instance.

### Returns

- **`Promise<[KVNamespacesResponse](/docs/reference/type-reference/codeboltjs/interfaces/KVNamespacesResponse)>`**: A promise that resolves with an array of namespace names.

### Response Structure

The method returns a Promise that resolves to a [`KVNamespacesResponse`](/docs/reference/type-reference/codeboltjs/interfaces/KVNamespacesResponse) object:

```typescript
{
  type: 'kvStore.getNamespaces',
  success: boolean,
  data?: {
    namespaces: string[]    // Array of namespace names
  },
  message?: string,
  error?: string,
  timestamp: string,
  requestId: string
}
```

### Examples

#### Example 1: List All Namespaces

Retrieve all namespaces in an instance:

```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.kvStore.getNamespaces('kv-instance-id');

if (result.success) {
  console.log(`Found ${result.data.namespaces.length} namespaces:`);
  result.data.namespaces.forEach(namespace => {
    console.log(`- ${namespace}`);
  });
} else {
  console.error('Failed to get namespaces:', result.error);
}
```

#### Example 2: Find Namespaces by Pattern

Find namespaces matching a specific pattern:

```javascript
const result = await codebolt.kvStore.getNamespaces('kv-instance-id');

if (result.success) {
  const userNamespaces = result.data.namespaces.filter(ns =>
    ns.startsWith('user-')
  );

  console.log(`Found ${userNamespaces.length} user namespaces`);
  userNamespaces.forEach(ns => console.log(`- ${ns}`));
}
```

#### Example 3: Analyze Namespace Usage

Get record counts for all namespaces:

```javascript
async function analyzeNamespaceUsage(instanceId) {
  const namespacesResult = await codebolt.kvStore.getNamespaces(instanceId);

  if (!namespacesResult.success) {
    return [];
  }

  const analysis = [];

  for (const namespace of namespacesResult.data.namespaces) {
    const countResult = await codebolt.kvStore.getRecordCount(
      instanceId,
      namespace
    );

    if (countResult.success) {
      analysis.push({
        namespace,
        recordCount: countResult.data.count
      });
    }
  }

  // Sort by record count
  analysis.sort((a, b) => b.recordCount - a.recordCount);

  return analysis;
}

// Usage
const usage = await analyzeNamespaceUsage('kv-instance-id');
console.log('Namespace usage:');
usage.forEach(({ namespace, recordCount }) => {
  console.log(`  ${namespace}: ${recordCount} records`);
});
```

#### Example 4: Check Namespace Existence

Verify if a specific namespace exists:

```javascript
async function namespaceExists(instanceId, namespace) {
  const result = await codebolt.kvStore.getNamespaces(instanceId);

  if (!result.success) {
    return false;
  }

  return result.data.namespaces.includes(namespace);
}

// Usage
const exists = await namespaceExists('kv-instance-id', 'users');

if (exists) {
  console.log('Namespace exists');
} else {
  console.log('Namespace does not exist');
}
```

#### Example 5: Group Namespaces by Prefix

Organize namespaces by their prefixes:

```javascript
const result = await codebolt.kvStore.getNamespaces('kv-instance-id');

if (result.success) {
  const groups = {};

  result.data.namespaces.forEach(namespace => {
    // Extract prefix (first part before hyphen)
    const prefix = namespace.split('-')[0];

    if (!groups[prefix]) {
      groups[prefix] = [];
    }

    groups[prefix].push(namespace);
  });

  // Display groups
  Object.entries(groups).forEach(([prefix, namespaces]) => {
    console.log(`${prefix}: ${namespaces.length} namespaces`);
  });
}
```

#### Example 6: Find Empty Namespaces

Identify namespaces with no data:

```javascript
async function findEmptyNamespaces(instanceId) {
  const namespacesResult = await codebolt.kvStore.getNamespaces(instanceId);

  if (!namespacesResult.success) {
    return [];
  }

  const emptyNamespaces = [];

  for (const namespace of namespacesResult.data.namespaces) {
    const countResult = await codebolt.kvStore.getRecordCount(
      instanceId,
      namespace
    );

    if (countResult.success && countResult.data.count === 0) {
      emptyNamespaces.push(namespace);
    }
  }

  return emptyNamespaces;
}

// Usage
const empty = await findEmptyNamespaces('kv-instance-id');

if (empty.length > 0) {
  console.log('Empty namespaces:', empty);
} else {
  console.log('No empty namespaces found');
}
```

### Common Use Cases

**Instance Discovery**: Explore what namespaces exist in an instance.

**Data Organization**: Understand how data is organized across namespaces.

**Cleanup Operations**: Identify and clean up unused namespaces.

**Monitoring**: Track namespace usage and growth over time.

**Multi-Tenant Management**: Manage per-tenant namespaces.

**Data Migration**: Plan and execute data migration between namespaces.

### Notes

- Returns only namespace names, not their contents
- Empty namespaces are included in the results
- The order of namespaces is not guaranteed
- Use `getRecordCount()` to get the number of records in each namespace
- Consider caching the results if you need to reference namespaces frequently
- Namespace names are case-sensitive
- Use this function to validate namespace existence before operations