---
title: updateCollection
---

# `updateCollection`

```typescript
plugin.knowledgeApi.updateCollection(id: string, data: UpdateKnowledgeCollectionRequest): Promise<KnowledgeCollection>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateKnowledgeCollectionRequest` | Yes |  |

## Returns

`Promise<KnowledgeCollection>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.knowledgeApi.updateCollection('id', /* UpdateKnowledgeCollectionRequest */);
console.log(result);
```
