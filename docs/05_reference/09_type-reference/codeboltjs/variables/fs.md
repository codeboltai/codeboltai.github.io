---
title: fs
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: fs

```ts
const fs: {
  createFile: (fileName: string, source: string, filePath: string) => Promise<CreateFileResponse>;
  createFolder: (folderName: string, folderPath: string) => Promise<CreateFolderResponse>;
  deleteFile: (filename: string, filePath: string) => Promise<DeleteFileResponse>;
  deleteFolder: (foldername: string, folderpath: string) => Promise<DeleteFolderResponse>;
  editFileWithDiff: (targetFile: string, codeEdit: string, diffIdentifier: string, prompt: string, applyModel?: string) => Promise<EditFileAndApplyDiffResponse>;
  fileSearch: (query: string) => Promise<FileSearchResponse>;
  grepSearch: (path: string, query: string, includePattern?: string, excludePattern?: string, caseSensitive: boolean) => Promise<GrepSearchResponse>;
  listCodeDefinitionNames: (path: string) => Promise<ListCodeDefinitionsResponse>;
  listDirectory: (params: {
     detailed?: boolean;
     ignore?: string[];
     limit?: number;
     notifyUser?: boolean;
     path: string;
     show_hidden?: boolean;
  }) => Promise<ListDirectoryResponse>;
  listFile: (folderPath: string, isRecursive: boolean) => Promise<FileListResponse>;
  readFile: (filePath: string) => Promise<ReadFileResponse>;
  readManyFiles: (params: {
     exclude?: string[];
     include?: string[];
     include_metadata?: boolean;
     max_files?: number;
     max_total_size?: number;
     notifyUser?: boolean;
     paths: string[];
     recursive?: boolean;
     separator_format?: string;
     use_default_excludes?: boolean;
  }) => Promise<ReadManyFilesResponse>;
  searchFiles: (path: string, regex: string, filePattern: string) => Promise<SearchFilesResponse>;
  updateFile: (filename: string, filePath: string, newContent: string) => Promise<UpdateFileResponse>;
  writeToFile: (relPath: string, newContent: string) => Promise<any>;
};
```

