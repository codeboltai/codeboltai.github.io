---
title: createIndex
---

# `createIndex`

```typescript
plugin.vectordbApi.createIndex(data: CreateVectorIndexRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateVectorIndexRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordbApi.createIndex(/* CreateVectorIndexRequest */);
console.log(result);
```
