---
title: completeEvents
---

# `completeEvents`

```typescript
plugin.calendarApi.completeEvents(data: BulkCompleteEventsRequest): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `BulkCompleteEventsRequest` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendarApi.completeEvents(/* BulkCompleteEventsRequest */);
console.log(result);
```
