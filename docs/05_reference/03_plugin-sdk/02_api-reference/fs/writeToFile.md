---
title: writeToFile
---

# `writeToFile`

```typescript
plugin.fs.writeToFile(relPath: string, newContent: string): Promise<any>
```

writeToFile

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `relPath` | `string` | Yes | The relative path of the file to write to. |
| `newContent` | `string` | Yes | The new content to write into the file. |

## Returns

`Promise<any>` — A promise that resolves with the write operation result.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fs.writeToFile('relPath', 'newContent');
console.log(result);
```
