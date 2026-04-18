---
title: getTriggeredEvents
---

# `getTriggeredEvents`

```typescript
plugin.calendar.getTriggeredEvents(params: IGetTriggeredEventsParams): Promise<IGetTriggeredEventsResponse>
```

Get triggered events (events whose start time has passed)

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IGetTriggeredEventsParams` | Yes | Optional parameters including includeCompleted flag _(default: `{}`)_ |

## Returns

`Promise<IGetTriggeredEventsResponse>` — Promise resolving to triggered events

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendar.getTriggeredEvents(/* IGetTriggeredEventsParams */);
console.log(result);
```
