---
title: FileApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: FileApi

Defined in: CodeBolt/packages/clientsdk/src/api/file.api.ts:16

Provides basic file operations within the CodeBolt workspace.

Use this API to check for file existence, create new files, and manage
zip archives. For reading file contents, see [FileReadApi](FileReadApi).

## Constructors

### Constructor

```ts
new FileApi(http: HttpClient): FileApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/file.api.ts:17

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`FileApi`

## Methods

### addFile()

```ts
addFile(data: AddFileRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/file.api.ts:58

Creates a new file in the workspace.

Adds a file with the specified name and content. If the file already
exists, behavior depends on the server configuration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `AddFileRequest` | Request specifying the file path and content to create |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the file has been created

#### Example

```typescript
await client.file.addFile({
  path: 'src/utils/helpers.ts',
  content: 'export function greet() { return "hello"; }',
});
```

***

### checkFileExists()

```ts
checkFileExists(data: CheckFileExistsRequest): Promise<CheckFileExistsResponse>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/file.api.ts:37

Checks whether a file exists at the specified path.

Verifies file existence without reading its contents. Useful for
conditional logic that depends on whether a file is already present.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CheckFileExistsRequest` | Request specifying the file path to check |

#### Returns

`Promise`\<`CheckFileExistsResponse`\>

A promise that resolves to a CheckFileExistsResponse indicating existence

#### Example

```typescript
const result = await client.file.checkFileExists({ path: 'package.json' });
if (result.exists) {
  console.log('File found');
}
```

***

### deleteZip()

```ts
deleteZip(data: DeleteZipRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/file.api.ts:97

Deletes a previously created zip file.

Removes a zip archive from the workspace filesystem. Use this to
clean up temporary archives after they have been downloaded or processed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `DeleteZipRequest` | Request specifying the zip file path to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the zip file has been deleted

#### Example

```typescript
await client.file.deleteZip({ path: 'build.zip' });
```

***

### zipFile()

```ts
zipFile(data: ZipFileRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/file.api.ts:79

Creates a zip archive from specified files or directories.

Compresses the specified sources into a zip file at the given output
path. Useful for bundling project files for download or deployment.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ZipFileRequest` | Request specifying source paths and the output zip file location |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the zip file has been created

#### Example

```typescript
await client.file.zipFile({
  sourcePath: 'dist/',
  outputPath: 'build.zip',
});
```
