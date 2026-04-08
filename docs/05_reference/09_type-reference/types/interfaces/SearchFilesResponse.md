---
title: SearchFilesResponse
---

[**@codebolt/types**](../index)

***

# Interface: SearchFilesResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:80

File System SDK Function Types
Types for the cbfs module functions

## Extends

- [`BaseFsSDKResponse`](BaseFsSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="error"></a> `error?` | `any` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`error`](BaseFsSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L10) |
| <a id="hasmore"></a> `hasMore?` | `boolean` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:94](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L94) |
| <a id="message"></a> `message?` | `string` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`message`](BaseFsSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L9) |
| <a id="path"></a> `path?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:96](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L96) |
| <a id="query"></a> `query?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:81](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L81) |
| <a id="results"></a> `results?` | \{ `matches`: \{ `content`: `string`; `endIndex?`: `number`; `line`: `number`; `lineNumber`: `number`; `startIndex?`: `number`; \}[]; `path`: `string`; `stats?`: `any`; \}[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:82](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L82) |
| <a id="searchtime"></a> `searchTime?` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:95](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L95) |
| <a id="success"></a> `success` | `boolean` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`success`](BaseFsSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L8) |
| <a id="totalcount"></a> `totalCount?` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:93](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L93) |
