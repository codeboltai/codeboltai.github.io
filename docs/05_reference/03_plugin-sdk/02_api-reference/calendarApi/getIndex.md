---
title: getIndex
---

# `getIndex`

```typescript
plugin.calendarApi.getIndex(params?: CalendarFilterOptions): Promise<CalendarIndexEntry[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `CalendarFilterOptions` | No |  |

## Returns

`Promise<CalendarIndexEntry[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendarApi.getIndex();
console.log(result);
```
