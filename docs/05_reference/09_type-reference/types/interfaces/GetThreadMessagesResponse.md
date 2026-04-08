---
title: GetThreadMessagesResponse
---

[**@codebolt/types**](../index.md)

***

# Interface: GetThreadMessagesResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:184

Response for getting thread messages

## Extends

- [`BaseThreadSDKResponse`](BaseThreadSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="error"></a> `error?` | `string` | [`BaseThreadSDKResponse`](BaseThreadSDKResponse).[`error`](BaseThreadSDKResponse.md#error) | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:10 |
| <a id="hasmore"></a> `hasMore?` | `boolean` | - | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:190 |
| <a id="limit"></a> `limit?` | `number` | - | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:188 |
| <a id="message"></a> `message?` | `string` | [`BaseThreadSDKResponse`](BaseThreadSDKResponse).[`message`](BaseThreadSDKResponse.md#message) | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:9 |
| <a id="messages"></a> `messages?` | [`ThreadMessage`](ThreadMessage)[] | - | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:185 |
| <a id="offset"></a> `offset?` | `number` | - | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:189 |
| <a id="success"></a> `success?` | `boolean` | [`BaseThreadSDKResponse`](BaseThreadSDKResponse).[`success`](BaseThreadSDKResponse.md#success) | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:8 |
| <a id="threadid"></a> `threadId?` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:186 |
| <a id="total"></a> `total?` | `number` | - | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:187 |
