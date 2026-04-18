---
title: deleteEvent
---

# `deleteEvent`

```typescript
plugin.calendarApi.deleteEvent(id: string): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendarApi.deleteEvent('id');
console.log(result);
```
