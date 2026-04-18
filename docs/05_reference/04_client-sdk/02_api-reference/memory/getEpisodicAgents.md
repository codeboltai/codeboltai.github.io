---
name: getEpisodicAgents
cbbaseinfo:
  description: "Retrieves the distinct agents that have contributed events to an episodic memory.

Returns the unique set of agent identifiers that recorded events in this memory."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the episodic memory
      isOptional: false
  returns:
    signatureTypeName: "Promise<string[]>"
    description: A promise that resolves to an array of agent identifier strings
data:
  name: getEpisodicAgents
  category: memory
  link: getEpisodicAgents.md
---
# getEpisodicAgents

```typescript
client.memory.getEpisodicAgents(id: string): Promise<string[]>
```

Retrieves the distinct agents that have contributed events to an episodic memory.

Returns the unique set of agent identifiers that recorded events in this memory.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the episodic memory |

## Returns

**`Promise<string[]>`** — A promise that resolves to an array of agent identifier strings

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.getEpisodicAgents('id');
```
