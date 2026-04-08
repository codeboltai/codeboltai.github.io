---
title: EditFileAndApplyDiffResponse
---

[**@codebolt/types**](../index)

***

# Interface: EditFileAndApplyDiffResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:129

File System SDK Function Types
Types for the cbfs module functions

## Extends

- [`BaseFsSDKResponse`](BaseFsSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="applymodel"></a> `applyModel?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:134](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L134) |
| <a id="diff"></a> `diff?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:131](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L131) |
| <a id="diffidentifier"></a> `diffIdentifier?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:132](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L132) |
| <a id="error"></a> `error?` | `any` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`error`](BaseFsSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L10) |
| <a id="filepath"></a> `filePath?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:130](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L130) |
| <a id="message"></a> `message?` | `string` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`message`](BaseFsSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L9) |
| <a id="prompt"></a> `prompt?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:133](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L133) |
| <a id="result"></a> `result?` | \| `string` \| \{ `file`: `string`; `message`: `string`; `status`: `"success"` \| `"error"` \| `"review_started"` \| `"rejected"`; \} | - | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:135](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L135) |
| <a id="success"></a> `success` | `boolean` | [`BaseFsSDKResponse`](BaseFsSDKResponse).[`success`](BaseFsSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/fs.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/fs.ts#L8) |
