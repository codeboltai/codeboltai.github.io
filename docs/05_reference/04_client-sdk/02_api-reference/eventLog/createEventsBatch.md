---
name: createEventsBatch
cbbaseinfo:
  description: "Creates multiple events in a single batch operation.

More efficient than creating events one at a time when you have
multiple events to record simultaneously."
cbparameters:
  parameters:
    - name: data
      typeName: CreateEventLogEventRequest[]
      description: An array of event creation payloads
      isOptional: false
  returns:
    signatureTypeName: "Promise<EventLogEvent[]>"
    description: A promise that resolves to an array of the created  objects
data:
  name: createEventsBatch
  category: eventLog
  link: createEventsBatch.md
---
# createEventsBatch

```typescript
client.eventLog.createEventsBatch(data: CreateEventLogEventRequest[]): Promise<EventLogEvent[]>
```

Creates multiple events in a single batch operation.

More efficient than creating events one at a time when you have
multiple events to record simultaneously.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateEventLogEventRequest[]` | An array of event creation payloads |

## Returns

**`Promise<EventLogEvent[]>`** — A promise that resolves to an array of the created  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.eventLog.createEventsBatch(/* CreateEventLogEventRequest[] */);
```
