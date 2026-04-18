---
title: updateChunk
---

# `updateChunk`

```typescript
plugin.knowledgeApi.updateChunk(chunkId: string, data: UpdateKnowledgeChunkRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `chunkId` | `string` | Yes |  |
| `data` | `UpdateKnowledgeChunkRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.knowledgeApi.updateChunk('chunkId', /* UpdateKnowledgeChunkRequest */);
console.log(result);
```
