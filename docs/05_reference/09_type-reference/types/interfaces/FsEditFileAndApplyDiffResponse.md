---
title: FsEditFileAndApplyDiffResponse
---

[**@codebolt/types**](../index)

***

# Interface: FsEditFileAndApplyDiffResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/utils.ts:14

Utils SDK Function Types
Types for the cbutils module functions

## Extends

- [`BaseUtilsSDKResponse`](BaseUtilsSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="applymodel"></a> `applyModel?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/utils.ts:19](common/types/src/codeboltjstypes/libFunctionTypes/utils.ts#L19) |
| <a id="diff"></a> `diff?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/utils.ts:16](common/types/src/codeboltjstypes/libFunctionTypes/utils.ts#L16) |
| <a id="diffidentifier"></a> `diffIdentifier?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/utils.ts:17](common/types/src/codeboltjstypes/libFunctionTypes/utils.ts#L17) |
| <a id="error"></a> `error?` | `string` | [`BaseUtilsSDKResponse`](BaseUtilsSDKResponse).[`error`](BaseUtilsSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/utils.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/utils.ts#L10) |
| <a id="filepath"></a> `filePath?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/utils.ts:15](common/types/src/codeboltjstypes/libFunctionTypes/utils.ts#L15) |
| <a id="message"></a> `message?` | `string` | [`BaseUtilsSDKResponse`](BaseUtilsSDKResponse).[`message`](BaseUtilsSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/utils.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/utils.ts#L9) |
| <a id="prompt"></a> `prompt?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/utils.ts:18](common/types/src/codeboltjstypes/libFunctionTypes/utils.ts#L18) |
| <a id="result"></a> `result?` | \| `string` \| \{ `file`: `string`; `message`: `string`; `status`: `"success"` \| `"error"` \| `"review_started"` \| `"rejected"`; \} | - | [common/types/src/codeboltjstypes/libFunctionTypes/utils.ts:20](common/types/src/codeboltjstypes/libFunctionTypes/utils.ts#L20) |
| <a id="success"></a> `success?` | `boolean` | [`BaseUtilsSDKResponse`](BaseUtilsSDKResponse).[`success`](BaseUtilsSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/utils.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/utils.ts#L8) |
