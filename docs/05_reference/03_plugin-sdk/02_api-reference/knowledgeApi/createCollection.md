---
title: createCollection
---

# `createCollection`

```typescript
plugin.knowledgeApi.createCollection(data: CreateKnowledgeCollectionRequest): Promise<KnowledgeCollection>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateKnowledgeCollectionRequest` | Yes |  |

## Returns

`Promise<KnowledgeCollection>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.knowledgeApi.createCollection(/* CreateKnowledgeCollectionRequest */);
console.log(result);
```
