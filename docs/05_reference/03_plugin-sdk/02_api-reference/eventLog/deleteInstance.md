---
title: deleteInstance
---

# `deleteInstance`

```typescript
plugin.eventLog.deleteInstance(instanceId: string): Promise<EventLogInstanceResponse>
```

Delete an event log instance

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |

## Returns

`Promise<EventLogInstanceResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.eventLog.deleteInstance('instanceId');
console.log(result);
```
