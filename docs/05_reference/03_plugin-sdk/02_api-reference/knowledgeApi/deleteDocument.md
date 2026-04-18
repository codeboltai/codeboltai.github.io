---
title: deleteDocument
---

# `deleteDocument`

```typescript
plugin.knowledgeApi.deleteDocument(documentId: string): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `documentId` | `string` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.knowledgeApi.deleteDocument('documentId');
console.log(result);
```
