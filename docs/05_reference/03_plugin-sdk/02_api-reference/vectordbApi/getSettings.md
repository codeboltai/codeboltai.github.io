---
title: getSettings
---

# `getSettings`

```typescript
plugin.vectordbApi.getSettings(id: string): Promise<VectorCollectionSettings>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<VectorCollectionSettings>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.vectordbApi.getSettings('id');
console.log(result);
```
