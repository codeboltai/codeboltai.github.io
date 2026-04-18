---
title: addChunks
---

# `addChunks`

```typescript
plugin.vectordbApi.addChunks(id: string, data: AddVectorChunksRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `AddVectorChunksRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordbApi.addChunks('id', /* AddVectorChunksRequest */);
console.log(result);
```
