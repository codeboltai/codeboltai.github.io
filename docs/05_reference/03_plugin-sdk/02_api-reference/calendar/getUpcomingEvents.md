---
title: getUpcomingEvents
---

# `getUpcomingEvents`

```typescript
plugin.calendar.getUpcomingEvents(params: IGetUpcomingEventsParams): Promise<IGetUpcomingEventsResponse>
```

Get upcoming events within a specified time window

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IGetUpcomingEventsParams` | Yes | Optional parameters including withinMinutes (default: 60) _(default: `{}`)_ |

## Returns

`Promise<IGetUpcomingEventsResponse>` — Promise resolving to upcoming events

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendar.getUpcomingEvents(/* IGetUpcomingEventsParams */);
console.log(result);
```
