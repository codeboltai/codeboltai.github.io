---
name: updateInstance
cbbaseinfo:
  description: Update an event log instance
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: Instance ID
      isOptional: false
    - name: updates
      typeName: UpdateEventLogInstanceParams
      description: Update parameters
      isOptional: false
  returns:
    signatureTypeName: "Promise<EventLogInstanceResponse>"
    description: ""
data:
  name: updateInstance
  category: eventLog
  link: updateInstance.md
---
# updateInstance

```typescript
plugin.eventLog.updateInstance(instanceId: string, updates: UpdateEventLogInstanceParams): Promise<EventLogInstanceResponse>
```

Update an event log instance

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | Instance ID |
| `updates` | `UpdateEventLogInstanceParams` | Update parameters |

## Returns

**`Promise<EventLogInstanceResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.eventLog.updateInstance('instanceId', /* UpdateEventLogInstanceParams */);
```
