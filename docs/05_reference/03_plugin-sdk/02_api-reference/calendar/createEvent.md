---
title: createEvent
---

# `createEvent`

```typescript
plugin.calendar.createEvent(params: ICreateEventParams): Promise<ICreateEventResponse>
```

Create a new calendar event

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `ICreateEventParams` | Yes | Event creation parameters |

## Returns

`Promise<ICreateEventResponse>` — Promise resolving to the created event

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendar.createEvent(/* ICreateEventParams */);
console.log(result);
```
