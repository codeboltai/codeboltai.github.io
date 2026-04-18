---
title: createEvent
---

# `createEvent`

```typescript
plugin.calendarApi.createEvent(data: CreateCalendarEventRequest): Promise<CalendarEvent>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateCalendarEventRequest` | Yes |  |

## Returns

`Promise<CalendarEvent>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendarApi.createEvent(/* CreateCalendarEventRequest */);
console.log(result);
```
