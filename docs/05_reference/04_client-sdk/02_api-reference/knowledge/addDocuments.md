---
name: addDocuments
cbbaseinfo:
  description: "Adds one or more documents to a knowledge collection.

Uploads documents that will be automatically processed, chunked,
and indexed for retrieval. Supports multiple documents in a single request."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the target collection
      isOptional: false
    - name: data
      typeName: AddKnowledgeDocumentsRequest
      description: The documents to add, including their content and metadata
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the documents have been added and processing has begun
data:
  name: addDocuments
  category: knowledge
  link: addDocuments.md
---
# addDocuments

```typescript
client.knowledge.addDocuments(id: string, data: AddKnowledgeDocumentsRequest): Promise<unknown>
```

Adds one or more documents to a knowledge collection.

Uploads documents that will be automatically processed, chunked,
and indexed for retrieval. Supports multiple documents in a single request.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the target collection |
| `data` | `AddKnowledgeDocumentsRequest` | The documents to add, including their content and metadata |

## Returns

**`Promise<unknown>`** — A promise that resolves when the documents have been added and processing has begun

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledge.addDocuments('id', /* AddKnowledgeDocumentsRequest */);
```
