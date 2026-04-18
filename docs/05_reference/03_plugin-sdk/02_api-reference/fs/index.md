---
title: Fs API
---

# Fs API

The `fs` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`createFile`](./createFile) | createFile |
| [`createFolder`](./createFolder) | createFolder |
| [`deleteFile`](./deleteFile) | deleteFile |
| [`deleteFolder`](./deleteFolder) | deleteFolder |
| [`editFileWithDiff`](./editFileWithDiff) | editFileWithDiff |
| [`fileSearch`](./fileSearch) | fileSearch |
| [`grepSearch`](./grepSearch) | grepSearch |
| [`listCodeDefinitionNames`](./listCodeDefinitionNames) | listCodeDefinitionNames |
| [`listDirectory`](./listDirectory) | listDirectory |
| [`listFile`](./listFile) | listFile |
| [`readFile`](./readFile) | readFile |
| [`readManyFiles`](./readManyFiles) | readManyFiles |
| [`searchFiles`](./searchFiles) | searchFiles |
| [`updateFile`](./updateFile) | updateFile |
| [`writeToFile`](./writeToFile) | writeToFile |

## Methods

---

### `createFile`

```typescript
plugin.fs.createFile(fileName: string, source: string, filePath: string): Promise<CreateFileResponse>
```

createFile

| Parameter | Type | Required | Description |
|---|---|---|---|
| `fileName` | `string` | Yes | The name of the file to create. |
| `source` | `string` | Yes | The source content to write into the file. |
| `filePath` | `string` | Yes | The path where the file should be created. |

**Returns:** `Promise<CreateFileResponse>` — A promise that resolves with the server response.

[Full reference →](./createFile)

---

### `createFolder`

```typescript
plugin.fs.createFolder(folderName: string, folderPath: string): Promise<CreateFolderResponse>
```

createFolder

| Parameter | Type | Required | Description |
|---|---|---|---|
| `folderName` | `string` | Yes | The name of the folder to create. |
| `folderPath` | `string` | Yes | The path where the folder should be created. |

**Returns:** `Promise<CreateFolderResponse>` — A promise that resolves with the server response.

[Full reference →](./createFolder)

---

### `deleteFile`

```typescript
plugin.fs.deleteFile(filename: string, filePath: string): Promise<DeleteFileResponse>
```

deleteFile

| Parameter | Type | Required | Description |
|---|---|---|---|
| `filename` | `string` | Yes | The name of the file to delete. |
| `filePath` | `string` | Yes | The path of the file to delete. |

**Returns:** `Promise<DeleteFileResponse>` — A promise that resolves with the server response.

[Full reference →](./deleteFile)

---

### `deleteFolder`

```typescript
plugin.fs.deleteFolder(foldername: string, folderpath: string): Promise<DeleteFolderResponse>
```

deleteFolder

| Parameter | Type | Required | Description |
|---|---|---|---|
| `foldername` | `string` | Yes | The name of the folder to delete. |
| `folderpath` | `string` | Yes | The path of the folder to delete. |

**Returns:** `Promise<DeleteFolderResponse>` — A promise that resolves with the server response.

[Full reference →](./deleteFolder)

---

### `editFileWithDiff`

```typescript
plugin.fs.editFileWithDiff(targetFile: string, codeEdit: string, diffIdentifier: string, prompt: string, applyModel?: string): Promise<EditFileAndApplyDiffResponse>
```

editFileWithDiff

| Parameter | Type | Required | Description |
|---|---|---|---|
| `targetFile` | `string` | Yes | The target file to edit. |
| `codeEdit` | `string` | Yes | The code edit to apply. |
| `diffIdentifier` | `string` | Yes | The diff identifier. |
| `prompt` | `string` | Yes | The prompt for the edit. |
| `applyModel` | `string` | No | The model to apply the edit with. |

**Returns:** `Promise<EditFileAndApplyDiffResponse>` — A promise that resolves with the edit result.

[Full reference →](./editFileWithDiff)

---

### `fileSearch`

```typescript
plugin.fs.fileSearch(query: string): Promise<FileSearchResponse>
```

fileSearch

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | `string` | Yes | The query to search for. |

