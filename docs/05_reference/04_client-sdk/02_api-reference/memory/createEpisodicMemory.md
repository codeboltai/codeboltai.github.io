---
name: createEpisodicMemory
cbbaseinfo:
  description: "Creates a new episodic memory for tracking temporal events and experiences.

Episodic memories store sequences of events that occurred during agent operations,
similar to how human episodic memory records experiences. They are useful for
learning from past actions and debugging agent behavior."
cbparameters:
  parameters:
    - name: data
      typeName: CreateEpisodicMemoryRequest
      description: The episodic memory creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<MemoryThread>"
    description: A promise that resolves to the newly created episodic memory thread
data:
  name: createEpisodicMemory
  category: memory
  link: createEpisodicMemory.md
---
# createEpisodicMemory

```typescript
client.memory.createEpisodicMemory(data: CreateEpisodicMemoryRequest): Promise<MemoryThread>
```

Creates a new episodic memory for tracking temporal events and experiences.

Episodic memories store sequences of events that occurred during agent operations,
similar to how human episodic memory records experiences. They are useful for
learning from past actions and debugging agent behavior.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateEpisodicMemoryRequest` | The episodic memory creation payload |

## Returns

**`Promise<MemoryThread>`** — A promise that resolves to the newly created episodic memory thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.createEpisodicMemory(/* CreateEpisodicMemoryRequest */);
```
