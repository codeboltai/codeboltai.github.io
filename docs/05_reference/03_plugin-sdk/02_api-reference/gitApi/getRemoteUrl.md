---
name: getRemoteUrl
cbbaseinfo:
  description: Call getRemoteUrl on the Plugin SDK gitApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<GitRemoteUrlResponse>"
    description: ""
data:
  name: getRemoteUrl
  category: gitApi
  link: getRemoteUrl.md
---
# getRemoteUrl

```typescript
plugin.gitApi.getRemoteUrl(): Promise<GitRemoteUrlResponse>
```



## Parameters

_None_

## Returns

**`Promise<GitRemoteUrlResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gitApi.getRemoteUrl();
```
