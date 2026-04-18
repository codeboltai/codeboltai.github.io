---
title: createInstance
---

# `createInstance`

```typescript
plugin.kvStoreApi.createInstance(data: CreateKvStoreInstanceRequest): Promise<KvStoreInstance>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateKvStoreInstanceRequest` | Yes |  |

## Returns

`Promise<KvStoreInstance>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStoreApi.createInstance(/* CreateKvStoreInstanceRequest */);
console.log(result);
```
