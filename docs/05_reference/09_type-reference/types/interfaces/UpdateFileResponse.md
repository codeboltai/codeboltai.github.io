---
title: UpdateFileResponse
---

[**@codebolt/types**](../index)

***

# Interface: UpdateFileResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:37

File System SDK Function Types
Types for the cbfs module functions

## Extends

- [`BaseFsSDKResponse`](BaseFsSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="backuppath"></a> `backupPath?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:41](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L41) |
| <a id="byteswritten"></a> `bytesWritten?` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:40](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L40) |
| <a id="changesummary"></a> `changeSummary?` | \{ `linesAdded`: `number`; `linesModified`: `number`; `linesRemoved`: `number`; \} | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:43](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L43) |
| `changeSummary.linesAdded` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:44](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L44) |
| `changeSummary.linesModified` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:46](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L46) |
| `changeSummary.linesRemoved` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:45](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L45) |
| <a id="error"></a> `error?` | `any` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`error`](BaseFsSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L10) |
| <a id="message"></a> `message?` | `string` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`message`](BaseFsSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L9) |
| <a id="path"></a> `path?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:38](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L38) |
| <a id="stats"></a> `stats?` | `any` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:42](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L42) |
| <a id="success"></a> `success` | `boolean` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`success`](BaseFsSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L8) |
| <a id="updated"></a> `updated?` | `boolean` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:39](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L39) |
