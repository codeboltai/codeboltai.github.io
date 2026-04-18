---
name: deleteDocument
cbbaseinfo:
  description: "Deletes a document and all its associated chunks.

Permanently removes the document from its collection. The collection
itself is not affected."
cbparameters:
  parameters:
    - name: documentId
      typeName: string
      description: The unique identifier of the document to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when deletion is complete
data:
  name: deleteDocument
  category: knowledge
  link: deleteDocument.md
---
# deleteDocument

```typescript
client.knowledge.deleteDocument(documentId: string): Promise<unknown>
```

Deletes a document and all its associated chunks.

Permanently removes the document from its collection. The collection
itself is not affected.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `documentId` | `string` | The unique identifier of the document to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledge.deleteDocument('documentId');
```
