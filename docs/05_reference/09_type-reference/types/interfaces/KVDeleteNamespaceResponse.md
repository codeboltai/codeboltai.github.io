---
title: KVDeleteNamespaceResponse
---

[**@codebolt/types**](../index.md)

***

# Interface: KVDeleteNamespaceResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:121

KV Store Types
Type definitions for Key-Value store operations

## Extends

- [`KVStoreBaseResponse`](KVStoreBaseResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `deletedCount`: `number`; \} | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`data`](KVStoreBaseResponse.md#data) | - | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:122 |
| `data.deletedCount` | `number` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:122 |
| <a id="error"></a> `error?` | `string` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`error`](KVStoreBaseResponse.md#error) | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:12 |
| <a id="message"></a> `message?` | `string` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`message`](KVStoreBaseResponse.md#message) | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:11 |
| <a id="requestid"></a> `requestId` | `string` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`requestId`](KVStoreBaseResponse.md#requestid) | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:14 |
| <a id="success"></a> `success` | `boolean` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`success`](KVStoreBaseResponse.md#success) | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:9 |
| <a id="timestamp"></a> `timestamp` | `string` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`timestamp`](KVStoreBaseResponse.md#timestamp) | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:13 |
| <a id="type"></a> `type` | `string` | - | [`KVStoreBaseResponse`](KVStoreBaseResponse).[`type`](KVStoreBaseResponse.md#type) | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:8 |
