---
title: AnalyzeCodeResponse
---

[**@codebolt/types**](../index)

***

# Interface: AnalyzeCodeResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts:33

Code Utils SDK Function Types
Types for the cbcodeutils module functions

## Extends

- [`BaseCodeUtilsSDKResponse`](BaseCodeUtilsSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="analysis"></a> `analysis?` | \{ `complexity`: `number`; `issues`: \{ `file`: `string`; `line`: `number`; `message`: `string`; `severity`: `string`; `type`: `string`; \}[]; `maintainability`: `number`; \} | - | [common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts:34](common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts#L34) |
| `analysis.complexity` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts:35](common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts#L35) |
| `analysis.issues` | \{ `file`: `string`; `line`: `number`; `message`: `string`; `severity`: `string`; `type`: `string`; \}[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts:37](common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts#L37) |
| `analysis.maintainability` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts:36](common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts#L36) |
| <a id="error"></a> `error?` | `string` | [`BaseCodeUtilsSDKResponse`](BaseCodeUtilsSDKResponse).[`error`](BaseCodeUtilsSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts#L10) |
| <a id="message"></a> `message?` | `string` | [`BaseCodeUtilsSDKResponse`](BaseCodeUtilsSDKResponse).[`message`](BaseCodeUtilsSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts#L9) |
| <a id="success"></a> `success?` | `boolean` | [`BaseCodeUtilsSDKResponse`](BaseCodeUtilsSDKResponse).[`success`](BaseCodeUtilsSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/codeutils.ts#L8) |
