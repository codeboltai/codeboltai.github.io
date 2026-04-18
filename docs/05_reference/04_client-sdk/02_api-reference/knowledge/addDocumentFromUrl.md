---
name: addDocumentFromUrl
cbbaseinfo:
  description: "Adds a document to a collection by fetching it from a URL.

Downloads the content at the specified URL and adds it as a document
to the collection. The content is automatically parsed and chunked."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the target collection
      isOptional: false
    - name: data
      typeName: AddKnowledgeDocumentFromUrlRequest
      description: Request specifying the URL and optional metadata
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the document has been fetched and added
data:
  name: addDocumentFromUrl
  category: knowledge
  link: addDocumentFromUrl.md
---
# addDocumentFromUrl

```typescript
client.knowledge.addDocumentFromUrl(id: string, data: AddKnowledgeDocumentFromUrlRequest): Promise<unknown>
```

Adds a document to a collection by fetching it from a URL.

Downloads the content at the specified URL and adds it as a document
to the collection. The content is automatically parsed and chunked.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the target collection |
| `data` | `AddKnowledgeDocumentFromUrlRequest` | Request specifying the URL and optional metadata |

## Returns

**`Promise<unknown>`** — A promise that resolves when the document has been fetched and added

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledge.addDocumentFromUrl('id', /* AddKnowledgeDocumentFromUrlRequest */);
```
