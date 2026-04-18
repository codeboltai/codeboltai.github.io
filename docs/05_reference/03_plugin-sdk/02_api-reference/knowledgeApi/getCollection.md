---
title: getCollection
---

# `getCollection`

```typescript
plugin.knowledgeApi.getCollection(id: string): Promise<KnowledgeCollection>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<KnowledgeCollection>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.knowledgeApi.getCollection('id');
console.log(result);
```
