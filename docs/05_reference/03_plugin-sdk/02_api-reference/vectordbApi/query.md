---
title: query
---

# `query`

```typescript
plugin.vectordbApi.query(id: string, data: VectorQueryRequest): Promise<VectorSearchResult[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `VectorQueryRequest` | Yes |  |

## Returns

`Promise<VectorSearchResult[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordbApi.query('id', /* VectorQueryRequest */);
console.log(result);
```
