---
name: updateCollection
cbbaseinfo:
  description: Call updateCollection on the Plugin SDK knowledgeApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateKnowledgeCollectionRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<KnowledgeCollection>"
    description: ""
data:
  name: updateCollection
  category: knowledgeApi
  link: updateCollection.md
---
# updateCollection

```typescript
plugin.knowledgeApi.updateCollection(id: string, data: UpdateKnowledgeCollectionRequest): Promise<KnowledgeCollection>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `UpdateKnowledgeCollectionRequest` |  |

## Returns

**`Promise<KnowledgeCollection>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.knowledgeApi.updateCollection('id', /* UpdateKnowledgeCollectionRequest */);
```
