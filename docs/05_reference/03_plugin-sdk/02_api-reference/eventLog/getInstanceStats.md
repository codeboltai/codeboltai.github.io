---
title: getInstanceStats
---

# `getInstanceStats`

```typescript
plugin.eventLog.getInstanceStats(instanceId: string): Promise<EventLogStatsResponse>
```

Get instance statistics

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |

## Returns

`Promise<EventLogStatsResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.eventLog.getInstanceStats('instanceId');
console.log(result);
```
