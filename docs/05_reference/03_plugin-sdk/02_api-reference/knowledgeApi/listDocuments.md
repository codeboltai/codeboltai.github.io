---
title: listDocuments
---

# `listDocuments`

```typescript
plugin.knowledgeApi.listDocuments(id: string, params?: Record<string, unknown>): Promise<KnowledgeDocument[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `params` | `Record<string, unknown>` | No |  |

## Returns

`Promise<KnowledgeDocument[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.knowledgeApi.listDocuments('id');
console.log(result);
```
