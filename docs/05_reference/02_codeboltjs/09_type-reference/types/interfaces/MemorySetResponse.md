---
title: MemorySetResponse
---

[**@codebolt/types**](../index.md)

***

# Interface: MemorySetResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:85

## Extends

- [`BaseMemorySDKResponse`](BaseMemorySDKResponse)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="error"></a> `error?` | `string` | - | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`error`](BaseMemorySDKResponse.md#error) | common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:77 |
| <a id="key"></a> `key?` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:86 |
| <a id="message"></a> `message?` | `string` | - | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`message`](BaseMemorySDKResponse.md#message) | common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:76 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | Set operation metadata | - | common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:91 |
| <a id="requestid"></a> `requestId?` | `string` | Request identifier | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`requestId`](BaseMemorySDKResponse.md#requestid) | common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:79 |
| <a id="result"></a> `result?` | [`MemoryOperationResult`](MemoryOperationResult) | Operation result | - | common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:89 |
| <a id="success"></a> `success?` | `boolean` | - | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`success`](BaseMemorySDKResponse.md#success) | common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:75 |
| <a id="timestamp"></a> `timestamp?` | `string` | Response timestamp | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`timestamp`](BaseMemorySDKResponse.md#timestamp) | common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:81 |
| <a id="value"></a> `value?` | [`MemoryValue`](../type-aliases/MemoryValue) | - | - | common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:87 |
