---
title: listInstalledProviders
---

# `listInstalledProviders`

```typescript
plugin.environmentsApi.listInstalledProviders(params?: Record<string, unknown>): Promise<InstalledProvider[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `Record<string, unknown>` | No |  |

## Returns

`Promise<InstalledProvider[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.listInstalledProviders();
console.log(result);
```
