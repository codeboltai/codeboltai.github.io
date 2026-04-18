---
title: deleteCollection
---

# `deleteCollection`

```typescript
plugin.knowledgeApi.deleteCollection(id: string): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.knowledgeApi.deleteCollection('id');
console.log(result);
```
