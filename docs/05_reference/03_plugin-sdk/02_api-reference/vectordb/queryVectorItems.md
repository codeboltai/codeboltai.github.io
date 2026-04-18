---
title: queryVectorItems
---

# `queryVectorItems`

```typescript
plugin.vectordb.queryVectorItems(items: [], dbPath: string): Promise<QueryVectorItemResponse>
```

Queries a vector item from the vector database based on the provided key.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `items` | `[]` | Yes |  |
| `dbPath` | `string` | Yes |  |

## Returns

`Promise<QueryVectorItemResponse>` — A promise that resolves with the queried vector item.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordb.queryVectorItems(/* [] */, 'dbPath');
console.log(result);
```
