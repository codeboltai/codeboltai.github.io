---
name: updateEvent
cbbaseinfo:
  description: "Updates a calendar event.

Modifies the properties of an existing calendar event such as
its title, time, or configuration."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the event to update
      isOptional: false
    - name: data
      typeName: UpdateCalendarEventRequest
      description: The fields to update on the event
      isOptional: false
  returns:
    signatureTypeName: "Promise<CalendarEvent>"
    description: A promise that resolves to the updated CalendarEvent
data:
  name: updateEvent
  category: calendar
  link: updateEvent.md
---
# updateEvent

```typescript
client.calendar.updateEvent(id: string, data: UpdateCalendarEventRequest): Promise<CalendarEvent>
```

Updates a calendar event.

Modifies the properties of an existing calendar event such as
its title, time, or configuration.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the event to update |
| `data` | `UpdateCalendarEventRequest` | The fields to update on the event |

## Returns

**`Promise<CalendarEvent>`** — A promise that resolves to the updated CalendarEvent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.calendar.updateEvent('id', /* UpdateCalendarEventRequest */);
```
