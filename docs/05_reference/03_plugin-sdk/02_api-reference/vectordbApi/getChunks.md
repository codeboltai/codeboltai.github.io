---
title: getChunks
---

# `getChunks`

```typescript
plugin.vectordbApi.getChunks(id: string, params?: Record<string, unknown>): Promise<VectorChunk[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `params` | `Record<string, unknown>` | No |  |

## Returns

`Promise<VectorChunk[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordbApi.getChunks('id');
console.log(result);
```
