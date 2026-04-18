---
title: updateInstalledProvider
---

# `updateInstalledProvider`

```typescript
plugin.environmentsApi.updateInstalledProvider(id: string, data: UpdateInstalledProviderRequest): Promise<InstalledProvider>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateInstalledProviderRequest` | Yes |  |

## Returns

`Promise<InstalledProvider>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.updateInstalledProvider('id', /* UpdateInstalledProviderRequest */);
console.log(result);
```
