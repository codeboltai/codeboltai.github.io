---
name: getInstanceStats
cbbaseinfo:
  description: Get instance statistics
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: Instance ID
      isOptional: false
  returns:
    signatureTypeName: "Promise<EventLogStatsResponse>"
    description: ""
data:
  name: getInstanceStats
  category: eventLog
  link: getInstanceStats.md
---
# getInstanceStats

```typescript
plugin.eventLog.getInstanceStats(instanceId: string): Promise<EventLogStatsResponse>
```

Get instance statistics

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | Instance ID |

## Returns

**`Promise<EventLogStatsResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.eventLog.getInstanceStats('instanceId');
```
