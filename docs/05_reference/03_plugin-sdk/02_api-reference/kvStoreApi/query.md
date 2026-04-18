---
title: query
---

# `query`

```typescript
plugin.kvStoreApi.query(data: KvQueryRequest): Promise<KvValue[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `KvQueryRequest` | Yes |  |

## Returns

`Promise<KvValue[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStoreApi.query(/* KvQueryRequest */);
console.log(result);
```
