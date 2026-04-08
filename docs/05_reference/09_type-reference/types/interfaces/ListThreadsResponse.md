---
title: ListThreadsResponse
---

[**@codebolt/types**](../index)

***

# Interface: ListThreadsResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:173

Response for listing threads

## Extends

- [`BaseThreadSDKResponse`](BaseThreadSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="error"></a> `error?` | `string` | [`BaseThreadSDKResponse`](BaseThreadSDKResponse).[`error`](BaseThreadSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/thread.ts#L10) |
| <a id="hasmore"></a> `hasMore?` | `boolean` | - | [common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:178](common/types/src/codeboltjstypes/libFunctionTypes/thread.ts#L178) |
| <a id="limit"></a> `limit?` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:176](common/types/src/codeboltjstypes/libFunctionTypes/thread.ts#L176) |
| <a id="message"></a> `message?` | `string` | [`BaseThreadSDKResponse`](BaseThreadSDKResponse).[`message`](BaseThreadSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/thread.ts#L9) |
| <a id="offset"></a> `offset?` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:177](common/types/src/codeboltjstypes/libFunctionTypes/thread.ts#L177) |
| <a id="success"></a> `success?` | `boolean` | [`BaseThreadSDKResponse`](BaseThreadSDKResponse).[`success`](BaseThreadSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/thread.ts#L8) |
| <a id="threads"></a> `threads?` | [`ThreadData`](ThreadData)[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:174](common/types/src/codeboltjstypes/libFunctionTypes/thread.ts#L174) |
| <a id="total"></a> `total?` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:175](common/types/src/codeboltjstypes/libFunctionTypes/thread.ts#L175) |
