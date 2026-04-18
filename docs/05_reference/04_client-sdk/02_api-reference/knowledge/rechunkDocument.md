---
name: rechunkDocument
cbbaseinfo:
  description: "Re-chunks a document using updated chunking settings.

Discards existing chunks and re-processes the document with the
current or specified chunking strategy. Useful after changing
collection settings or chunking parameters."
cbparameters:
  parameters:
    - name: documentId
      typeName: string
      description: The unique identifier of the document to re-chunk
      isOptional: false
    - name: data
      typeName: RechunkDocumentRequest
      description: Optional parameters specifying the new chunking configuration
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when re-chunking is complete
data:
  name: rechunkDocument
  category: knowledge
  link: rechunkDocument.md
---
# rechunkDocument

```typescript
client.knowledge.rechunkDocument(documentId: string, data?: RechunkDocumentRequest): Promise<unknown>
```

Re-chunks a document using updated chunking settings.

Discards existing chunks and re-processes the document with the
current or specified chunking strategy. Useful after changing
collection settings or chunking parameters.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `documentId` | `string` | The unique identifier of the document to re-chunk |
| `data` | `RechunkDocumentRequest` _(optional)_ | Optional parameters specifying the new chunking configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when re-chunking is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledge.rechunkDocument('documentId');
```
