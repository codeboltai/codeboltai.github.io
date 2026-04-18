---
name: addDocuments
cbbaseinfo:
  description: "Adds documents to a vector collection.

Ingests new documents into the collection, automatically generating
embeddings and storing them for similarity search. Documents can include
text content and metadata for filtering."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the target collection
      isOptional: false
    - name: data
      typeName: AddVectorDocumentsRequest
      description: The documents to add along with their metadata
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when documents have been added
data:
  name: addDocuments
  category: vectorDb
  link: addDocuments.md
---
# addDocuments

```typescript
client.vectorDb.addDocuments(id: string, data: AddVectorDocumentsRequest): Promise<unknown>
```

Adds documents to a vector collection.

Ingests new documents into the collection, automatically generating
embeddings and storing them for similarity search. Documents can include
text content and metadata for filtering.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the target collection |
| `data` | `AddVectorDocumentsRequest` | The documents to add along with their metadata |

## Returns

**`Promise<unknown>`** — A promise that resolves when documents have been added

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.vectorDb.addDocuments('id', /* AddVectorDocumentsRequest */);
```
