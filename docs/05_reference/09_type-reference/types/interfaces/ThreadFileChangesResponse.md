---
title: ThreadFileChangesResponse
---

[**@codebolt/types**](../index.md)

***

# Interface: ThreadFileChangesResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:28

Thread file changes response

## Extends

- [`BaseThreadSDKResponse`](BaseThreadSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="changes"></a> `changes?` | [`ThreadFileChange`](ThreadFileChange)[] | - | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:30 |
| <a id="error"></a> `error?` | `string` | [`BaseThreadSDKResponse`](BaseThreadSDKResponse).[`error`](BaseThreadSDKResponse.md#error) | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:10 |
| <a id="message"></a> `message?` | `string` | [`BaseThreadSDKResponse`](BaseThreadSDKResponse).[`message`](BaseThreadSDKResponse.md#message) | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:9 |
| <a id="success"></a> `success?` | `boolean` | [`BaseThreadSDKResponse`](BaseThreadSDKResponse).[`success`](BaseThreadSDKResponse.md#success) | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:8 |
| <a id="threadid"></a> `threadId?` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:29 |
| <a id="totalchanges"></a> `totalChanges?` | `number` | - | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:31 |
