---
title: IngestionPipeline
---

[**@codebolt/types**](../index)

***

# Interface: IngestionPipeline

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:50

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="createdat"></a> `createdAt` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:59](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L59) |
| <a id="description"></a> `description?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:53](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L53) |
| <a id="id"></a> `id` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:51](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L51) |
| <a id="label"></a> `label` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:52](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L52) |
| <a id="processors"></a> `processors` | [`IngestionProcessor`](IngestionProcessor)[] | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:57](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L57) |
| <a id="routing"></a> `routing` | [`IngestionRouting`](IngestionRouting) | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:58](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L58) |
| <a id="status"></a> `status` | `"draft"` \| `"active"` \| `"disabled"` | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:54](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L54) |
| <a id="trigger"></a> `trigger` | [`IngestionTrigger`](../type-aliases/IngestionTrigger) | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:55](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L55) |
| <a id="trigger_config"></a> `trigger_config?` | `Record`\<`string`, `any`\> | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:56](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L56) |
| <a id="updatedat"></a> `updatedAt` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:60](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L60) |
