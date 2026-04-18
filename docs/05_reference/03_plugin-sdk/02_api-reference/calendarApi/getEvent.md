---
title: getEvent
---

# `getEvent`

```typescript
plugin.calendarApi.getEvent(id: string): Promise<CalendarEvent>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<CalendarEvent>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendarApi.getEvent('id');
console.log(result);
```
