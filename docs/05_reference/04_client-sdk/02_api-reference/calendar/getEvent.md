---
name: getEvent
cbbaseinfo:
  description: "Retrieves a specific calendar event by ID.

Returns the full event details including all metadata, participants,
and configuration."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the calendar event
      isOptional: false
  returns:
    signatureTypeName: "Promise<CalendarEvent>"
    description: A promise that resolves to the CalendarEvent object
data:
  name: getEvent
  category: calendar
  link: getEvent.md
---
# getEvent

```typescript
client.calendar.getEvent(id: string): Promise<CalendarEvent>
```

Retrieves a specific calendar event by ID.

Returns the full event details including all metadata, participants,
and configuration.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the calendar event |

## Returns

**`Promise<CalendarEvent>`** — A promise that resolves to the CalendarEvent object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.calendar.getEvent('id');
```
