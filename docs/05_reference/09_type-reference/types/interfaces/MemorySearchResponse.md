---
title: MemorySearchResponse
---

[**@codebolt/types**](../index)

***

# Interface: MemorySearchResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:127

## Extends

- [`BaseMemorySDKResponse`](BaseMemorySDKResponse)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="error"></a> `error?` | `string` | - | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`error`](BaseMemorySDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:77](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L77) |
| <a id="message"></a> `message?` | `string` | - | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`message`](BaseMemorySDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:76](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L76) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | Search operation metadata | - | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:133](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L133) |
| <a id="query"></a> `query?` | `string` | Search query | - | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:129](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L129) |
| <a id="requestid"></a> `requestId?` | `string` | Request identifier | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`requestId`](BaseMemorySDKResponse.md#requestid) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:79](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L79) |
| <a id="results"></a> `results?` | [`MemorySearchResult`](MemorySearchResult) | Search results | - | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:131](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L131) |
| <a id="success"></a> `success?` | `boolean` | - | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`success`](BaseMemorySDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:75](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L75) |
| <a id="timestamp"></a> `timestamp?` | `string` | Response timestamp | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`timestamp`](BaseMemorySDKResponse.md#timestamp) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:81](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L81) |
