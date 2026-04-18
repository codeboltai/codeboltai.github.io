---
name: deleteDocument
cbbaseinfo:
  description: Call deleteDocument on the Plugin SDK knowledgeApi module.
cbparameters:
  parameters:
    - name: documentId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: deleteDocument
  category: knowledgeApi
  link: deleteDocument.md
---
# deleteDocument

```typescript
plugin.knowledgeApi.deleteDocument(documentId: string): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `documentId` | `string` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.knowledgeApi.deleteDocument('documentId');
```
