---
name: rechunkDocument
cbbaseinfo:
  description: Call rechunkDocument on the Plugin SDK knowledgeApi module.
cbparameters:
  parameters:
    - name: documentId
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: RechunkDocumentRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: rechunkDocument
  category: knowledgeApi
  link: rechunkDocument.md
---
# rechunkDocument

```typescript
plugin.knowledgeApi.rechunkDocument(documentId: string, data?: RechunkDocumentRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `documentId` | `string` |  |
| `data` | `RechunkDocumentRequest` _(optional)_ |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.knowledgeApi.rechunkDocument('documentId');
```
