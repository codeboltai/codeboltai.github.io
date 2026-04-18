---
title: listEvents
---

# `listEvents`

```typescript
plugin.calendarApi.listEvents(params?: CalendarFilterOptions): Promise<CalendarEventSummary[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `CalendarFilterOptions` | No |  |

## Returns

`Promise<CalendarEventSummary[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendarApi.listEvents();
console.log(result);
```
