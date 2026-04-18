---
name: getEpisodicMemory
cbbaseinfo:
  description: "Retrieves a specific episodic memory by its unique identifier.

Returns the episodic memory metadata. Use  to access
the individual events stored within the memory."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the episodic memory to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<MemoryThread>"
    description: A promise that resolves to the episodic memory thread
data:
  name: getEpisodicMemory
  category: memory
  link: getEpisodicMemory.md
---
# getEpisodicMemory

```typescript
client.memory.getEpisodicMemory(id: string): Promise<MemoryThread>
```

Retrieves a specific episodic memory by its unique identifier.

Returns the episodic memory metadata. Use  to access
the individual events stored within the memory.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the episodic memory to retrieve |

## Returns

**`Promise<MemoryThread>`** — A promise that resolves to the episodic memory thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.getEpisodicMemory('id');
```
