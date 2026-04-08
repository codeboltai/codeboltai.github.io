---
title: MemoryListResponse
---

[**@codebolt/types**](../index)

***

# Interface: MemoryListResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:111

## Extends

- [`BaseMemorySDKResponse`](BaseMemorySDKResponse)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="entries"></a> `entries?` | `Record`\<`string`, [`MemoryEntry`](MemoryEntry)\> | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:113](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L113) |
| <a id="error"></a> `error?` | `string` | - | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`error`](BaseMemorySDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:77](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L77) |
| <a id="keys"></a> `keys?` | `string`[] | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:112](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L112) |
| <a id="message"></a> `message?` | `string` | - | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`message`](BaseMemorySDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:76](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L76) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | List operation metadata | - | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:117](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L117) |
| <a id="requestid"></a> `requestId?` | `string` | Request identifier | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`requestId`](BaseMemorySDKResponse.md#requestid) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:79](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L79) |
| <a id="result"></a> `result?` | [`MemoryListResult`](MemoryListResult) | List result data | - | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:115](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L115) |
| <a id="success"></a> `success?` | `boolean` | - | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`success`](BaseMemorySDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:75](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L75) |
| <a id="timestamp"></a> `timestamp?` | `string` | Response timestamp | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`timestamp`](BaseMemorySDKResponse.md#timestamp) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:81](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L81) |
