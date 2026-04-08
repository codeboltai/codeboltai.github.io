---
title: UpdateIngestionPipelineParams
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: UpdateIngestionPipelineParams

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:67

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="description"></a> `description?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:69 |
| <a id="label"></a> `label?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:68 |
| <a id="processors"></a> `processors?` | [`IngestionProcessor`](IngestionProcessor)[] | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:73 |
| <a id="routing"></a> `routing?` | [`IngestionRouting`](IngestionRouting) | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:74 |
| <a id="status"></a> `status?` | `"active"` \| `"draft"` \| `"disabled"` | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:70 |
| <a id="trigger"></a> `trigger?` | [`IngestionTrigger`](../type-aliases/IngestionTrigger) | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:71 |
| <a id="trigger_config"></a> `trigger_config?` | `Record`\<`string`, `any`\> | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:72 |
