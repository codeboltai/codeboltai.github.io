---
name: getInstance
cbbaseinfo:
  description: Get an event log instance by ID
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
  name: getInstance
  category: eventLog
  link: getInstance.md
---
# getInstance

```typescript
plugin.eventLog.getInstance(instanceId: string): Promise<EventLogInstanceResponse>
```

Get an event log instance by ID

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | Instance ID |

## Returns

**`Promise<EventLogInstanceResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.eventLog.getInstance('instanceId');
```
