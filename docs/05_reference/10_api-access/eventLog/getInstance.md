---
name: getInstance
cbbaseinfo:
  description: Gets details of a specific event log instance.
cbparameters:
  parameters:
    - name: instanceId
      type: string
      required: true
      description: The unique identifier of the event log instance.
  returns:
    signatureTypeName: "Promise<EventLogInstanceResponse>"
    description: A promise that resolves with the instance details.
data:
  name: getInstance
  category: eventLog
  link: getInstance.md
---
# getInstance

```typescript
codebolt.eventLog.getInstance(instanceId: undefined): Promise<EventLogInstanceResponse>
```

Gets details of a specific event log instance.
### Parameters

- **`instanceId`** (unknown): The unique identifier of the event log instance.

### Returns

- **`Promise<[EventLogInstanceResponse](/docs/reference/type-reference/codeboltjs/interfaces/EventLogInstanceResponse)>`**: A promise that resolves with the instance details.

### Response Structure

```typescript
{
  type: 'eventLog.getInstance',
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

#### Example 1: Get Instance Details
```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.eventLog.getInstance('log-instance-id');

if (result.success) {
  const { id, name, description, createdAt } = result.data.instance;
  console.log(`Instance: ${name} (${id})`);
  console.log(`Created: ${new Date(createdAt).toLocaleString()}`);
}
```

#### Example 2: Verify Instance Before Use
```javascript
async function safeAppendEvent(instanceId, event) {
  const checkResult = await codebolt.eventLog.getInstance(instanceId);

  if (!checkResult.success) {
    throw new Error(`Instance not found: ${instanceId}`);
  }

  return await codebolt.eventLog.appendEvent({
    instanceId,
    ...event
  });
}
```

### Common Use Cases
**Instance Verification**: Check if an instance exists before operations.
**Metadata Display**: Show instance information in dashboards.
**Instance Discovery**: Retrieve instance details by ID.

### Notes
- Returns instance metadata only, not events
- Use queryEvents to retrieve actual event data