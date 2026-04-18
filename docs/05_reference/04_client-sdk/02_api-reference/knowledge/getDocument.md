---
name: getDocument
cbbaseinfo:
  description: "Retrieves a specific document by its ID.

Returns the full details of a document including its metadata,
processing status, and chunk count."
cbparameters:
  parameters:
    - name: documentId
      typeName: string
      description: The unique identifier of the document
      isOptional: false
  returns:
    signatureTypeName: "Promise<KnowledgeDocument>"
    description: A promise that resolves to the
data:
  name: getDocument
  category: knowledge
  link: getDocument.md
---
# getDocument

```typescript
client.knowledge.getDocument(documentId: string): Promise<KnowledgeDocument>
```

Retrieves a specific document by its ID.

Returns the full details of a document including its metadata,
processing status, and chunk count.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `documentId` | `string` | The unique identifier of the document |

## Returns

**`Promise<KnowledgeDocument>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledge.getDocument('documentId');
```
