---
title: IngestionPipelineResponse
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: IngestionPipelineResponse

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:90

Memory Ingestion Types
Type definitions for memory ingestion pipeline operations

## Extends

- [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `pipeline`: [`IngestionPipeline`](IngestionPipeline); \} | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`data`](MemoryIngestionBaseResponse.md#data) | - | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:91 |
| `data.pipeline` | [`IngestionPipeline`](IngestionPipeline) | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:92 |
| <a id="error"></a> `error?` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`error`](MemoryIngestionBaseResponse.md#error) | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:10 |
| <a id="message"></a> `message?` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`message`](MemoryIngestionBaseResponse.md#message) | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:9 |
| <a id="requestid"></a> `requestId` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`requestId`](MemoryIngestionBaseResponse.md#requestid) | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:12 |
| <a id="success"></a> `success` | `boolean` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`success`](MemoryIngestionBaseResponse.md#success) | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:7 |
| <a id="timestamp"></a> `timestamp` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`timestamp`](MemoryIngestionBaseResponse.md#timestamp) | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:11 |
| <a id="type"></a> `type` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`type`](MemoryIngestionBaseResponse.md#type) | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:6 |
