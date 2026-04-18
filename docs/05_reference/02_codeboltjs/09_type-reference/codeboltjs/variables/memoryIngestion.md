---
title: memoryIngestion
---

[**@codebolt/codeboltjs**](../index.md)

***

# Variable: memoryIngestion

```ts
const memoryIngestion: {
  activate: (pipelineId: string) => Promise<IngestionPipelineResponse>;
  create: (config: CreateIngestionPipelineParams) => Promise<IngestionPipelineResponse>;
  delete: (pipelineId: string) => Promise<IngestionPipelineResponse>;
  disable: (pipelineId: string) => Promise<IngestionPipelineResponse>;
  duplicate: (pipelineId: string, newId?: string, newLabel?: string) => Promise<IngestionPipelineResponse>;
  execute: (params: ExecuteIngestionParams) => Promise<IngestionExecuteResponse>;
  get: (pipelineId: string) => Promise<IngestionPipelineResponse>;
  getProcessorSpecs: () => Promise<IngestionProcessorSpecsResponse>;
  list: (filters?: ListIngestionPipelineParams) => Promise<IngestionPipelineListResponse>;
  update: (pipelineId: string, updates: UpdateIngestionPipelineParams) => Promise<IngestionPipelineResponse>;
  validate: (pipeline: CreateIngestionPipelineParams) => Promise<IngestionValidateResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/memoryIngestion.ts:20

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="activate"></a> `activate()` | (`pipelineId`: `string`) => `Promise`\<[`IngestionPipelineResponse`](../interfaces/IngestionPipelineResponse)\> | Activate an ingestion pipeline | packages/codeboltjs/src/modules/memoryIngestion.ts:145 |
| <a id="create"></a> `create()` | (`config`: [`CreateIngestionPipelineParams`](../interfaces/CreateIngestionPipelineParams)) => `Promise`\<[`IngestionPipelineResponse`](../interfaces/IngestionPipelineResponse)\> | Create a new ingestion pipeline | packages/codeboltjs/src/modules/memoryIngestion.ts:25 |
| <a id="delete"></a> `delete()` | (`pipelineId`: `string`) => `Promise`\<[`IngestionPipelineResponse`](../interfaces/IngestionPipelineResponse)\> | Delete an ingestion pipeline | packages/codeboltjs/src/modules/memoryIngestion.ts:86 |
| <a id="disable"></a> `disable()` | (`pipelineId`: `string`) => `Promise`\<[`IngestionPipelineResponse`](../interfaces/IngestionPipelineResponse)\> | Disable an ingestion pipeline | packages/codeboltjs/src/modules/memoryIngestion.ts:160 |
| <a id="duplicate"></a> `duplicate()` | (`pipelineId`: `string`, `newId?`: `string`, `newLabel?`: `string`) => `Promise`\<[`IngestionPipelineResponse`](../interfaces/IngestionPipelineResponse)\> | Duplicate an ingestion pipeline | packages/codeboltjs/src/modules/memoryIngestion.ts:177 |
| <a id="execute"></a> `execute()` | (`params`: [`ExecuteIngestionParams`](../interfaces/ExecuteIngestionParams)) => `Promise`\<[`IngestionExecuteResponse`](../interfaces/IngestionExecuteResponse)\> | Execute an ingestion pipeline | packages/codeboltjs/src/modules/memoryIngestion.ts:101 |
| <a id="get"></a> `get()` | (`pipelineId`: `string`) => `Promise`\<[`IngestionPipelineResponse`](../interfaces/IngestionPipelineResponse)\> | Get an ingestion pipeline by ID | packages/codeboltjs/src/modules/memoryIngestion.ts:40 |
| <a id="getprocessorspecs"></a> `getProcessorSpecs()` | () => `Promise`\<[`IngestionProcessorSpecsResponse`](../interfaces/IngestionProcessorSpecsResponse)\> | Get available processor specifications | packages/codeboltjs/src/modules/memoryIngestion.ts:130 |
| <a id="list"></a> `list()` | (`filters?`: [`ListIngestionPipelineParams`](../interfaces/ListIngestionPipelineParams)) => `Promise`\<[`IngestionPipelineListResponse`](../interfaces/IngestionPipelineListResponse)\> | List ingestion pipelines | packages/codeboltjs/src/modules/memoryIngestion.ts:55 |
| <a id="update"></a> `update()` | (`pipelineId`: `string`, `updates`: [`UpdateIngestionPipelineParams`](../interfaces/UpdateIngestionPipelineParams)) => `Promise`\<[`IngestionPipelineResponse`](../interfaces/IngestionPipelineResponse)\> | Update an ingestion pipeline | packages/codeboltjs/src/modules/memoryIngestion.ts:71 |
| <a id="validate"></a> `validate()` | (`pipeline`: [`CreateIngestionPipelineParams`](../interfaces/CreateIngestionPipelineParams)) => `Promise`\<[`IngestionValidateResponse`](../interfaces/IngestionValidateResponse)\> | Validate a pipeline configuration | packages/codeboltjs/src/modules/memoryIngestion.ts:116 |
