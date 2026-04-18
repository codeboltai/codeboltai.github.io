---
name: rsvp
cbbaseinfo:
  description: "Sends an RSVP response to a calendar event.

Records a participant's attendance response (accept, decline, tentative)
for the specified event."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the calendar event
      isOptional: false
    - name: data
      typeName: CalendarRSVPRequest
      description: The RSVP payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the RSVP has been recorded
data:
  name: rsvp
  category: calendar
  link: rsvp.md
---
# rsvp

```typescript
client.calendar.rsvp(id: string, data: CalendarRSVPRequest): Promise<void>
```

Sends an RSVP response to a calendar event.

Records a participant's attendance response (accept, decline, tentative)
for the specified event.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the calendar event |
| `data` | `CalendarRSVPRequest` | The RSVP payload |

## Returns

**`Promise<void>`** — A promise that resolves when the RSVP has been recorded

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.calendar.rsvp('id', /* CalendarRSVPRequest */);
```
