---
title: deleteCollection
---

# `deleteCollection`

```typescript
plugin.vectordbApi.deleteCollection(id: string): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordbApi.deleteCollection('id');
console.log(result);
```
