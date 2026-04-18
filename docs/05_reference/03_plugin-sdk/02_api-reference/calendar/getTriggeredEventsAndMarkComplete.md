---
title: getTriggeredEventsAndMarkComplete
---

# `getTriggeredEventsAndMarkComplete`

```typescript
plugin.calendar.getTriggeredEventsAndMarkComplete(): Promise<IGetTriggeredEventsAndMarkCompleteResponse>
```

Get triggered events and mark them all as complete in one operation

## Parameters

_No parameters._

## Returns

`Promise<IGetTriggeredEventsAndMarkCompleteResponse>` — Promise resolving to the events that were retrieved and marked complete

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendar.getTriggeredEventsAndMarkComplete();
console.log(result);
```
