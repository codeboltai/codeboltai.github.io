---
title: getEvent
---

# `getEvent`

```typescript
plugin.calendar.getEvent(params: IGetEventParams): Promise<IGetEventResponse>
```

Get a single calendar event by ID

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IGetEventParams` | Yes | Parameters including eventId |

## Returns

`Promise<IGetEventResponse>` — Promise resolving to the event

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendar.getEvent(/* IGetEventParams */);
console.log(result);
```
