---
name: createCollection
cbbaseinfo:
  description: Call createCollection on the Plugin SDK knowledgeApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateKnowledgeCollectionRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<KnowledgeCollection>"
    description: ""
data:
  name: createCollection
  category: knowledgeApi
  link: createCollection.md
---
# createCollection

```typescript
plugin.knowledgeApi.createCollection(data: CreateKnowledgeCollectionRequest): Promise<KnowledgeCollection>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateKnowledgeCollectionRequest` |  |

## Returns

**`Promise<KnowledgeCollection>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.knowledgeApi.createCollection(/* CreateKnowledgeCollectionRequest */);
```
