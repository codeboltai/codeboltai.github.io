---
title: getRange
---

# `getRange`

```typescript
plugin.calendarApi.getRange(params?: CalendarFilterOptions): Promise<CalendarEvent[]>
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

const result = await plugin.calendarApi.getRange();
console.log(result);
```
