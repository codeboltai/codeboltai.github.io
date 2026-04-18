---
title: markEventComplete
---

# `markEventComplete`

```typescript
plugin.calendar.markEventComplete(params: IMarkEventCompleteParams): Promise<IMarkEventCompleteResponse>
```

Mark a single event as complete

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IMarkEventCompleteParams` | Yes | Parameters including eventId |

## Returns

`Promise<IMarkEventCompleteResponse>` — Promise resolving to the completed event

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendar.markEventComplete(/* IMarkEventCompleteParams */);
console.log(result);
```
