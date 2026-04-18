---
name: getUpcomingEvents
cbbaseinfo:
  description: Get upcoming events within a specified time window
cbparameters:
  parameters:
    - name: params
      typeName: IGetUpcomingEventsParams
      description: "Optional parameters including withinMinutes (default: 60)"
      isOptional: false
  returns:
    signatureTypeName: "Promise<IGetUpcomingEventsResponse>"
    description: Promise resolving to upcoming events
data:
  name: getUpcomingEvents
  category: calendar
  link: getUpcomingEvents.md
---
# getUpcomingEvents

```typescript
plugin.calendar.getUpcomingEvents(params: IGetUpcomingEventsParams): Promise<IGetUpcomingEventsResponse>
```

Get upcoming events within a specified time window

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IGetUpcomingEventsParams` | Optional parameters including withinMinutes (default: 60) Default: `{}` |

## Returns

**`Promise<IGetUpcomingEventsResponse>`** — Promise resolving to upcoming events

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendar.getUpcomingEvents(/* IGetUpcomingEventsParams */);
```
