---
title: IngestionValidateResponse
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: IngestionValidateResponse

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:105

Memory Ingestion Types
Type definitions for memory ingestion pipeline operations

## Extends

- [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `validation`: \{ `errors?`: `string`[]; `valid`: `boolean`; \}; \} | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`data`](MemoryIngestionBaseResponse.md#data) | - | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:106 |
| `data.validation` | \{ `errors?`: `string`[]; `valid`: `boolean`; \} | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:107 |
| `data.validation.errors?` | `string`[] | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:109 |
| `data.validation.valid` | `boolean` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:108 |
| <a id="error"></a> `error?` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`error`](MemoryIngestionBaseResponse.md#error) | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:10 |
| <a id="message"></a> `message?` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`message`](MemoryIngestionBaseResponse.md#message) | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:9 |
| <a id="requestid"></a> `requestId` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`requestId`](MemoryIngestionBaseResponse.md#requestid) | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:12 |
| <a id="success"></a> `success` | `boolean` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`success`](MemoryIngestionBaseResponse.md#success) | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:7 |
| <a id="timestamp"></a> `timestamp` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`timestamp`](MemoryIngestionBaseResponse.md#timestamp) | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:11 |
| <a id="type"></a> `type` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`type`](MemoryIngestionBaseResponse.md#type) | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:6 |
