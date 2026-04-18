---
name: listInstances
cbbaseinfo:
  description: Lists all available KV store instances with their basic information.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<KVInstanceListResponse>"
    description: A promise that resolves with an array of all KV store instances and their metadata.
data:
  name: listInstances
  category: kvStore
  link: listInstances.md
---
# listInstances

```typescript
codebolt.kvStore.listInstances(): Promise<KVInstanceListResponse>
```

Lists all available KV store instances with their basic information.
### Returns

- **`Promise<[KVInstanceListResponse](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/KVInstanceListResponse)>`**: A promise that resolves with an array of all KV store instances and their metadata.

### Response Structure

The method returns a Promise that resolves to a [`KVInstanceListResponse`](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/KVInstanceListResponse) object:

```typescript
{
  type: 'kvStore.listInstances',
  success: boolean,
  data?: {
    instances: Array<{
      id: string;              // Unique instance identifier
      name: string;            // Instance name
      description?: string;    // Optional description
      createdAt: string;       // ISO timestamp
      updatedAt: string;       // ISO timestamp
    }>
  },
  message?: string,
  error?: string,
  timestamp: string,
  requestId: string
}
```

### Examples

#### Example 1: List All Instances

Retrieve and display all KV store instances:

```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.kvStore.listInstances();

if (result.success) {
  console.log(`Found ${result.data.instances.length} instances:`);
  result.data.instances.forEach(instance => {
    console.log(`- ${instance.name} (${instance.id})`);
  });
} else {
  console.error('Failed to list instances:', result.error);
}
```

#### Example 2: Format and Display Instance List

Create a formatted table of all instances:

```javascript
const result = await codebolt.kvStore.listInstances();

if (result.success) {
  console.log('\n═══════════════════════════════════════════════════');
  console.log('KV Store Instances');
  console.log('═══════════════════════════════════════════════════');
  console.log(sprintf('%-20s %-30s %-15s', 'Name', 'ID', 'Created'));
  console.log('───────────────────────────────────────────────────');

  result.data.instances.forEach(instance => {
    const created = new Date(instance.createdAt).toLocaleDateString();
    console.log(sprintf('%-20s %-30s %-15s',
      instance.name.substring(0, 20),
      instance.id.substring(0, 30),
      created
    ));
  });

  console.log('═══════════════════════════════════════════════════\n');
}
```

#### Example 3: Find Instance by Name

Search for a specific instance by name:

```javascript
async function findInstanceByName(name) {
  const result = await codebolt.kvStore.listInstances();

  if (!result.success) {
    throw new Error('Failed to list instances');
  }

  const instance = result.data.instances.find(
    i => i.name.toLowerCase() === name.toLowerCase()
  );

  return instance || null;
}

// Usage
const instance = await findInstanceByName('user-sessions');
if (instance) {
  console.log('Found instance:', instance.id);
} else {
  console.log('Instance not found');
}
```

#### Example 4: Group Instances by Name Pattern

Group instances by naming patterns:

```javascript
const result = await codebolt.kvStore.listInstances();

if (result.success) {
  const groups = {
    production: [],
    development: [],
    testing: [],
    other: []
  };

  result.data.instances.forEach(instance => {
    const name = instance.name.toLowerCase();

    if (name.includes('prod') || name.includes('production')) {
      groups.production.push(instance);
    } else if (name.includes('dev') || name.includes('development')) {
      groups.development.push(instance);
    } else if (name.includes('test') || name.includes('testing')) {
      groups.testing.push(instance);
    } else {
      groups.other.push(instance);
    }
  });

  console.log('Production instances:', groups.production.length);
  console.log('Development instances:', groups.development.length);
  console.log('Testing instances:', groups.testing.length);
  console.log('Other instances:', groups.other.length);
}
```

#### Example 5: Find Unused Instances

Identify instances that haven't been updated recently:

```javascript
async function findStaleInstances(daysThreshold = 30) {
  const result = await codebolt.kvStore.listInstances();

  if (!result.success) {
    return [];
  }

  const threshold = Date.now() - (daysThreshold * 24 * 60 * 60 * 1000);

  return result.data.instances.filter(instance => {
    const updated = new Date(instance.updatedAt).getTime();
    return updated < threshold;
  });
}

// Usage
const staleInstances = await findStaleInstances(30);

if (staleInstances.length > 0) {
  console.log('Stale instances (not updated in 30 days):');
  staleInstances.forEach(instance => {
    const daysSinceUpdate = Math.floor(
      (Date.now() - new Date(instance.updatedAt).getTime()) / (24 * 60 * 60 * 1000)
    );
    console.log(`- ${instance.name} (${daysSinceUpdate} days)`);
  });
} else {
  console.log('No stale instances found');
}
```

#### Example 6: Sort Instances by Creation Date

Display instances sorted by creation date (newest first):

```javascript
const result = await codebolt.kvStore.listInstances();

if (result.success) {
  const sorted = [...result.data.instances].sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  console.log('Instances (newest first):');
  sorted.forEach((instance, index) => {
    const created = new Date(instance.createdAt).toLocaleDateString();
    console.log(`${index + 1}. ${instance.name}`);
    console.log(`   Created: ${created}`);
    console.log(`   ID: ${instance.id}`);
    console.log('');
  });
}
```

### Common Use Cases

**Instance Discovery**: Find available instances when you don't know their IDs or names.

**Inventory Management**: Get a complete list of instances for administrative purposes.

**Instance Selection**: Browse all instances to choose the appropriate one for a task.

**Auditing**: Review all instances to identify unused, duplicate, or misconfigured instances.

**Bulk Operations**: Perform operations on multiple instances (e.g., backup, cleanup).

**Dashboard Display**: Show all available instances in administrative interfaces.

### Notes

- Returns all instances regardless of their size or activity
- The instances are not sorted in any particular order
- Use `getInstance()` for detailed information about a specific instance
- Instance IDs from this response can be used directly in other KV store operations
- Empty array is returned if no instances exist
- Consider caching the results if you need to reference instances frequently
