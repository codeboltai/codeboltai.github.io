---
title: deleteDocuments
---

# `deleteDocuments`

```typescript
plugin.vectordbApi.deleteDocuments(id: string, data?: DeleteVectorDocumentsRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `DeleteVectorDocumentsRequest` | No |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordbApi.deleteDocuments('id');
console.log(result);
```
