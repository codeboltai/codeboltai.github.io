---
name: addDocuments
cbbaseinfo:
  description: Call addDocuments on the Plugin SDK knowledgeApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: AddKnowledgeDocumentsRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: addDocuments
  category: knowledgeApi
  link: addDocuments.md
---
# addDocuments

```typescript
plugin.knowledgeApi.addDocuments(id: string, data: AddKnowledgeDocumentsRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `AddKnowledgeDocumentsRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.knowledgeApi.addDocuments('id', /* AddKnowledgeDocumentsRequest */);
```
