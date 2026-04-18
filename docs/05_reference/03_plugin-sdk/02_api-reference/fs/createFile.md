---
title: createFile
---

# `createFile`

```typescript
plugin.fs.createFile(fileName: string, source: string, filePath: string): Promise<CreateFileResponse>
```

createFile

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `fileName` | `string` | Yes | The name of the file to create. |
| `source` | `string` | Yes | The source content to write into the file. |
| `filePath` | `string` | Yes | The path where the file should be created. |

## Returns

`Promise<CreateFileResponse>` — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fs.createFile('fileName', 'source', 'filePath');
console.log(result);
```
