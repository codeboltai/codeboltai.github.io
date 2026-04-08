---
name: updateInstance
cbbaseinfo:
  description: Updates the name or description of an event log instance.
cbparameters:
  parameters:
    - name: instanceId
      type: string
      required: true
      description: The unique identifier of the event log instance.
    - name: updates
      type: UpdateEventLogInstanceParams
      required: true
      description: Object containing name and/or description to update.
  returns:
    signatureTypeName: "Promise<EventLogInstanceResponse>"
    description: A promise that resolves with the updated instance details.
data:
  name: updateInstance
  category: eventLog
  link: updateInstance.md
---
# updateInstance

```typescript
codebolt.eventLog.updateInstance(instanceId: undefined, updates: undefined): Promise<EventLogInstanceResponse>
```

Updates the name or description of an event log instance.
### Parameters

- **`instanceId`** (unknown): The unique identifier of the event log instance.
- **`updates`** (unknown): Object containing name and/or description to update.

### Returns

- **`Promise<[EventLogInstanceResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/EventLogInstanceResponse)>`**: A promise that resolves with the updated instance details.

### Examples

#### Example 1: Update Instance Name
```javascript
const result = await codebolt.eventLog.updateInstance(
  'log-instance-id',
  { name: 'production-user-activity' }
);
```

#### Example 2: Update Description
```javascript
const result = await codebolt.eventLog.updateInstance(
  'log-instance-id',
  { description: 'Updated description reflecting new usage patterns' }
);
```

### Notes
- Only name and description can be updated
- Instance data (events) is not affected