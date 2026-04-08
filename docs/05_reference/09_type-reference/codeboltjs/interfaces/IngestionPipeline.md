---
title: IngestionPipeline
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: IngestionPipeline

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:27

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="createdat"></a> `createdAt` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:36 |
| <a id="description"></a> `description?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:30 |
| <a id="id"></a> `id` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:28 |
| <a id="label"></a> `label` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:29 |
| <a id="processors"></a> `processors` | [`IngestionProcessor`](IngestionProcessor)[] | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:34 |
| <a id="routing"></a> `routing` | [`IngestionRouting`](IngestionRouting) | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:35 |
| <a id="status"></a> `status` | `"active"` \| `"draft"` \| `"disabled"` | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:31 |
| <a id="trigger"></a> `trigger` | [`IngestionTrigger`](../type-aliases/IngestionTrigger) | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:32 |
| <a id="trigger_config"></a> `trigger_config?` | `Record`\<`string`, `any`\> | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:33 |
| <a id="updatedat"></a> `updatedAt` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/memoryIngestion.d.ts:37 |
