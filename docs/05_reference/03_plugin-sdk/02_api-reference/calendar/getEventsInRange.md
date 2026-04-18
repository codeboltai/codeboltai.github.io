---
title: getEventsInRange
---

# `getEventsInRange`

```typescript
plugin.calendar.getEventsInRange(params: IGetEventsInRangeParams): Promise<IGetEventsInRangeResponse>
```

Get events within a specific date range

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IGetEventsInRangeParams` | Yes | Parameters including startDate and endDate |

## Returns

`Promise<IGetEventsInRangeResponse>` — Promise resolving to events in range

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendar.getEventsInRange(/* IGetEventsInRangeParams */);
console.log(result);
```
