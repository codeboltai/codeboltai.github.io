---
title: MemoryTTLResponse
---

[**@codebolt/types**](../index)

***

# Interface: MemoryTTLResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:154

## Extends

- [`BaseMemorySDKResponse`](BaseMemorySDKResponse)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="error"></a> `error?` | `string` | - | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`error`](BaseMemorySDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:77](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L77) |
| <a id="key"></a> `key?` | `string` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:155](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L155) |
| <a id="message"></a> `message?` | `string` | - | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`message`](BaseMemorySDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:76](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L76) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | TTL check metadata | - | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:159](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L159) |
| <a id="requestid"></a> `requestId?` | `string` | Request identifier | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`requestId`](BaseMemorySDKResponse.md#requestid) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:79](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L79) |
| <a id="success"></a> `success?` | `boolean` | - | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`success`](BaseMemorySDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:75](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L75) |
| <a id="timestamp"></a> `timestamp?` | `string` | Response timestamp | [`BaseMemorySDKResponse`](BaseMemorySDKResponse).[`timestamp`](BaseMemorySDKResponse.md#timestamp) | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:81](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L81) |
| <a id="ttl"></a> `ttl?` | `number` | Time to live in seconds | - | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:157](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L157) |
