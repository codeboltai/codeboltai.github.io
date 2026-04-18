---
name: listDocuments
cbbaseinfo:
  description: Call listDocuments on the Plugin SDK knowledgeApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: params
      typeName: Record<string, unknown>
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<KnowledgeDocument[]>"
    description: ""
data:
  name: listDocuments
  category: knowledgeApi
  link: listDocuments.md
---
# listDocuments

```typescript
plugin.knowledgeApi.listDocuments(id: string, params?: Record<string, unknown>): Promise<KnowledgeDocument[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `params` | `Record<string, unknown>` _(optional)_ |  |

## Returns

**`Promise<KnowledgeDocument[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.knowledgeApi.listDocuments('id');
```
