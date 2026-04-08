---
name: deleteInstance
cbbaseinfo:
  description: Deletes an event log instance and all its events.
cbparameters:
  parameters:
    - name: instanceId
      type: string
      required: true
      description: The unique identifier of the event log instance to delete.
  returns:
    signatureTypeName: "Promise<EventLogInstanceResponse>"
    description: A promise that resolves when the instance is deleted.
data:
  name: deleteInstance
  category: eventLog
  link: deleteInstance.md
---
# deleteInstance

```typescript
codebolt.eventLog.deleteInstance(instanceId: undefined): Promise<EventLogInstanceResponse>
```

Deletes an event log instance and all its events.
### Parameters

- **`instanceId`** (unknown): The unique identifier of the event log instance to delete.

### Returns

- **`Promise<[EventLogInstanceResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/EventLogInstanceResponse)>`**: A promise that resolves when the instance is deleted.

### Examples

#### Example 1: Delete Instance
```javascript
const result = await codebolt.eventLog.deleteInstance('log-instance-id');

if (result.success) {
  console.log('Instance deleted');
}
```

#### Example 2: Delete with Confirmation
```javascript
async function deleteWithConfirmation(instanceId) {
  const instance = await codebolt.eventLog.getInstance(instanceId);

  console.log(`Delete instance "${instance.data.instance.name}"?`);
  // Confirm before deleting

  const result = await codebolt.eventLog.deleteInstance(instanceId);
  return result.success;
}
```

### Notes
- **WARNING**: Permanently deletes all events in the instance
- Operation is irreversible
- Consider backing up important data before deletion