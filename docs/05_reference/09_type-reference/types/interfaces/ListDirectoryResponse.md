---
title: ListDirectoryResponse
---

[**@codebolt/types**](../index)

***

# Interface: ListDirectoryResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:168

File System SDK Function Types
Types for the cbfs module functions

## Extends

- [`BaseFsSDKResponse`](BaseFsSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="entries"></a> `entries?` | [`DirectoryEntry`](DirectoryEntry)[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:170](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L170) |
| <a id="error"></a> `error?` | `any` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`error`](BaseFsSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L10) |
| <a id="hasmore"></a> `hasMore?` | `boolean` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:172](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L172) |
| <a id="message"></a> `message?` | `string` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`message`](BaseFsSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L9) |
| <a id="path"></a> `path?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:169](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L169) |
| <a id="stats"></a> `stats?` | \{ `directoryCount`: `number`; `fileCount`: `number`; `totalSize`: `number`; \} | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:173](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L173) |
| `stats.directoryCount` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:176](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L176) |
| `stats.fileCount` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:175](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L175) |
| `stats.totalSize` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:174](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L174) |
| <a id="success"></a> `success` | `boolean` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`success`](BaseFsSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L8) |
| <a id="totalcount"></a> `totalCount?` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:171](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L171) |
