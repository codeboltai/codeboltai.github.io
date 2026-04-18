---
title: getTriggered
---

# `getTriggered`

```typescript
plugin.calendarApi.getTriggered(params?: CalendarFilterOptions): Promise<CalendarEvent[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `CalendarFilterOptions` | No |  |

## Returns

`Promise<CalendarEvent[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendarApi.getTriggered();
console.log(result);
```
