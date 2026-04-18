---
name: addChunks
cbbaseinfo:
  description: "Adds chunks to a vector collection.

Manually adds pre-chunked text segments to the collection with their
embeddings. This is useful when you have custom chunking logic or
want to add chunks without full document processing."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the target collection
      isOptional: false
    - name: data
      typeName: AddVectorChunksRequest
      description: The chunks to add with their embeddings and metadata
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when chunks have been added
data:
  name: addChunks
  category: vectorDb
  link: addChunks.md
---
# addChunks

```typescript
client.vectorDb.addChunks(id: string, data: AddVectorChunksRequest): Promise<unknown>
```

Adds chunks to a vector collection.

Manually adds pre-chunked text segments to the collection with their
embeddings. This is useful when you have custom chunking logic or
want to add chunks without full document processing.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the target collection |
| `data` | `AddVectorChunksRequest` | The chunks to add with their embeddings and metadata |

## Returns

**`Promise<unknown>`** — A promise that resolves when chunks have been added

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.vectorDb.addChunks('id', /* AddVectorChunksRequest */);
```
