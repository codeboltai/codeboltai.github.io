---
title: deleteEvent
---

# `deleteEvent`

```typescript
plugin.calendar.deleteEvent(params: IDeleteEventParams): Promise<IDeleteEventResponse>
```

Delete a calendar event

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IDeleteEventParams` | Yes | Parameters including eventId |

## Returns

`Promise<IDeleteEventResponse>` — Promise resolving to deletion confirmation

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendar.deleteEvent(/* IDeleteEventParams */);
console.log(result);
```
