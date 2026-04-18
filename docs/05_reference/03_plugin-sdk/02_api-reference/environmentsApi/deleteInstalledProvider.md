---
title: deleteInstalledProvider
---

# `deleteInstalledProvider`

```typescript
plugin.environmentsApi.deleteInstalledProvider(id: string): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.deleteInstalledProvider('id');
console.log(result);
```
