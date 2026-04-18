---
title: getInstance
---

# `getInstance`

```typescript
plugin.eventLog.getInstance(instanceId: string): Promise<EventLogInstanceResponse>
```

Get an event log instance by ID

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |

## Returns

`Promise<EventLogInstanceResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.eventLog.getInstance('instanceId');
console.log(result);
```
