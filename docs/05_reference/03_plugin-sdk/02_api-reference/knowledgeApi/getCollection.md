---
name: getCollection
cbbaseinfo:
  description: Call getCollection on the Plugin SDK knowledgeApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<KnowledgeCollection>"
    description: ""
data:
  name: getCollection
  category: knowledgeApi
  link: getCollection.md
---
# getCollection

```typescript
plugin.knowledgeApi.getCollection(id: string): Promise<KnowledgeCollection>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<KnowledgeCollection>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.knowledgeApi.getCollection('id');
```
