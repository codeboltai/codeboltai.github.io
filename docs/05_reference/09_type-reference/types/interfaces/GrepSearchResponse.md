---
title: GrepSearchResponse
---

[**@codebolt/types**](../index)

***

# Interface: GrepSearchResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:104

File System SDK Function Types
Types for the cbfs module functions

## Extends

- [`BaseFsSDKResponse`](BaseFsSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="error"></a> `error?` | `any` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`error`](BaseFsSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L10) |
| <a id="excludepattern"></a> `excludePattern?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:120](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L120) |
| <a id="hasmore"></a> `hasMore?` | `boolean` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:116](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L116) |
| <a id="includepattern"></a> `includePattern?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:119](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L119) |
| <a id="message"></a> `message?` | `string` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`message`](BaseFsSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L9) |
| <a id="path"></a> `path?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:118](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L118) |
| <a id="pattern"></a> `pattern?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:105](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L105) |
| <a id="results"></a> `results?` | \{ `matches`: \{ `content`: `string`; `line`: `number`; `lineNumber`: `number`; \}[]; `path`: `string`; `stats?`: `any`; \}[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:106](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L106) |
| <a id="searchtime"></a> `searchTime?` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:117](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L117) |
| <a id="success"></a> `success` | `boolean` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`success`](BaseFsSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L8) |
| <a id="totalcount"></a> `totalCount?` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:115](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L115) |
