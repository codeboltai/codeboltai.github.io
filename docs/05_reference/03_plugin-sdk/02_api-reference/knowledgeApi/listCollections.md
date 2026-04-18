---
title: listCollections
---

# `listCollections`

```typescript
plugin.knowledgeApi.listCollections(params?: Record<string, unknown>): Promise<KnowledgeCollection[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `Record<string, unknown>` | No |  |

## Returns

`Promise<KnowledgeCollection[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.knowledgeApi.listCollections();
console.log(result);
```