**Returns:** `Promise<FileSearchResponse>` — A promise that resolves with the search results.

[Full reference →](./fileSearch)

---

### `grepSearch`

```typescript
plugin.fs.grepSearch(path: string, query: string, includePattern?: string, excludePattern?: string, caseSensitive: boolean): Promise<GrepSearchResponse>
```

grepSearch

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | `string` | Yes | The path to search within. |
| `query` | `string` | Yes | The query to search for. |
| `includePattern` | `string` | No | Pattern of files to include. |
| `excludePattern` | `string` | No | Pattern of files to exclude. |
| `caseSensitive` | `boolean` | Yes | Whether the search is case sensitive. _(default: `true`)_ |

**Returns:** `Promise<GrepSearchResponse>` — A promise that resolves with the search results.

[Full reference →](./grepSearch)

---

### `listCodeDefinitionNames`

```typescript
plugin.fs.listCodeDefinitionNames(path: string): Promise<ListCodeDefinitionsResponse>
```

listCodeDefinitionNames

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | `string` | Yes | The path to search for code definitions. |

**Returns:** `Promise<ListCodeDefinitionsResponse>` — A promise that resolves with the list of code definition names.

[Full reference →](./listCodeDefinitionNames)

---

### `listDirectory`

```typescript
plugin.fs.listDirectory(params: object): Promise<ListDirectoryResponse>
```

listDirectory

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `object` | Yes |  |

**Returns:** `Promise<ListDirectoryResponse>` — A promise that resolves with the directory listing result.

[Full reference →](./listDirectory)

---

### `listFile`

```typescript
plugin.fs.listFile(folderPath: string, isRecursive: boolean): Promise<FileListResponse>
```

listFile

| Parameter | Type | Required | Description |
|---|---|---|---|
| `folderPath` | `string` | Yes |  |
| `isRecursive` | `boolean` | Yes |  _(default: `false`)_ |

**Returns:** `Promise<FileListResponse>` — A promise that resolves with the list of files.

[Full reference →](./listFile)

---

### `readFile`

```typescript
plugin.fs.readFile(filePath: string): Promise<ReadFileResponse>
```

readFile

| Parameter | Type | Required | Description |
|---|---|---|---|
| `filePath` | `string` | Yes | The path of the file to read. |

**Returns:** `Promise<ReadFileResponse>` — A promise that resolves with the server response.

[Full reference →](./readFile)

---

### `readManyFiles`

```typescript
plugin.fs.readManyFiles(params: object): Promise<ReadManyFilesResponse>
```

readManyFiles

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `object` | Yes |  |

**Returns:** `Promise<ReadManyFilesResponse>` — A promise that resolves with the read operation result.

[Full reference →](./readManyFiles)

---

### `searchFiles`

```typescript
plugin.fs.searchFiles(path: string, regex: string, filePattern: string): Promise<SearchFilesResponse>
```

searchFiles

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | `string` | Yes | The path to search within. |
| `regex` | `string` | Yes | The regex pattern to search for. |
| `filePattern` | `string` | Yes | The file pattern to match files. |

**Returns:** `Promise<SearchFilesResponse>` — A promise that resolves with the search results.

[Full reference →](./searchFiles)

---

### `updateFile`

```typescript
plugin.fs.updateFile(filename: string, filePath: string, newContent: string): Promise<UpdateFileResponse>
```

updateFile

| Parameter | Type | Required | Description |
|---|---|---|---|
| `filename` | `string` | Yes | The name of the file to update. |
| `filePath` | `string` | Yes | The path of the file to update. |
| `newContent` | `string` | Yes | The new content to write into the file. |

**Returns:** `Promise<UpdateFileResponse>` — A promise that resolves with the server response.

[Full reference →](./updateFile)

---

### `writeToFile`

```typescript
plugin.fs.writeToFile(relPath: string, newContent: string): Promise<any>
```

writeToFile

| Parameter | Type | Required | Description |
|---|---|---|---|
| `relPath` | `string` | Yes | The relative path of the file to write to. |
| `newContent` | `string` | Yes | The new content to write into the file. |

**Returns:** `Promise<any>` — A promise that resolves with the write operation result.

[Full reference →](./writeToFile)

