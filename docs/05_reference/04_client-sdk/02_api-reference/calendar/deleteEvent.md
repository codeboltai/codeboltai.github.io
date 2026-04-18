---
name: deleteEvent
cbbaseinfo:
  description: "Deletes a calendar event.

Permanently removes the specified calendar event."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the event to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the event has been deleted
data:
  name: deleteEvent
  category: calendar
  link: deleteEvent.md
---
# deleteEvent

```typescript
client.calendar.deleteEvent(id: string): Promise<void>
```

Deletes a calendar event.

Permanently removes the specified calendar event.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the event to delete |

## Returns

**`Promise<void>`** — A promise that resolves when the event has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.calendar.deleteEvent('id');
```
