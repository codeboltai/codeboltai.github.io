---
title: getRunningProviders
---

# `getRunningProviders`

```typescript
plugin.environment.getRunningProviders(): Promise<any>
```



## Parameters

_No parameters._

## Returns

`Promise<any>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environment.getRunningProviders();
console.log(result);
```
