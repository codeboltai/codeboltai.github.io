---
name: unarchiveEpisodicMemory
cbbaseinfo:
  description: Restores an archived episodic memory back to active status.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the episodic memory to unarchive
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the memory has been unarchived
data:
  name: unarchiveEpisodicMemory
  category: memory
  link: unarchiveEpisodicMemory.md
---
# unarchiveEpisodicMemory

```typescript
client.memory.unarchiveEpisodicMemory(id: string): Promise<unknown>
```

Restores an archived episodic memory back to active status.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the episodic memory to unarchive |

## Returns

**`Promise<unknown>`** — A promise that resolves when the memory has been unarchived

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.unarchiveEpisodicMemory('id');
```
