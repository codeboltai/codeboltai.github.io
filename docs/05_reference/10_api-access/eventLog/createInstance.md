---
name: createInstance
cbbaseinfo:
  description: Creates a new event log instance for storing event streams.
cbparameters:
  parameters:
    - name: name
      type: string
      required: true
      description: A unique name for the event log instance.
    - name: description
      type: string
      required: false
      description: "An optional description of the instance's purpose."
  returns:
    signatureTypeName: "Promise<EventLogInstanceResponse>"
    description: A promise that resolves with the created instance details.
data:
  name: createInstance
  category: eventLog
  link: createInstance.md
---
# createInstance

```typescript
codebolt.eventLog.createInstance(name: undefined, description: undefined): Promise<EventLogInstanceResponse>
```

Creates a new event log instance for storing event streams.
### Parameters

- **`name`** (unknown): A unique name for the event log instance.
- **`description`** (unknown): An optional description of the instance's purpose.

### Returns

- **`Promise<[EventLogInstanceResponse](/docs/reference/type-reference/codeboltjs/interfaces/EventLogInstanceResponse)>`**: A promise that resolves with the created instance details.

### Response Structure

```typescript
{
  type: 'eventLog.createInstance',
  success: boolean,
  data?: {
    instance: {
      id: string;
      name: string;
      description?: string;
      createdAt: string;
      updatedAt: string;
    }
  }
}
```

### Examples

#### Example 1: Create Basic Instance
```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.eventLog.createInstance(
  'user-activity',
  'Logs user actions and system events'
);

if (result.success) {
  console.log('Created instance:', result.data.instance.id);
}
```

#### Example 2: Create Instance for Audit Trail
```javascript
const result = await codebolt.eventLog.createInstance(
  'audit-trail',
  'Comprehensive audit log for all data modifications and access'
);

if (result.success) {
  console.log('Audit log instance ready');
}
```

#### Example 3: Create Multiple Instances for Different Purposes
```javascript
const logs = [
  { name: 'user-activity', desc: 'User actions and interactions' },
  { name: 'system-events', desc: 'System-level events and errors' },
  { name: 'api-calls', desc: 'API request and response logging' }
];

for (const log of logs) {
  const result = await codebolt.eventLog.createInstance(log.name, log.desc);
  if (result.success) {
    console.log(`Created ${log.name}: ${result.data.instance.id}`);
  }
}
```

#### Example 4: Create with Detailed Description
```javascript
const result = await codebolt.eventLog.createInstance(
  'security-events',
  'Security-related events including login attempts, permission changes, ' +
  'and potential threats. Used for security monitoring and compliance auditing.'
);
```

#### Example 5: Create Instance for Event Sourcing
```javascript
const result = await codebolt.eventLog.createInstance(
  'order-events',
  'Event sourcing log for order management system. Contains all events ' +
  'related to orders from creation to fulfillment.'
);
```

#### Example 6: Handle Duplicate Names
```javascript
async function getOrCreateInstance(name, description) {
  const result = await codebolt.eventLog.createInstance(name, description);

  if (result.success) {
    return result.data.instance;
  }

  if (result.error?.includes('exists')) {
    const listResult = await codebolt.eventLog.listInstances();
    const existing = listResult.data.instances.find(i => i.name === name);
    return existing;
  }

  throw new Error(result.error);
}
```

### Common Use Cases
**Audit Logging**: Create instances for compliance and security auditing.
**Event Sourcing**: Set up event logs for CQRS and event sourcing patterns.
**Monitoring**: Create instances for different system components.
**Analytics**: Separate logs for different types of analytics data.

### Notes
- Instance names should be unique and descriptive
- The instance ID is required for all subsequent operations
- Use descriptive names that reflect the log's purpose
- Consider naming conventions for better organization
