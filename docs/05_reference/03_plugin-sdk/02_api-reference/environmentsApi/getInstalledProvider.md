---
title: getInstalledProvider
---

# `getInstalledProvider`

```typescript
plugin.environmentsApi.getInstalledProvider(id: string): Promise<InstalledProvider>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<InstalledProvider>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.getInstalledProvider('id');
console.log(result);
```
