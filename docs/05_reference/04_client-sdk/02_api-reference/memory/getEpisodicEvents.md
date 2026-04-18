---
name: getEpisodicEvents
cbbaseinfo:
  description: "Retrieves events from an episodic memory with optional filtering.

Returns the sequence of events stored in the episodic memory, optionally filtered
by event type, date range, or agent."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the episodic memory
      isOptional: false
    - name: params
      typeName: EpisodicEventsParams
      description: Optional parameters to filter events
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the filtered list of events
data:
  name: getEpisodicEvents
  category: memory
  link: getEpisodicEvents.md
---
# getEpisodicEvents

```typescript
client.memory.getEpisodicEvents(id: string, params?: EpisodicEventsParams): Promise<unknown>
```

Retrieves events from an episodic memory with optional filtering.

Returns the sequence of events stored in the episodic memory, optionally filtered
by event type, date range, or agent.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the episodic memory |
| `params` | `EpisodicEventsParams` _(optional)_ | Optional parameters to filter events |

## Returns

**`Promise<unknown>`** — A promise that resolves to the filtered list of events

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.getEpisodicEvents('id');
```
