---
title: deleteFile
---

# `deleteFile`

```typescript
plugin.fs.deleteFile(filename: string, filePath: string): Promise<DeleteFileResponse>
```

deleteFile

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `filename` | `string` | Yes | The name of the file to delete. |
| `filePath` | `string` | Yes | The path of the file to delete. |

## Returns

`Promise<DeleteFileResponse>` — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fs.deleteFile('filename', 'filePath');
console.log(result);
```
