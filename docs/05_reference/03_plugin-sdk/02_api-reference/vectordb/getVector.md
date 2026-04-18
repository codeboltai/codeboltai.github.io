---
title: getVector
---

# `getVector`

```typescript
plugin.vectordb.getVector(key: string): Promise<GetVectorResponse>
```

Retrieves a vector from the vector database based on the provided key.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | The key of the vector to retrieve. |

## Returns

`Promise<GetVectorResponse>` — A promise that resolves with the retrieved vector.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordb.getVector('key');
console.log(result);
```
