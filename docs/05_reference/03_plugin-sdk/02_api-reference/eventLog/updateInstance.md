---
title: updateInstance
---

# `updateInstance`

```typescript
plugin.eventLog.updateInstance(instanceId: string, updates: UpdateEventLogInstanceParams): Promise<EventLogInstanceResponse>
```

Update an event log instance

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |
| `updates` | `UpdateEventLogInstanceParams` | Yes | Update parameters |

## Returns

`Promise<EventLogInstanceResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.eventLog.updateInstance('instanceId', /* UpdateEventLogInstanceParams */);
console.log(result);
```
