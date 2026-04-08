---
name: createInstance
cbbaseinfo:
  description: "Creates a new KV store instance for storing key-value data."
cbparameters:
  parameters:
    - name: name
      type: string
      required: true
      description: A unique name for the KV store instance.
    - name: description
      type: string
      required: false
      description: "An optional description of the instance's purpose."
  returns:
    signatureTypeName: "Promise<KVInstanceResponse>"
    description: A promise that resolves with the created instance details including ID, name, and timestamps.
data:
  name: createInstance
  category: kvStore
  link: createInstance.md
---
# createInstance

```typescript
codebolt.kvStore.createInstance(name: undefined, description: undefined): Promise<KVInstanceResponse>
```

Creates a new KV store instance for storing key-value data.
### Parameters

- **`name`** (unknown): A unique name for the KV store instance.
- **`description`** (unknown): An optional description of the instance's purpose.

### Returns

- **`Promise<[KVInstanceResponse](/docs/reference/type-reference/codeboltjs/interfaces/KVInstanceResponse)>`**: A promise that resolves with the created instance details including ID, name, and timestamps.

### Response Structure

The method returns a Promise that resolves to a [`KVInstanceResponse`](/docs/reference/type-reference/codeboltjs/interfaces/KVInstanceResponse) object:

```typescript
{
  type: 'kvStore.createInstance',
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

#### Example 1: Create a Basic Instance

Create a simple KV store instance for storing user session data:

```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.kvStore.createInstance(
  'user-sessions',
  'Stores active user session data'
);

if (result.success) {
  console.log('Instance created with ID:', result.data.instance.id);
  console.log('Instance name:', result.data.instance.name);
  // Use the instance ID for subsequent operations
} else {
  console.error('Failed to create instance:', result.error);
}
```

#### Example 2: Create Instance with Minimal Parameters

Create an instance without a description:

```javascript
const result = await codebolt.kvStore.createInstance('cache');

if (result.success) {
  const { id, name, createdAt } = result.data.instance;
  console.log(`Created ${name} (${id}) at ${createdAt}`);
}
```

#### Example 3: Create Multiple Instances for Different Environments

Set up separate storage instances for different environments:

```javascript
const environments = ['development', 'staging', 'production'];
const instances = {};

for (const env of environments) {
  const result = await codebolt.kvStore.createInstance(
    `kv-store-${env}`,
    `KV store for ${env} environment`
  );

  if (result.success) {
    instances[env] = result.data.instance.id;
    console.log(`${env}: ${result.data.instance.id}`);
  }
}

// Now you can use different instances for different environments
const devData = await codebolt.kvStore.set(
  instances.development,
  'config',
  'app-settings',
  { debugMode: true }
);
```

#### Example 4: Create Instance with Detailed Description

Create an instance with a comprehensive description for documentation purposes:

```javascript
const result = await codebolt.kvStore.createInstance(
  'agent-workflow-state',
  'Stores the current state of agent workflows including step numbers, ' +
  'context variables, and intermediate results. Used for resuming ' +
  'interrupted workflows and debugging agent behavior.'
);

if (result.success) {
  console.log('Workflow state instance ready:', result.data.instance.id);
}
```

#### Example 5: Error Handling for Duplicate Names

Handle the case where an instance with the same name might already exist:

```javascript
const instanceName = 'shared-config';
let instanceId;

const result = await codebolt.kvStore.createInstance(
  instanceName,
  'Shared configuration data'
);

if (result.success) {
  instanceId = result.data.instance.id;
  console.log('New instance created:', instanceId);
} else {
  // Check if instance already exists by listing instances
  const listResult = await codebolt.kvStore.listInstances();
  const existing = listResult.data.instances.find(
    i => i.name === instanceName
  );

  if (existing) {
    instanceId = existing.id;
    console.log('Using existing instance:', instanceId);
  } else {
    throw new Error(`Failed to create instance: ${result.error}`);
  }
}
```

#### Example 6: Create Instance for Temporary Data

Create an instance specifically for short-lived cached data:

```javascript
const result = await codebolt.kvStore.createInstance(
  'temp-cache',
  'Temporary cache for API responses and computed results. ' +
  'Data in this instance should be considered volatile.'
);

if (result.success) {
  // Store data with short TTL concept
  const cacheData = {
    response: { /* API response */ },
    cachedAt: Date.now(),
    ttl: 300000 // 5 minutes
  };

  await codebolt.kvStore.set(
    result.data.instance.id,
    'api-cache',
    'endpoint-data',
    cacheData
  );
}
```

### Common Use Cases

**Session Storage**: Create dedicated instances for different types of session data (user sessions, agent sessions, workflow sessions).

**Configuration Management**: Maintain separate instances for different configuration scopes (app settings, user preferences, feature flags).

**Multi-Tenant Data**: Use instances to isolate data from different tenants or customers.

**Environment Separation**: Keep development, staging, and production data in separate instances.

**Feature-Based Organization**: Create instances for specific features or subsystems (e.g., 'auth-data', 'payment-state', 'inventory-cache').

### Notes

- Instance names should be unique and descriptive
- The instance ID returned in the response is required for all subsequent operations
- Instances persist until explicitly deleted
- Consider using a naming convention that reflects your application structure
- Description field is optional but recommended for better documentation
- There is no practical limit to the number of instances you can create, but each instance should have a clear purpose