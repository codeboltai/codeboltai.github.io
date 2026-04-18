---
title: updateInstance
---

# `updateInstance`

```typescript
plugin.kvStoreApi.updateInstance(id: string, data: UpdateKvStoreInstanceRequest): Promise<KvStoreInstance>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateKvStoreInstanceRequest` | Yes |  |

## Returns

`Promise<KvStoreInstance>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStoreApi.updateInstance('id', /* UpdateKvStoreInstanceRequest */);
console.log(result);
```
