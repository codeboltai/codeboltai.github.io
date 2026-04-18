---
title: getDocuments
---

# `getDocuments`

```typescript
plugin.vectordbApi.getDocuments(id: string, params?: Record<string, unknown>): Promise<VectorDocument[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `params` | `Record<string, unknown>` | No |  |

## Returns

`Promise<VectorDocument[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordbApi.getDocuments('id');
console.log(result);
```
