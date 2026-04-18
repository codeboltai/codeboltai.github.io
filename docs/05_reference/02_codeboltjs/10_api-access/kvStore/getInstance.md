---
name: getInstance
cbbaseinfo:
  description: Gets details of a specific KV store instance including its configuration and metadata.
cbparameters:
  parameters:
    - name: instanceId
      type: string
      required: true
      description: The unique identifier of the KV store instance.
  returns:
    signatureTypeName: "Promise<KVInstanceResponse>"
    description: A promise that resolves with the instance details including ID, name, description, and timestamps.
data:
  name: getInstance
  category: kvStore
  link: getInstance.md
---
# getInstance

```typescript
codebolt.kvStore.getInstance(instanceId: undefined): Promise<KVInstanceResponse>
```

Gets details of a specific KV store instance including its configuration and metadata.
### Parameters

- **`instanceId`** (unknown): The unique identifier of the KV store instance.

### Returns

- **`Promise<[KVInstanceResponse](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/KVInstanceResponse)>`**: A promise that resolves with the instance details including ID, name, description, and timestamps.

### Response Structure

The method returns a Promise that resolves to a [`KVInstanceResponse`](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/KVInstanceResponse) object:

```typescript
{
  type: 'kvStore.getInstance',
  success: boolean,
  data?: {
    instance: {
      id: string;              // Unique instance identifier
      name: string;            // Instance name
      description?: string;    // Optional description
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

#### Example 1: Retrieve Instance Details

Get basic information about a KV store instance:

```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const instanceId = 'kv-1234567890';
const result = await codebolt.kvStore.getInstance(instanceId);

if (result.success) {
  const { id, name, description, createdAt, updatedAt } = result.data.instance;
  console.log(`Instance: ${name} (${id})`);
  console.log(`Description: ${description || 'No description'}`);
  console.log(`Created: ${new Date(createdAt).toLocaleString()}`);
  console.log(`Updated: ${new Date(updatedAt).toLocaleString()}`);
} else {
  console.error('Failed to get instance:', result.error);
}
```

#### Example 2: Verify Instance Exists Before Operations

Check if an instance exists before performing operations:

```javascript
async function safeSetData(instanceId, namespace, key, value) {
  // First, verify the instance exists
  const checkResult = await codebolt.kvStore.getInstance(instanceId);

  if (!checkResult.success) {
    throw new Error(`Instance not found: ${instanceId}`);
  }

  // Instance exists, proceed with set operation
  const setResult = await codebolt.kvStore.set(
    instanceId,
    namespace,
    key,
    value
  );

  return setResult;
}

// Usage
try {
  await safeSetData('kv-instance-id', 'cache', 'key1', { data: 'value' });
  console.log('Data stored successfully');
} catch (error) {
  console.error('Operation failed:', error.message);
}
```

#### Example 3: Display Instance Information

Create a formatted display of instance information:

```javascript
function displayInstanceInfo(result) {
  if (!result.success) {
    console.error('Error:', result.error);
    return;
  }

  const instance = result.data.instance;
  console.log('═══════════════════════════════════════');
  console.log('KV Store Instance Details');
  console.log('═══════════════════════════════════════');
  console.log(`ID:          ${instance.id}`);
  console.log(`Name:        ${instance.name}`);
  console.log(`Description: ${instance.description || 'N/A'}`);
  console.log(`Created:     ${new Date(instance.createdAt).toISOString()}`);
  console.log(`Updated:     ${new Date(instance.updatedAt).toISOString()}`);
  console.log(`Age:         ${getAge(instance.createdAt)}`);
  console.log('═══════════════════════════════════════');
}

function getAge(timestamp) {
  const now = Date.now();
  const then = new Date(timestamp).getTime();
  const diff = now - then;

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} day(s)`;
  if (hours > 0) return `${hours} hour(s)`;
  return `${minutes} minute(s)`;
}

const result = await codebolt.kvStore.getInstance('kv-1234567890');
displayInstanceInfo(result);
```

#### Example 4: Get Instance and Check Recency

Check if an instance was created recently:

```javascript
const INSTANCE_AGE_THRESHOLD = 24 * 60 * 60 * 1000; // 24 hours

async function isRecentInstance(instanceId) {
  const result = await codebolt.kvStore.getInstance(instanceId);

  if (!result.success) {
    return false;
  }

  const createdAt = new Date(result.data.instance.createdAt).getTime();
  const age = Date.now() - createdAt;

  return age < INSTANCE_AGE_THRESHOLD;
}

// Usage
const instanceId = 'kv-1234567890';
if (await isRecentInstance(instanceId)) {
  console.log('Instance was created recently');
} else {
  console.log('Instance is older than 24 hours');
}
```

#### Example 5: Batch Retrieve Multiple Instances

Get details for multiple instances by ID:

```javascript
async function getMultipleInstances(instanceIds) {
  const instances = [];
  const errors = [];

  for (const id of instanceIds) {
    try {
      const result = await codebolt.kvStore.getInstance(id);
      if (result.success) {
        instances.push(result.data.instance);
      } else {
        errors.push({ id, error: result.error });
      }
    } catch (error) {
      errors.push({ id, error: error.message });
    }
  }

  return { instances, errors };
}

// Usage
const instanceIds = ['kv-111', 'kv-222', 'kv-333'];
const { instances, errors } = await getMultipleInstances(instanceIds);

console.log(`Retrieved ${instances.length} instances`);
if (errors.length > 0) {
  console.warn(`Failed to retrieve ${errors.length} instances`);
}
```

#### Example 6: Find Instance by Name Pattern

Retrieve instances and filter by name pattern:

```javascript
async function findInstanceByPattern(pattern) {
  // List all instances first
  const listResult = await codebolt.kvStore.listInstances();

  if (!listResult.success) {
    throw new Error('Failed to list instances');
  }

  // Find matching instance
  const regex = new RegExp(pattern, 'i');
  const matching = listResult.data.instances.find(
    instance => regex.test(instance.name)
  );

  if (!matching) {
    return null;
  }

  // Get full details of matching instance
  const detailResult = await codebolt.kvStore.getInstance(matching.id);
  return detailResult.success ? detailResult.data.instance : null;
}

// Usage
const instance = await findInstanceByPattern('user.*session');
if (instance) {
  console.log('Found instance:', instance.name);
} else {
  console.log('No matching instance found');
}
```

### Common Use Cases

**Instance Validation**: Verify that an instance exists before performing operations, especially when instance IDs are stored externally or passed between functions.

**Instance Discovery**: Retrieve instance details to understand its purpose and configuration before using it.

**Metadata Display**: Show instance information in dashboards, logs, or user interfaces.

**Instance Auditing**: Track when instances were created and last updated for compliance or debugging purposes.

**Instance Selection**: Compare multiple instances to choose the appropriate one for a specific task.

### Notes

- The instance ID must be valid and exist in the system
- If the instance doesn't exist, `success` will be `false` and an error message will be provided
- Use `listInstances()` if you need to find an instance but don't know its ID
- The `createdAt` and `updatedAt` timestamps are in ISO 8601 format
- Instance metadata (name and description) can be updated using `updateInstance()`
