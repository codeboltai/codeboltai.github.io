---
name: getTriggeredEventsAndMarkComplete
cbbaseinfo:
  description: Get triggered events and mark them all as complete in one operation
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<IGetTriggeredEventsAndMarkCompleteResponse>"
    description: Promise resolving to the events that were retrieved and marked complete
data:
  name: getTriggeredEventsAndMarkComplete
  category: calendar
  link: getTriggeredEventsAndMarkComplete.md
---
# getTriggeredEventsAndMarkComplete

```typescript
plugin.calendar.getTriggeredEventsAndMarkComplete(): Promise<IGetTriggeredEventsAndMarkCompleteResponse>
```

Get triggered events and mark them all as complete in one operation

## Parameters

_None_

## Returns

**`Promise<IGetTriggeredEventsAndMarkCompleteResponse>`** — Promise resolving to the events that were retrieved and marked complete

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendar.getTriggeredEventsAndMarkComplete();
```
