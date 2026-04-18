---
title: deleteFolder
---

# `deleteFolder`

```typescript
plugin.fs.deleteFolder(foldername: string, folderpath: string): Promise<DeleteFolderResponse>
```

deleteFolder

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `foldername` | `string` | Yes | The name of the folder to delete. |
| `folderpath` | `string` | Yes | The path of the folder to delete. |

## Returns

`Promise<DeleteFolderResponse>` — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fs.deleteFolder('foldername', 'folderpath');
console.log(result);
```
