---
title: getDocument
---

# `getDocument`

```typescript
plugin.knowledgeApi.getDocument(documentId: string): Promise<KnowledgeDocument>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `documentId` | `string` | Yes |  |

## Returns

`Promise<KnowledgeDocument>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.knowledgeApi.getDocument('documentId');
console.log(result);
```
