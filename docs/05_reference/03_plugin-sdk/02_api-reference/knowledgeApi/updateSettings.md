---
title: updateSettings
---

# `updateSettings`

```typescript
plugin.knowledgeApi.updateSettings(id: string, data: UpdateKnowledgeSettingsRequest): Promise<KnowledgeCollectionSettings>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateKnowledgeSettingsRequest` | Yes |  |

## Returns

`Promise<KnowledgeCollectionSettings>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.knowledgeApi.updateSettings('id', /* UpdateKnowledgeSettingsRequest */);
console.log(result);
```
