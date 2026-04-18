---
title: query
---

# `query`

```typescript
plugin.kvStore.query(query: KVQueryDSL): Promise<KVQueryResponse>
```

Query the KV store using DSL

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | `KVQueryDSL` | Yes | Query DSL object |

## Returns

`Promise<KVQueryResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStore.query(/* KVQueryDSL */);
console.log(result);
```
