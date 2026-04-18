---
title: listEvents
---

# `listEvents`

```typescript
plugin.calendar.listEvents(params: IListEventsParams): Promise<IListEventsResponse>
```

List calendar events with optional filters

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IListEventsParams` | Yes | Optional filter parameters _(default: `{}`)_ |

## Returns

`Promise<IListEventsResponse>` — Promise resolving to list of events

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendar.listEvents(/* IListEventsParams */);
console.log(result);
```
