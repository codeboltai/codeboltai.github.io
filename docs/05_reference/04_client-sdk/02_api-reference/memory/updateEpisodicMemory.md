---
name: updateEpisodicMemory
cbbaseinfo:
  description: Updates the metadata of an episodic memory.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the episodic memory to update
      isOptional: false
    - name: data
      typeName: UpdateEpisodicMemoryRequest
      description: The fields to update
      isOptional: false
  returns:
    signatureTypeName: "Promise<MemoryThread>"
    description: A promise that resolves to the updated episodic memory thread
data:
  name: updateEpisodicMemory
  category: memory
  link: updateEpisodicMemory.md
---
# updateEpisodicMemory

```typescript
client.memory.updateEpisodicMemory(id: string, data: UpdateEpisodicMemoryRequest): Promise<MemoryThread>
```

Updates the metadata of an episodic memory.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the episodic memory to update |
| `data` | `UpdateEpisodicMemoryRequest` | The fields to update |

## Returns

**`Promise<MemoryThread>`** — A promise that resolves to the updated episodic memory thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.updateEpisodicMemory('id', /* UpdateEpisodicMemoryRequest */);
```
