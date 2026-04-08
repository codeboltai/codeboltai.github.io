---
title: UpdateIngestionPipelineParams
---

[**@codebolt/types**](../index)

***

# Interface: UpdateIngestionPipelineParams

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:95

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="description"></a> `description?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:97](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L97) |
| <a id="label"></a> `label?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:96](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L96) |
| <a id="processors"></a> `processors?` | [`IngestionProcessor`](IngestionProcessor)[] | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:101](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L101) |
| <a id="routing"></a> `routing?` | [`IngestionRouting`](IngestionRouting) | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:102](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L102) |
| <a id="status"></a> `status?` | `"draft"` \| `"active"` \| `"disabled"` | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:98](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L98) |
| <a id="trigger"></a> `trigger?` | [`IngestionTrigger`](../type-aliases/IngestionTrigger) | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:99](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L99) |
| <a id="trigger_config"></a> `trigger_config?` | `Record`\<`string`, `any`\> | [common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:100](common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts#L100) |
