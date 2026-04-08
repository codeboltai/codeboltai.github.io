---
name: updateInstance
cbbaseinfo:
  description: Updates the name or description of a KV store instance.
cbparameters:
  parameters:
    - name: instanceId
      type: string
      required: true
      description: The unique identifier of the KV store instance to update.
    - name: updates
      type: UpdateKVInstanceParams
      required: true
      description: "Object containing the fields to update (name and/or description)."
  returns:
    signatureTypeName: "Promise<KVInstanceResponse>"
    description: A promise that resolves with the updated instance details.
data:
  name: updateInstance
  category: kvStore
  link: updateInstance.md
---
# updateInstance

```typescript
codebolt.kvStore.updateInstance(instanceId: undefined, updates: undefined): Promise<KVInstanceResponse>
```

Updates the name or description of a KV store instance.
### Parameters

- **`instanceId`** (unknown): The unique identifier of the KV store instance to update.
- **`updates`** (unknown): Object containing the fields to update (name and/or description).

### Returns

- **`Promise<[KVInstanceResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/KVInstanceResponse)>`**: A promise that resolves with the updated instance details.

### Response Structure

The method returns a Promise that resolves to a [`KVInstanceResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/KVInstanceResponse) object:

```typescript
{
  type: 'kvStore.updateInstance',
  success: boolean,
  data?: {
    instance: {
      id: string;              // Unique instance identifier
      name: string;            // Updated instance name
      description?: string;    // Updated description
      createdAt: string;       // ISO timestamp (unchanged)
      updatedAt: string;       // ISO timestamp (updated)
    }
  },
  message?: string,
  error?: string,
  timestamp: string,
  requestId: string
}
```

### Examples

#### Example 1: Update Instance Name

Change the name of an instance:

```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.kvStore.updateInstance(
  'kv-instance-id',
  { name: 'production-cache' }
);

if (result.success) {
  console.log('Instance updated:', result.data.instance.name);
} else {
  console.error('Failed to update instance:', result.error);
}
```

#### Example 2: Update Instance Description

Update the description of an instance:

```javascript
const result = await codebolt.kvStore.updateInstance(
  'kv-instance-id',
  {
    description: 'Production cache for user session data and authentication tokens. Updated to reflect new usage patterns.'
  }
);

if (result.success) {
  console.log('Description updated');
}
```

#### Example 3: Update Both Name and Description

Update multiple fields at once:

```javascript
const result = await codebolt.kvStore.updateInstance(
  'kv-instance-id',
  {
    name: 'prod-user-sessions-v2',
    description: 'Upgraded user session storage with enhanced security features'
  }
);

if (result.success) {
  const { name, description, updatedAt } = result.data.instance;
  console.log(`Updated "${name}" at ${new Date(updatedAt).toLocaleString()}`);
}
```

#### Example 4: Rename for Environment Promotion

Rename instance when promoting from staging to production:

```javascript
async function promoteToProd(instanceId, newName) {
  // Get current instance details
  const currentResult = await codebolt.kvStore.getInstance(instanceId);

  if (!currentResult.success) {
    throw new Error('Instance not found');
  }

  const current = currentResult.data.instance;

  // Update name to reflect production status
  const updateResult = await codebolt.kvStore.updateInstance(
    instanceId,
    {
      name: newName,
      description: `Promoted from staging on ${new Date().toISOString()}`
    }
  );

  if (updateResult.success) {
    console.log(`Instance promoted: ${current.name} → ${newName}`);
    return updateResult.data.instance;
  }

  throw new Error('Failed to promote instance');
}

// Usage
await promoteToProd('kv-instance-id', 'prod-user-sessions');
```

#### Example 5: Add Timestamp to Description

Track when instances were last modified:

```javascript
async function markInstanceModified(instanceId, reason) {
  const timestamp = new Date().toISOString();
  const date = new Date().toLocaleDateString();

  const result = await codebolt.kvStore.updateInstance(
    instanceId,
    {
      description: `Last modified: ${date} (${timestamp}) - ${reason}`
    }
  );

  return result.success;
}

// Usage
await markInstanceModified('kv-instance-id', 'Schema migration completed');
```

#### Example 6: Batch Update Multiple Instances

Update descriptions for multiple instances:

```javascript
async function updateInstanceDescriptions(updates) {
  const results = [];

  for (const { instanceId, description } of updates) {
    const result = await codebolt.kvStore.updateInstance(
      instanceId,
      { description }
    );

    results.push({
      instanceId,
      success: result.success,
      error: result.error
    });
  }

  const successful = results.filter(r => r.success).length;
  console.log(`Updated ${successful}/${updates.length} instances`);

  return results;
}

// Usage
await updateInstanceDescriptions([
  {
    instanceId: 'kv-111',
    description: 'User session data for production environment'
  },
  {
    instanceId: 'kv-222',
    description: 'Application cache for frequently accessed data'
  },
  {
    instanceId: 'kv-333',
    description: 'Temporary storage for background job results'
  }
]);
```

### Common Use Cases

**Instance Organization**: Rename instances to better reflect their purpose.

**Documentation Updates**: Update descriptions as usage patterns change.

**Environment Promotion**: Rename instances when moving between environments.

**Maintenance Tracking**: Add modification information to descriptions.

**Bulk Updates**: Update multiple instances for consistency.

**Compliance**: Update descriptions to meet documentation requirements.

### Notes

- Only the `name` and `description` fields can be updated
- At least one field must be provided in the updates parameter
- The `id` and `createdAt` fields cannot be changed
- The `updatedAt` timestamp is automatically updated to the current time
- Updating the name doesn't affect the instance ID
- Other operations using the instance ID will continue to work after renaming
- Instance data (namespaces, records) is not affected by metadata updates
- Use descriptive names to make instances easier to identify
- Keep descriptions concise but informative for better documentation