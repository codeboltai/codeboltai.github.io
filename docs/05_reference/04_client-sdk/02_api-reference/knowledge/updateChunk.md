---
name: updateChunk
cbbaseinfo:
  description: "Updates a specific chunk's content or metadata.

Modifies an individual chunk within a document. Useful for
correcting chunking artifacts or adding manual annotations."
cbparameters:
  parameters:
    - name: chunkId
      typeName: string
      description: The unique identifier of the chunk to update
      isOptional: false
    - name: data
      typeName: UpdateKnowledgeChunkRequest
      description: The fields to update on the chunk
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the chunk has been updated
data:
  name: updateChunk
  category: knowledge
  link: updateChunk.md
---
# updateChunk

```typescript
client.knowledge.updateChunk(chunkId: string, data: UpdateKnowledgeChunkRequest): Promise<unknown>
```

Updates a specific chunk's content or metadata.

Modifies an individual chunk within a document. Useful for
correcting chunking artifacts or adding manual annotations.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `chunkId` | `string` | The unique identifier of the chunk to update |
| `data` | `UpdateKnowledgeChunkRequest` | The fields to update on the chunk |

## Returns

**`Promise<unknown>`** — A promise that resolves when the chunk has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledge.updateChunk('chunkId', /* UpdateKnowledgeChunkRequest */);
```
