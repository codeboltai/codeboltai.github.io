---
title: MatchProblemResponse
---

[**@codebolt/types**](../index)

***

# Interface: MatchProblemResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts:23

Code Utils SDK Function Types
Types for the cbcodeutils module functions

## Extends

- [`BaseCodeUtilsSDKResponse`](BaseCodeUtilsSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="error"></a> `error?` | `string` | [`BaseCodeUtilsSDKResponse`](BaseCodeUtilsSDKResponse).[`error`](BaseCodeUtilsSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts#L10) |
| <a id="matches"></a> `matches?` | \{ `column`: `number`; `file`: `string`; `line`: `number`; `message`: `string`; `severity`: `"error"` \| `"info"` \| `"warning"`; \}[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts:24](common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts#L24) |
| <a id="message"></a> `message?` | `string` | [`BaseCodeUtilsSDKResponse`](BaseCodeUtilsSDKResponse).[`message`](BaseCodeUtilsSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts#L9) |
| <a id="success"></a> `success?` | `boolean` | [`BaseCodeUtilsSDKResponse`](BaseCodeUtilsSDKResponse).[`success`](BaseCodeUtilsSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts#L8) |
