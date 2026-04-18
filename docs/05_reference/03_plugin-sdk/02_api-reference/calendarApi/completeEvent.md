---
title: completeEvent
---

# `completeEvent`

```typescript
plugin.calendarApi.completeEvent(id: string, data?: CompleteEventRequest): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `CompleteEventRequest` | No |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendarApi.completeEvent('id');
console.log(result);
```
