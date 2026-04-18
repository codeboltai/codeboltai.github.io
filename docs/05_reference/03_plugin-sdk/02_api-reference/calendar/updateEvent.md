---
title: updateEvent
---

# `updateEvent`

```typescript
plugin.calendar.updateEvent(params: IUpdateEventParams): Promise<IUpdateEventResponse>
```

Update an existing calendar event

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IUpdateEventParams` | Yes | Event update parameters including eventId |

## Returns

`Promise<IUpdateEventResponse>` — Promise resolving to the updated event

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendar.updateEvent(/* IUpdateEventParams */);
console.log(result);
```
