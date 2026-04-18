---
title: queryVectorItem
---

# `queryVectorItem`

```typescript
plugin.vectordb.queryVectorItem(key: string): Promise<QueryVectorItemResponse>
```

Queries a vector item from the vector database based on the provided key.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | The key of the vector to query the item from. |

## Returns

`Promise<QueryVectorItemResponse>` — A promise that resolves with the queried vector item.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordb.queryVectorItem('key');
console.log(result);
```
