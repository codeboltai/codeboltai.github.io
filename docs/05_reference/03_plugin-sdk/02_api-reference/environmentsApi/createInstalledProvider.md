---
title: createInstalledProvider
---

# `createInstalledProvider`

```typescript
plugin.environmentsApi.createInstalledProvider(data: CreateInstalledProviderRequest): Promise<InstalledProvider>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateInstalledProviderRequest` | Yes |  |

## Returns

`Promise<InstalledProvider>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.createInstalledProvider(/* CreateInstalledProviderRequest */);
console.log(result);
```
