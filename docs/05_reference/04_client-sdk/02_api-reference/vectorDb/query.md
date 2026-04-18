---
name: query
cbbaseinfo:
  description: "Queries a vector collection for similar documents.

Performs semantic similarity search using a query vector or text.
Returns documents or chunks ranked by similarity score, enabling
retrieval of contextually relevant content for RAG applications."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the collection to query
      isOptional: false
    - name: data
      typeName: VectorQueryRequest
      description: The query configuration including vector or text and search parameters
      isOptional: false
  returns:
    signatureTypeName: "Promise<VectorSearchResult[]>"
    description: A promise that resolves to an array of VectorSearchResult objects
data:
  name: query
  category: vectorDb
  link: query.md
---
# query

```typescript
client.vectorDb.query(id: string, data: VectorQueryRequest): Promise<VectorSearchResult[]>
```

Queries a vector collection for similar documents.

Performs semantic similarity search using a query vector or text.
Returns documents or chunks ranked by similarity score, enabling
retrieval of contextually relevant content for RAG applications.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the collection to query |
| `data` | `VectorQueryRequest` | The query configuration including vector or text and search parameters |

## Returns

**`Promise<VectorSearchResult[]>`** — A promise that resolves to an array of VectorSearchResult objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.vectorDb.query('id', /* VectorQueryRequest */);
```
