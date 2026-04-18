---
title: deleteInstance
---

# `deleteInstance`

```typescript
plugin.kvStoreApi.deleteInstance(id: string): Promise<unknown>
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

const result = await plugin.kvStoreApi.deleteInstance('id');
console.log(result);
```
