---
title: addDocuments
---

# `addDocuments`

```typescript
plugin.knowledgeApi.addDocuments(id: string, data: AddKnowledgeDocumentsRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `AddKnowledgeDocumentsRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.knowledgeApi.addDocuments('id', /* AddKnowledgeDocumentsRequest */);
console.log(result);
```
