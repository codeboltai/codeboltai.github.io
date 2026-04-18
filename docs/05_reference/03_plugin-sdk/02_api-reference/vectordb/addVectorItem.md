---
title: addVectorItem
---

# `addVectorItem`

```typescript
plugin.vectordb.addVectorItem(item: any): Promise<AddVectorItemResponse>
```

Adds a new vector item to the vector database.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item` | `any` | Yes | The item to add to the vector. |

## Returns

`Promise<AddVectorItemResponse>` — A promise that resolves when the item is successfully added.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordb.addVectorItem(/* any */);
console.log(result);
```
