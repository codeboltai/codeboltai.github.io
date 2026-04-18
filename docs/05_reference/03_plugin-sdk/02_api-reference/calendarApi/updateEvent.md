---
title: updateEvent
---

# `updateEvent`

```typescript
plugin.calendarApi.updateEvent(id: string, data: UpdateCalendarEventRequest): Promise<CalendarEvent>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateCalendarEventRequest` | Yes |  |

## Returns

`Promise<CalendarEvent>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendarApi.updateEvent('id', /* UpdateCalendarEventRequest */);
console.log(result);
```
