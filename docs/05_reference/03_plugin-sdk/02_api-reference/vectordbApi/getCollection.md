---
title: getCollection
---

# `getCollection`

```typescript
plugin.vectordbApi.getCollection(id: string): Promise<VectorCollection>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<VectorCollection>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordbApi.getCollection('id');
console.log(result);
```
