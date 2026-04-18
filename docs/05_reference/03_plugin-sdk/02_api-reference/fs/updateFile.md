---
title: updateFile
---

# `updateFile`

```typescript
plugin.fs.updateFile(filename: string, filePath: string, newContent: string): Promise<UpdateFileResponse>
```

updateFile

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `filename` | `string` | Yes | The name of the file to update. |
| `filePath` | `string` | Yes | The path of the file to update. |
| `newContent` | `string` | Yes | The new content to write into the file. |

## Returns

`Promise<UpdateFileResponse>` — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fs.updateFile('filename', 'filePath', 'newContent');
console.log(result);
```
