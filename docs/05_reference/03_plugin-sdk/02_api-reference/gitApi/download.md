---
title: download
---

# `download`

```typescript
plugin.gitApi.download(data: GitDownloadRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitDownloadRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gitApi.download(/* GitDownloadRequest */);
console.log(result);
```
