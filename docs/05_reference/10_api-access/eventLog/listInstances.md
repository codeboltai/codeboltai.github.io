---
name: listInstances
cbbaseinfo:
  description: Lists all available event log instances.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<EventLogInstanceListResponse>"
    description: A promise that resolves with an array of all event log instances.
data:
  name: listInstances
  category: eventLog
  link: listInstances.md
---
# listInstances

```typescript
codebolt.eventLog.listInstances(): Promise<EventLogInstanceListResponse>
```

Lists all available event log instances.
### Returns

- **`Promise<[EventLogInstanceListResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/EventLogInstanceListResponse)>`**: A promise that resolves with an array of all event log instances.

### Response Structure

```typescript
{
  type: 'eventLog.listInstances',
  success: boolean,
  data?: {
    instances: Array<{
      id: string;
      name: string;
      description?: string;
      createdAt: string;
      updatedAt: string;
    }>
  }
}
```

### Examples

#### Example 1: List All Instances
```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.eventLog.listInstances();

if (result.success) {
  console.log(`Found ${result.data.instances.length} instances`);
  result.data.instances.forEach(instance => {
    console.log(`- ${instance.name} (${instance.id})`);
  });
}
```

#### Example 2: Find Instance by Name
```javascript
const result = await codebolt.eventLog.listInstances();

const instance = result.data.instances.find(
  i => i.name === 'user-activity'
);

if (instance) {
  console.log('Found instance:', instance.id);
}
```

### Common Use Cases
**Instance Discovery**: Find available instances.
**Inventory Management**: Get a complete list for administration.
**Instance Selection**: Browse instances to choose the right one.

### Notes
- Returns all instances regardless of size or activity
- Use getInstance for detailed information about a specific instance