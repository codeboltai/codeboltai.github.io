---
title: createFolder
---

# `createFolder`

```typescript
plugin.fs.createFolder(folderName: string, folderPath: string): Promise<CreateFolderResponse>
```

createFolder

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `folderName` | `string` | Yes | The name of the folder to create. |
| `folderPath` | `string` | Yes | The path where the folder should be created. |

## Returns

`Promise<CreateFolderResponse>` — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fs.createFolder('folderName', 'folderPath');
console.log(result);
```