Defined in: packages/codeboltjs/src/modules/fs.ts:12

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="createfile"></a> `createFile()` | (`fileName`: `string`, `source`: `string`, `filePath`: `string`) => `Promise`\<`CreateFileResponse`\> | **`Function`** createFile **Description** Creates a new file. | [packages/codeboltjs/src/modules/fs.ts:21](packages/codeboltjs/src/modules/fs.ts#L21) |
| <a id="createfolder"></a> `createFolder()` | (`folderName`: `string`, `folderPath`: `string`) => `Promise`\<`CreateFolderResponse`\> | **`Function`** createFolder **Description** Creates a new folder. | [packages/codeboltjs/src/modules/fs.ts:55](packages/codeboltjs/src/modules/fs.ts#L55) |
| <a id="deletefile"></a> `deleteFile()` | (`filename`: `string`, `filePath`: `string`) => `Promise`\<`DeleteFileResponse`\> | **`Function`** deleteFile **Description** Deletes a file. | [packages/codeboltjs/src/modules/fs.ts:120](packages/codeboltjs/src/modules/fs.ts#L120) |
| <a id="deletefolder"></a> `deleteFolder()` | (`foldername`: `string`, `folderpath`: `string`) => `Promise`\<`DeleteFolderResponse`\> | **`Function`** deleteFolder **Description** Deletes a folder. | [packages/codeboltjs/src/modules/fs.ts:140](packages/codeboltjs/src/modules/fs.ts#L140) |
| <a id="editfilewithdiff"></a> `editFileWithDiff()` | (`targetFile`: `string`, `codeEdit`: `string`, `diffIdentifier`: `string`, `prompt`: `string`, `applyModel?`: `string`) => `Promise`\<`EditFileAndApplyDiffResponse`\> | **`Function`** editFileWithDiff **Description** Edits a file by applying a diff. | [packages/codeboltjs/src/modules/fs.ts:303](packages/codeboltjs/src/modules/fs.ts#L303) |
| <a id="filesearch"></a> `fileSearch()` | (`query`: `string`) => `Promise`\<`FileSearchResponse`\> | **`Function`** fileSearch **Description** Performs a fuzzy search for files. | [packages/codeboltjs/src/modules/fs.ts:280](packages/codeboltjs/src/modules/fs.ts#L280) |
| <a id="grepsearch"></a> `grepSearch()` | (`path`: `string`, `query`: `string`, `includePattern?`: `string`, `excludePattern?`: `string`, `caseSensitive`: `boolean`) => `Promise`\<`GrepSearchResponse`\> | **`Function`** grepSearch **Description** Performs a grep search in files. | [packages/codeboltjs/src/modules/fs.ts:255](packages/codeboltjs/src/modules/fs.ts#L255) |
| <a id="listcodedefinitionnames"></a> `listCodeDefinitionNames()` | (`path`: `string`) => `Promise`\<`ListCodeDefinitionsResponse`\> | **`Function`** listCodeDefinitionNames **Description** Lists all code definition names in a given path. | [packages/codeboltjs/src/modules/fs.ts:179](packages/codeboltjs/src/modules/fs.ts#L179) |
| <a id="listdirectory"></a> `listDirectory()` | (`params`: \{ `detailed?`: `boolean`; `ignore?`: `string`[]; `limit?`: `number`; `notifyUser?`: `boolean`; `path`: `string`; `show_hidden?`: `boolean`; \}) => `Promise`\<`ListDirectoryResponse`\> | **`Function`** listDirectory **Description** Lists directory contents using advanced directory listing tool. | [packages/codeboltjs/src/modules/fs.ts:370](packages/codeboltjs/src/modules/fs.ts#L370) |
| <a id="listfile"></a> `listFile()` | (`folderPath`: `string`, `isRecursive`: `boolean`) => `Promise`\<`FileListResponse`\> | **`Function`** listFile **Description** Lists all files. | [packages/codeboltjs/src/modules/fs.ts:158](packages/codeboltjs/src/modules/fs.ts#L158) |
| <a id="readfile"></a> `readFile()` | (`filePath`: `string`) => `Promise`\<`ReadFileResponse`\> | **`Function`** readFile **Description** Reads the content of a file. | [packages/codeboltjs/src/modules/fs.ts:80](packages/codeboltjs/src/modules/fs.ts#L80) |
| <a id="readmanyfiles"></a> `readManyFiles()` | (`params`: \{ `exclude?`: `string`[]; `include?`: `string`[]; `include_metadata?`: `boolean`; `max_files?`: `number`; `max_total_size?`: `number`; `notifyUser?`: `boolean`; `paths`: `string`[]; `recursive?`: `boolean`; `separator_format?`: `string`; `use_default_excludes?`: `boolean`; \}) => `Promise`\<`ReadManyFilesResponse`\> | **`Function`** readManyFiles **Description** Reads multiple files based on paths, patterns, or glob expressions. | [packages/codeboltjs/src/modules/fs.ts:337](packages/codeboltjs/src/modules/fs.ts#L337) |
| <a id="searchfiles"></a> `searchFiles()` | (`path`: `string`, `regex`: `string`, `filePattern`: `string`) => `Promise`\<`SearchFilesResponse`\> | **`Function`** searchFiles **Description** Searches files in a given path using a regex pattern. | [packages/codeboltjs/src/modules/fs.ts:200](packages/codeboltjs/src/modules/fs.ts#L200) |
| <a id="updatefile"></a> `updateFile()` | (`filename`: `string`, `filePath`: `string`, `newContent`: `string`) => `Promise`\<`UpdateFileResponse`\> | **`Function`** updateFile **Description** Updates the content of a file. | [packages/codeboltjs/src/modules/fs.ts:100](packages/codeboltjs/src/modules/fs.ts#L100) |
| <a id="writetofile"></a> `writeToFile()` | (`relPath`: `string`, `newContent`: `string`) => `Promise`\<`any`\> | **`Function`** writeToFile **Description** Writes content to a file. | [packages/codeboltjs/src/modules/fs.ts:221](packages/codeboltjs/src/modules/fs.ts#L221) |
