---
title: markEventsComplete
---

# `markEventsComplete`

```typescript
plugin.calendar.markEventsComplete(params: IMarkEventsCompleteParams): Promise<IMarkEventsCompleteResponse>
```

Mark multiple events as complete

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IMarkEventsCompleteParams` | Yes | Parameters including array of eventIds |

## Returns

`Promise<IMarkEventsCompleteResponse>` — Promise resolving to the completed events

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendar.markEventsComplete(/* IMarkEventsCompleteParams */);
console.log(result);
```
