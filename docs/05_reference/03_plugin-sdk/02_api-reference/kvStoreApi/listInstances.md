---
title: listInstances
---

# `listInstances`

```typescript
plugin.kvStoreApi.listInstances(params?: Record<string, unknown>): Promise<KvStoreInstance[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `Record<string, unknown>` | No |  |

## Returns

`Promise<KvStoreInstance[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStoreApi.listInstances();
console.log(result);
```
