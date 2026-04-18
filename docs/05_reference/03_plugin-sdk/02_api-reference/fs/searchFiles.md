---
title: searchFiles
---

# `searchFiles`

```typescript
plugin.fs.searchFiles(path: string, regex: string, filePattern: string): Promise<SearchFilesResponse>
```

searchFiles

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | `string` | Yes | The path to search within. |
| `regex` | `string` | Yes | The regex pattern to search for. |
| `filePattern` | `string` | Yes | The file pattern to match files. |

## Returns

`Promise<SearchFilesResponse>` — A promise that resolves with the search results.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fs.searchFiles('path', 'regex', 'filePattern');
console.log(result);
```
