---
name: getTriggeredEvents
cbbaseinfo:
  description: Get triggered events (events whose start time has passed)
cbparameters:
  parameters:
    - name: params
      typeName: IGetTriggeredEventsParams
      description: Optional parameters including includeCompleted flag
      isOptional: false
  returns:
    signatureTypeName: "Promise<IGetTriggeredEventsResponse>"
    description: Promise resolving to triggered events
data:
  name: getTriggeredEvents
  category: calendar
  link: getTriggeredEvents.md
---
# getTriggeredEvents

```typescript
plugin.calendar.getTriggeredEvents(params: IGetTriggeredEventsParams): Promise<IGetTriggeredEventsResponse>
```

Get triggered events (events whose start time has passed)

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IGetTriggeredEventsParams` | Optional parameters including includeCompleted flag Default: `{}` |

## Returns

**`Promise<IGetTriggeredEventsResponse>`** — Promise resolving to triggered events

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendar.getTriggeredEvents(/* IGetTriggeredEventsParams */);
```
