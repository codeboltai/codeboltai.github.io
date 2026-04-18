---
title: getRemoteUrl
---

# `getRemoteUrl`

```typescript
plugin.gitApi.getRemoteUrl(): Promise<GitRemoteUrlResponse>
```



## Parameters

_No parameters._

## Returns

`Promise<GitRemoteUrlResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gitApi.getRemoteUrl();
console.log(result);
```
