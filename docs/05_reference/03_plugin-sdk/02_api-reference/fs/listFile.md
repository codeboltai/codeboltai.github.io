---
title: listFile
---

# `listFile`

```typescript
plugin.fs.listFile(folderPath: string, isRecursive: boolean): Promise<FileListResponse>
```

listFile

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `folderPath` | `string` | Yes |  |
| `isRecursive` | `boolean` | Yes |  _(default: `false`)_ |

## Returns

`Promise<FileListResponse>` — A promise that resolves with the list of files.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fs.listFile('folderPath', true);
console.log(result);
```
