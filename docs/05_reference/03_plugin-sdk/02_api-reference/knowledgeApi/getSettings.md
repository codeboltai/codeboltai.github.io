---
title: getSettings
---

# `getSettings`

```typescript
plugin.knowledgeApi.getSettings(id: string): Promise<KnowledgeCollectionSettings>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<KnowledgeCollectionSettings>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.knowledgeApi.getSettings('id');
console.log(result);
```
