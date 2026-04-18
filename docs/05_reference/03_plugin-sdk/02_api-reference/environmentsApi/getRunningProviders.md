---
title: getRunningProviders
---

# `getRunningProviders`

```typescript
plugin.environmentsApi.getRunningProviders(): Promise<InstalledProvider[]>
```



## Parameters

_No parameters._

## Returns

`Promise<InstalledProvider[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.getRunningProviders();
console.log(result);
```
