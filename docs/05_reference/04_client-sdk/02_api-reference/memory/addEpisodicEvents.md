---
name: addEpisodicEvents
cbbaseinfo:
  description: "Appends new events to an episodic memory.

Adds one or more event records to the episodic memory's timeline. Events capture
discrete actions, observations, or state changes that occurred during an operation."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the episodic memory
      isOptional: false
    - name: data
      typeName: AddEpisodicEventsRequest
      description: The events to add
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the events have been added
data:
  name: addEpisodicEvents
  category: memory
  link: addEpisodicEvents.md
---
# addEpisodicEvents

```typescript
client.memory.addEpisodicEvents(id: string, data: AddEpisodicEventsRequest): Promise<unknown>
```

Appends new events to an episodic memory.

Adds one or more event records to the episodic memory's timeline. Events capture
discrete actions, observations, or state changes that occurred during an operation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the episodic memory |
| `data` | `AddEpisodicEventsRequest` | The events to add |

## Returns

**`Promise<unknown>`** — A promise that resolves when the events have been added

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.addEpisodicEvents('id', /* AddEpisodicEventsRequest */);
```
