---
title: readFile
---

# `readFile`

```typescript
plugin.fs.readFile(filePath: string): Promise<ReadFileResponse>
```

readFile

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `filePath` | `string` | Yes | The path of the file to read. |

## Returns

`Promise<ReadFileResponse>` — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fs.readFile('filePath');
console.log(result);
```
