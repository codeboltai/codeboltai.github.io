---
name: deleteChunk
cbbaseinfo:
  description: "Deletes a specific chunk from a vector collection.

Removes a single chunk by its unique identifier. This is useful for
granular cleanup when individual chunks need to be removed without
affecting other content in the collection."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the collection
      isOptional: false
    - name: chunkId
      typeName: string
      description: The unique identifier of the chunk to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the chunk has been deleted
data:
  name: deleteChunk
  category: vectorDb
  link: deleteChunk.md
---
# deleteChunk

```typescript
client.vectorDb.deleteChunk(id: string, chunkId: string): Promise<unknown>
```

Deletes a specific chunk from a vector collection.

Removes a single chunk by its unique identifier. This is useful for
granular cleanup when individual chunks need to be removed without
affecting other content in the collection.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the collection |
| `chunkId` | `string` | The unique identifier of the chunk to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the chunk has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.vectorDb.deleteChunk('id', 'chunkId');
```
