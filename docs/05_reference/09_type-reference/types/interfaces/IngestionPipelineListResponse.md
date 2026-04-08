---
title: IngestionPipelineListResponse
---

[**@codebolt/types**](../index)

***

# Interface: IngestionPipelineListResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:126

Memory Ingestion Types
Type definitions for memory ingestion pipeline operations

## Extends

- [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `pipelines`: [`IngestionPipeline`](IngestionPipeline)[]; \} | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`data`](MemoryIngestionBaseResponse.md#data) | - | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:127](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L127) |
| `data.pipelines` | [`IngestionPipeline`](IngestionPipeline)[] | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:127](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L127) |
| <a id="error"></a> `error?` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`error`](MemoryIngestionBaseResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:11](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L11) |
| <a id="message"></a> `message?` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`message`](MemoryIngestionBaseResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L10) |
| <a id="requestid"></a> `requestId` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`requestId`](MemoryIngestionBaseResponse.md#requestid) | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:13](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L13) |
| <a id="success"></a> `success` | `boolean` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`success`](MemoryIngestionBaseResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L8) |
| <a id="timestamp"></a> `timestamp` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`timestamp`](MemoryIngestionBaseResponse.md#timestamp) | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:12](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L12) |
| <a id="type"></a> `type` | `string` | - | [`MemoryIngestionBaseResponse`](MemoryIngestionBaseResponse).[`type`](MemoryIngestionBaseResponse.md#type) | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:7](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L7) |
