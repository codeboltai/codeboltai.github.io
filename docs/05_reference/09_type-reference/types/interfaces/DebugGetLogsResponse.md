---
title: DebugGetLogsResponse
---

[**@codebolt/types**](../index)

***

# Interface: DebugGetLogsResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/debug.ts:24

Debug SDK Function Types
Types for the cbdebug module functions

## Extends

- [`BaseDebugSDKResponse`](BaseDebugSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="error"></a> `error?` | `string` | [`BaseDebugSDKResponse`](BaseDebugSDKResponse).[`error`](BaseDebugSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/debug.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/debug.ts#L10) |
| <a id="logs"></a> `logs?` | \{ `id`: `string`; `level`: `string`; `message`: `string`; `metadata?`: `Record`\<`string`, `any`\>; `timestamp`: `string`; \}[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/debug.ts:25](common/types/src/codeboltjstypes/libFunctionTypes/debug.ts#L25) |
| <a id="message"></a> `message?` | `string` | [`BaseDebugSDKResponse`](BaseDebugSDKResponse).[`message`](BaseDebugSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/debug.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/debug.ts#L9) |
| <a id="success"></a> `success?` | `boolean` | [`BaseDebugSDKResponse`](BaseDebugSDKResponse).[`success`](BaseDebugSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/debug.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/debug.ts#L8) |
