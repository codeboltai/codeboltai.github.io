---
name: listEvents
cbbaseinfo:
  description: "Retrieves all calendar events as summaries.

Returns lightweight summary representations of all events,
suitable for calendar overview displays."
cbparameters:
  parameters:
    - name: params
      typeName: CalendarFilterOptions
      description: Optional filter options for narrowing results
      isOptional: true
  returns:
    signatureTypeName: "Promise<CalendarEventSummary[]>"
    description: A promise that resolves to an array of CalendarEventSummary objects
data:
  name: listEvents
  category: calendar
  link: listEvents.md
---
# listEvents

```typescript
client.calendar.listEvents(params?: CalendarFilterOptions): Promise<CalendarEventSummary[]>
```

Retrieves all calendar events as summaries.

Returns lightweight summary representations of all events,
suitable for calendar overview displays.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `CalendarFilterOptions` _(optional)_ | Optional filter options for narrowing results |

## Returns

**`Promise<CalendarEventSummary[]>`** — A promise that resolves to an array of CalendarEventSummary objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.calendar.listEvents();
```
