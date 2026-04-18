---
title: addDocumentFromUrl
---

# `addDocumentFromUrl`

```typescript
plugin.knowledgeApi.addDocumentFromUrl(id: string, data: AddKnowledgeDocumentFromUrlRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `AddKnowledgeDocumentFromUrlRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.knowledgeApi.addDocumentFromUrl('id', /* AddKnowledgeDocumentFromUrlRequest */);
console.log(result);
```
