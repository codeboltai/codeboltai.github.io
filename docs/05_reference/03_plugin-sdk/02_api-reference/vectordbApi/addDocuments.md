---
title: addDocuments
---

# `addDocuments`

```typescript
plugin.vectordbApi.addDocuments(id: string, data: AddVectorDocumentsRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `AddVectorDocumentsRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordbApi.addDocuments('id', /* AddVectorDocumentsRequest */);
console.log(result);
```
