---
name: createEvent
cbbaseinfo:
  description: "Creates a new event within an event log instance.

Records a single event with its type, payload, and timestamp. Events
are immutable once created."
cbparameters:
  parameters:
    - name: data
      typeName: CreateEventLogEventRequest
      description: Event creation payload including instance ID, type, and data
      isOptional: false
  returns:
    signatureTypeName: "Promise<EventLogEvent>"
    description: A promise that resolves to the newly created
data:
  name: createEvent
  category: eventLog
  link: createEvent.md
---
# createEvent

```typescript
client.eventLog.createEvent(data: CreateEventLogEventRequest): Promise<EventLogEvent>
```

Creates a new event within an event log instance.

Records a single event with its type, payload, and timestamp. Events
are immutable once created.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateEventLogEventRequest` | Event creation payload including instance ID, type, and data |

## Returns

**`Promise<EventLogEvent>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.eventLog.createEvent(/* CreateEventLogEventRequest */);
```
