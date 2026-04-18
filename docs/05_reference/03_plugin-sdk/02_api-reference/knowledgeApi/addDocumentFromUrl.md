---
name: addDocumentFromUrl
cbbaseinfo:
  description: Call addDocumentFromUrl on the Plugin SDK knowledgeApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: AddKnowledgeDocumentFromUrlRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: addDocumentFromUrl
  category: knowledgeApi
  link: addDocumentFromUrl.md
---
# addDocumentFromUrl

```typescript
plugin.knowledgeApi.addDocumentFromUrl(id: string, data: AddKnowledgeDocumentFromUrlRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `AddKnowledgeDocumentFromUrlRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.knowledgeApi.addDocumentFromUrl('id', /* AddKnowledgeDocumentFromUrlRequest */);
```
