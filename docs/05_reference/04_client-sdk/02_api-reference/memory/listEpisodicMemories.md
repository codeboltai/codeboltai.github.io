---
name: listEpisodicMemories
cbbaseinfo:
  description: "Lists all episodic memories with optional filtering.

Returns episodic memory records that match the provided criteria."
cbparameters:
  parameters:
    - name: params
      typeName: ListMemoryThreadsParams
      description: Optional filtering and pagination parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<MemoryThread[]>"
    description: A promise that resolves to an array of episodic memory threads
data:
  name: listEpisodicMemories
  category: memory
  link: listEpisodicMemories.md
---
# listEpisodicMemories

```typescript
client.memory.listEpisodicMemories(params?: ListMemoryThreadsParams): Promise<MemoryThread[]>
```

Lists all episodic memories with optional filtering.

Returns episodic memory records that match the provided criteria.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `ListMemoryThreadsParams` _(optional)_ | Optional filtering and pagination parameters |

## Returns

**`Promise<MemoryThread[]>`** — A promise that resolves to an array of episodic memory threads

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.listEpisodicMemories();
```
