---
title: FileApi
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: FileApi

Defined in: CodeBolt/packages/pluginSdk/src/api/file.api.ts:16

Provides basic file operations within the CodeBolt workspace.

Use this API to check for file existence, create new files, and manage
zip archives. For reading file contents, see [FileReadApi](FileReadApi).

## Constructors

### Constructor

```ts
new FileApi(http: HttpClient): FileApi;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/file.api.ts:17

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

Defined in: CodeBolt/packages/pluginSdk/src/api/file.api.ts:23

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `AddFileRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### checkFileExists()

```ts
checkFileExists(data: CheckFileExistsRequest): Promise<CheckFileExistsResponse>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/file.api.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CheckFileExistsRequest` |

#### Returns

`Promise`\<`CheckFileExistsResponse`\>

***

### deleteZip()

```ts
deleteZip(data: DeleteZipRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/file.api.ts:31

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `DeleteZipRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### zipFile()

```ts
zipFile(data: ZipFileRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/file.api.ts:27

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `ZipFileRequest` |

#### Returns

`Promise`\<`unknown`\>
