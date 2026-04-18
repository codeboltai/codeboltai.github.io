---
title: rechunkDocument
---

# `rechunkDocument`

```typescript
plugin.knowledgeApi.rechunkDocument(documentId: string, data?: RechunkDocumentRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `documentId` | `string` | Yes |  |
| `data` | `RechunkDocumentRequest` | No |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.knowledgeApi.rechunkDocument('documentId');
console.log(result);
```
