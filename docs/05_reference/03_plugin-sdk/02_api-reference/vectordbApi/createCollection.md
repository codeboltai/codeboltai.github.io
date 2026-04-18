---
title: createCollection
---

# `createCollection`

```typescript
plugin.vectordbApi.createCollection(data: CreateVectorCollectionRequest): Promise<VectorCollection>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateVectorCollectionRequest` | Yes |  |

## Returns

`Promise<VectorCollection>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordbApi.createCollection(/* CreateVectorCollectionRequest */);
console.log(result);
```
