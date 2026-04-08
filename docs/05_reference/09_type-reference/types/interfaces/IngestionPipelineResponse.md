---
title: IngestionPipelineResponse
---

[**@codebolt/types**](../index.md)

***

# Interface: IngestionPipelineResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:122

Memory Ingestion Types
Type definitions for memory ingestion pipeline operations

## Extends

- [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `pipeline`: [`IngestionPipeline`](IngestionPipeline); \} | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`data`](MemoryIngestionBaseResponse.md#data) | - | common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:123 |
| `data.pipeline` | [`IngestionPipeline`](IngestionPipeline) | - | - | common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:123 |
| <a id="error"></a> `error?` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`error`](MemoryIngestionBaseResponse.md#error) | common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:11 |
| <a id="message"></a> `message?` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`message`](MemoryIngestionBaseResponse.md#message) | common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:10 |
| <a id="requestid"></a> `requestId` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`requestId`](MemoryIngestionBaseResponse.md#requestid) | common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:13 |
| <a id="success"></a> `success` | `boolean` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`success`](MemoryIngestionBaseResponse.md#success) | common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:8 |
| <a id="timestamp"></a> `timestamp` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`timestamp`](MemoryIngestionBaseResponse.md#timestamp) | common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:12 |
| <a id="type"></a> `type` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`type`](MemoryIngestionBaseResponse.md#type) | common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:7 |
