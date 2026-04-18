---
title: installProvider
---

# `installProvider`

```typescript
plugin.environmentsApi.installProvider(data: InstallProviderRequest): Promise<InstalledProvider>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `InstallProviderRequest` | Yes |  |

## Returns

`Promise<InstalledProvider>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.installProvider(/* InstallProviderRequest */);
console.log(result);
```
