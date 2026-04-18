---
title: releaseFiles
---

# `releaseFiles`

```typescript
plugin.mail.releaseFiles(params: IReleaseFilesParams): Promise<IReleaseFilesResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IReleaseFilesParams` | Yes |  |

## Returns

`Promise<IReleaseFilesResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.releaseFiles(/* IReleaseFilesParams */);
console.log(result);
```
