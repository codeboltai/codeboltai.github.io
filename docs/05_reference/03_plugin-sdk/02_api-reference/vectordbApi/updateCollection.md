---
title: updateCollection
---

# `updateCollection`

```typescript
plugin.vectordbApi.updateCollection(id: string, data: UpdateVectorCollectionRequest): Promise<VectorCollection>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateVectorCollectionRequest` | Yes |  |

## Returns

`Promise<VectorCollection>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordbApi.updateCollection('id', /* UpdateVectorCollectionRequest */);
console.log(result);
```
