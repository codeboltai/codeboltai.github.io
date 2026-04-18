---
name: archiveEpisodicMemory
cbbaseinfo:
  description: Archives an episodic memory to remove it from active listings.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the episodic memory to archive
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the memory has been archived
data:
  name: archiveEpisodicMemory
  category: memory
  link: archiveEpisodicMemory.md
---
# archiveEpisodicMemory

```typescript
client.memory.archiveEpisodicMemory(id: string): Promise<unknown>
```

Archives an episodic memory to remove it from active listings.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the episodic memory to archive |

## Returns

**`Promise<unknown>`** — A promise that resolves when the memory has been archived

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.archiveEpisodicMemory('id');
```
