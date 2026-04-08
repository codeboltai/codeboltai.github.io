---
title: KVInstanceListResponse
---

[**@codebolt/types**](../index)

***

# Interface: KVInstanceListResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:105

KV Store Types
Type definitions for Key-Value store operations

## Extends

- [`KVStoreBaseResponse`](KVStoreBaseResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `instances`: [`KVStoreInstance`](KVStoreInstance)[]; \} | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`data`](KVStoreBaseResponse.md#data) | - | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:106](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L106) |
| `data.instances` | [`KVStoreInstance`](KVStoreInstance)[] | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:106](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L106) |
| <a id="error"></a> `error?` | `string` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`error`](KVStoreBaseResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:12](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L12) |
| <a id="message"></a> `message?` | `string` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`message`](KVStoreBaseResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:11](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L11) |
| <a id="requestid"></a> `requestId` | `string` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`requestId`](KVStoreBaseResponse.md#requestid) | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:14](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L14) |
| <a id="success"></a> `success` | `boolean` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`success`](KVStoreBaseResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L9) |
| <a id="timestamp"></a> `timestamp` | `string` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`timestamp`](KVStoreBaseResponse.md#timestamp) | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:13](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L13) |
| <a id="type"></a> `type` | `string` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`type`](KVStoreBaseResponse.md#type) | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L8) |
