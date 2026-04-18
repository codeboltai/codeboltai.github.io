---
name: getChunks
cbbaseinfo:
  description: "Retrieves chunks from a vector collection.

Fetches text chunks that were created when documents were processed.
Chunks are smaller segments of documents used for more granular
similarity search and retrieval operations."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the collection
      isOptional: false
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<VectorChunk[]>"
    description: A promise that resolves to an array of VectorChunk objects
data:
  name: getChunks
  category: vectorDb
  link: getChunks.md
---
# getChunks

```typescript
client.vectorDb.getChunks(id: string, params?: Record<string, unknown>): Promise<VectorChunk[]>
```

Retrieves chunks from a vector collection.

Fetches text chunks that were created when documents were processed.
Chunks are smaller segments of documents used for more granular
similarity search and retrieval operations.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the collection |
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<VectorChunk[]>`** — A promise that resolves to an array of VectorChunk objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.vectorDb.getChunks('id');
```
