---
title: MemoryGetResponse
---

[**@codebolt/types**](../index)

***

# Interface: MemoryGetResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:94

## Extends

- [`BaseMemorySDKResponse`](BaseMemorySDKResponse)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="entry"></a> `entry?` | [`MemoryEntry`](MemoryEntry) | Memory entry data | - | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:98](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L98) |
| <a id="error"></a> `error?` | `string` | - | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`error`](BaseMemorySDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:77](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L77) |
| <a id="key"></a> `key?` | `string` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:95](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L95) |
| <a id="message"></a> `message?` | `string` | - | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`message`](BaseMemorySDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:76](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L76) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | Get operation metadata | - | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:100](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L100) |
| <a id="requestid"></a> `requestId?` | `string` | Request identifier | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`requestId`](BaseMemorySDKResponse.md#requestid) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:79](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L79) |
| <a id="success"></a> `success?` | `boolean` | - | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`success`](BaseMemorySDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:75](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L75) |
| <a id="timestamp"></a> `timestamp?` | `string` | Response timestamp | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`timestamp`](BaseMemorySDKResponse.md#timestamp) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:81](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L81) |
| <a id="value"></a> `value?` | [`MemoryValue`](../type-aliases/MemoryValue) | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:96](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L96) |
