---
title: getLocalProviders
---

# `getLocalProviders`

```typescript
plugin.environmentsApi.getLocalProviders(): Promise<ProviderData[]>
```



## Parameters

_No parameters._

## Returns

`Promise<ProviderData[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.getLocalProviders();
console.log(result);
```
