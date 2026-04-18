---
name: completeEvent
cbbaseinfo:
  description: "Marks a specific calendar event as complete.

Records the completion of an event, optionally with completion
details such as outcome or notes."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the event to complete
      isOptional: false
    - name: data
      typeName: CompleteEventRequest
      description: Optional completion details
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the event has been marked complete
data:
  name: completeEvent
  category: calendar
  link: completeEvent.md
---
# completeEvent

```typescript
client.calendar.completeEvent(id: string, data?: CompleteEventRequest): Promise<void>
```

Marks a specific calendar event as complete.

Records the completion of an event, optionally with completion
details such as outcome or notes.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the event to complete |
| `data` | `CompleteEventRequest` _(optional)_ | Optional completion details |

## Returns

**`Promise<void>`** — A promise that resolves when the event has been marked complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.calendar.completeEvent('id');
```
