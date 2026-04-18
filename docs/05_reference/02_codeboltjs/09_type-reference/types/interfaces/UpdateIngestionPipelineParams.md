---
title: UpdateIngestionPipelineParams
---

[**@codebolt/types**](../index.md)

***

# Interface: UpdateIngestionPipelineParams

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:95

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="description"></a> `description?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:97 |
| <a id="label"></a> `label?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:96 |
| <a id="processors"></a> `processors?` | [`IngestionProcessor`](IngestionProcessor)[] | common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:101 |
| <a id="routing"></a> `routing?` | [`IngestionRouting`](IngestionRouting) | common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:102 |
| <a id="status"></a> `status?` | `"draft"` \| `"active"` \| `"disabled"` | common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:98 |
| <a id="trigger"></a> `trigger?` | [`IngestionTrigger`](../type-aliases/IngestionTrigger) | common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:99 |
| <a id="trigger_config"></a> `trigger_config?` | `Record`\<`string`, `any`\> | common/types/src/codeboltjstypes/libFunctionTypes/memoryIngestion.ts:100 |
