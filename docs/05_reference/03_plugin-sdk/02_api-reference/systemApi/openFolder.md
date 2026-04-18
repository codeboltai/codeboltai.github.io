---
title: openFolder
---

# `openFolder`

```typescript
plugin.systemApi.openFolder(data: OpenFolderRequest): Promise<OpenFolderResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `OpenFolderRequest` | Yes |  |

## Returns

`Promise<OpenFolderResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.systemApi.openFolder(/* OpenFolderRequest */);
console.log(result);
```
