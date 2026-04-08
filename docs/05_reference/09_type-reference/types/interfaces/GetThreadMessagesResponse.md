---
title: GetThreadMessagesResponse
---

[**@codebolt/types**](../index)

***

# Interface: GetThreadMessagesResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:184

Response for getting thread messages

## Extends

- [`BaseThreadSDKResponse`](BaseThreadSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="error"></a> `error?` | `string` | [`BaseThreadSDKResponse`](BaseThreadSDKResponse).[`error`](BaseThreadSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/thread.ts#L10) |
| <a id="hasmore"></a> `hasMore?` | `boolean` | - | [common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:190](common/types/src/codeboltjstypes/libFunctionTypes/thread.ts#L190) |
| <a id="limit"></a> `limit?` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:188](common/types/src/codeboltjstypes/libFunctionTypes/thread.ts#L188) |
| <a id="message"></a> `message?` | `string` | [`BaseThreadSDKResponse`](BaseThreadSDKResponse).[`message`](BaseThreadSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/thread.ts#L9) |
| <a id="messages"></a> `messages?` | [`ThreadMessage`](ThreadMessage)[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:185](common/types/src/codeboltjstypes/libFunctionTypes/thread.ts#L185) |
| <a id="offset"></a> `offset?` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:189](common/types/src/codeboltjstypes/libFunctionTypes/thread.ts#L189) |
| <a id="success"></a> `success?` | `boolean` | [`BaseThreadSDKResponse`](BaseThreadSDKResponse).[`success`](BaseThreadSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/thread.ts#L8) |
| <a id="threadid"></a> `threadId?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:186](common/types/src/codeboltjstypes/libFunctionTypes/thread.ts#L186) |
| <a id="total"></a> `total?` | `number` | - | [common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:187](common/types/src/codeboltjstypes/libFunctionTypes/thread.ts#L187) |
