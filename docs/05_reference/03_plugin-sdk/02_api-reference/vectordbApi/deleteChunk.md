---
title: deleteChunk
---

# `deleteChunk`

```typescript
plugin.vectordbApi.deleteChunk(id: string, chunkId: string): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `chunkId` | `string` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordbApi.deleteChunk('id', 'chunkId');
console.log(result);
```
