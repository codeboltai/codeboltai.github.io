---
name: createEvent
cbbaseinfo:
  description: "Creates a new calendar event.

Schedules a new event that can trigger agent actions or serve as
a coordination point for workflows."
cbparameters:
  parameters:
    - name: data
      typeName: CreateCalendarEventRequest
      description: The event creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<CalendarEvent>"
    description: A promise that resolves to the newly created CalendarEvent
data:
  name: createEvent
  category: calendar
  link: createEvent.md
---
# createEvent

```typescript
client.calendar.createEvent(data: CreateCalendarEventRequest): Promise<CalendarEvent>
```

Creates a new calendar event.

Schedules a new event that can trigger agent actions or serve as
a coordination point for workflows.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateCalendarEventRequest` | The event creation payload |

## Returns

**`Promise<CalendarEvent>`** — A promise that resolves to the newly created CalendarEvent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.calendar.createEvent(/* CreateCalendarEventRequest */);
```
