---
title: listCollections
---

# `listCollections`

```typescript
plugin.vectordbApi.listCollections(params?: Record<string, unknown>): Promise<VectorCollection[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `Record<string, unknown>` | No |  |

## Returns

`Promise<VectorCollection[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordbApi.listCollections();
console.log(result);
```
