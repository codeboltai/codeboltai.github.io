---
title: getInstance
---

# `getInstance`

```typescript
plugin.kvStoreApi.getInstance(id: string): Promise<KvStoreInstance>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<KvStoreInstance>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStoreApi.getInstance('id');
console.log(result);
```
