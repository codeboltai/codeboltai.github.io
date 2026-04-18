---
name: getDocument
cbbaseinfo:
  description: Call getDocument on the Plugin SDK knowledgeApi module.
cbparameters:
  parameters:
    - name: documentId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<KnowledgeDocument>"
    description: ""
data:
  name: getDocument
  category: knowledgeApi
  link: getDocument.md
---
# getDocument

```typescript
plugin.knowledgeApi.getDocument(documentId: string): Promise<KnowledgeDocument>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `documentId` | `string` |  |

## Returns

**`Promise<KnowledgeDocument>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.knowledgeApi.getDocument('documentId');
```
