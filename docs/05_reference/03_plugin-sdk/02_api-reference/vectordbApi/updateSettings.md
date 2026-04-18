---
title: updateSettings
---

# `updateSettings`

```typescript
plugin.vectordbApi.updateSettings(id: string, data: UpdateVectorSettingsRequest): Promise<VectorCollectionSettings>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateVectorSettingsRequest` | Yes |  |

## Returns

`Promise<VectorCollectionSettings>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordbApi.updateSettings('id', /* UpdateVectorSettingsRequest */);
console.log(result);
```
