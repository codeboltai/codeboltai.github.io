---
name: deleteInstance
cbbaseinfo:
  description: Delete an event log instance
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: Instance ID
      isOptional: false
  returns:
    signatureTypeName: "Promise<EventLogInstanceResponse>"
    description: ""
data:
  name: deleteInstance
  category: eventLog
  link: deleteInstance.md
---
# deleteInstance

```typescript
plugin.eventLog.deleteInstance(instanceId: string): Promise<EventLogInstanceResponse>
```

Delete an event log instance

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | Instance ID |

## Returns

**`Promise<EventLogInstanceResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.eventLog.deleteInstance('instanceId');
```
