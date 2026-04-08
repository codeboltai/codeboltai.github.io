---
title: KVGetResponse
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: KVGetResponse

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:94

KV Store Types
Type definitions for Key-Value store operations

## Extends

- [`KVStoreBaseResponse`](KVStoreBaseResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `exists`: `boolean`; `value`: `any`; \} | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`data`](KVStoreBaseResponse.md#data) | - | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:95 |
| `data.exists` | `boolean` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:97 |
| `data.value` | `any` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:96 |
| <a id="error"></a> `error?` | `string` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`error`](KVStoreBaseResponse.md#error) | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:10 |
| <a id="message"></a> `message?` | `string` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`message`](KVStoreBaseResponse.md#message) | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:9 |
| <a id="requestid"></a> `requestId` | `string` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`requestId`](KVStoreBaseResponse.md#requestid) | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:12 |
| <a id="success"></a> `success` | `boolean` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`success`](KVStoreBaseResponse.md#success) | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:7 |
| <a id="timestamp"></a> `timestamp` | `string` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`timestamp`](KVStoreBaseResponse.md#timestamp) | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:11 |
| <a id="type"></a> `type` | `string` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`type`](KVStoreBaseResponse.md#type) | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:6 |
