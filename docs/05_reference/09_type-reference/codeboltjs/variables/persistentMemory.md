---
title: persistentMemory
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: persistentMemory

```ts
const persistentMemory: {
  create: (config: CreatePersistentMemoryParams) => Promise<PersistentMemoryResponse>;
  delete: (memoryId: string) => Promise<PersistentMemoryResponse>;
  executeRetrieval: (memoryId: string, intent: PipelineExecutionIntent) => Promise<PersistentMemoryExecuteResponse>;
  get: (memoryId: string) => Promise<PersistentMemoryResponse>;
  getStepSpecs: () => Promise<PersistentMemoryStepSpecsResponse>;
  list: (filters?: ListPersistentMemoryParams) => Promise<PersistentMemoryListResponse>;
  update: (memoryId: string, updates: UpdatePersistentMemoryParams) => Promise<PersistentMemoryResponse>;
  validate: (memory: CreatePersistentMemoryParams) => Promise<PersistentMemoryValidateResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/persistentMemory.ts:20

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="create"></a> `create()` | (`config`: [`CreatePersistentMemoryParams`](../interfaces/CreatePersistentMemoryParams)) => `Promise`\<[`PersistentMemoryResponse`](../interfaces/PersistentMemoryResponse)\> | Create a new persistent memory configuration | [packages/codeboltjs/src/modules/persistentMemory.ts:25](packages/codeboltjs/src/modules/persistentMemory.ts#L25) |
| <a id="delete"></a> `delete()` | (`memoryId`: `string`) => `Promise`\<[`PersistentMemoryResponse`](../interfaces/PersistentMemoryResponse)\> | Delete a persistent memory | [packages/codeboltjs/src/modules/persistentMemory.ts:86](packages/codeboltjs/src/modules/persistentMemory.ts#L86) |
| <a id="executeretrieval"></a> `executeRetrieval()` | (`memoryId`: `string`, `intent`: [`PipelineExecutionIntent`](../interfaces/PipelineExecutionIntent)) => `Promise`\<[`PersistentMemoryExecuteResponse`](../interfaces/PersistentMemoryExecuteResponse)\> | Execute memory retrieval pipeline | [packages/codeboltjs/src/modules/persistentMemory.ts:102](packages/codeboltjs/src/modules/persistentMemory.ts#L102) |
| <a id="get"></a> `get()` | (`memoryId`: `string`) => `Promise`\<[`PersistentMemoryResponse`](../interfaces/PersistentMemoryResponse)\> | Get a persistent memory by ID | [packages/codeboltjs/src/modules/persistentMemory.ts:40](packages/codeboltjs/src/modules/persistentMemory.ts#L40) |
| <a id="getstepspecs"></a> `getStepSpecs()` | () => `Promise`\<[`PersistentMemoryStepSpecsResponse`](../interfaces/PersistentMemoryStepSpecsResponse)\> | Get available step specifications | [packages/codeboltjs/src/modules/persistentMemory.ts:131](packages/codeboltjs/src/modules/persistentMemory.ts#L131) |
| <a id="list"></a> `list()` | (`filters?`: [`ListPersistentMemoryParams`](../interfaces/ListPersistentMemoryParams)) => `Promise`\<[`PersistentMemoryListResponse`](../interfaces/PersistentMemoryListResponse)\> | List persistent memories | [packages/codeboltjs/src/modules/persistentMemory.ts:55](packages/codeboltjs/src/modules/persistentMemory.ts#L55) |
| <a id="update"></a> `update()` | (`memoryId`: `string`, `updates`: [`UpdatePersistentMemoryParams`](../interfaces/UpdatePersistentMemoryParams)) => `Promise`\<[`PersistentMemoryResponse`](../interfaces/PersistentMemoryResponse)\> | Update a persistent memory | [packages/codeboltjs/src/modules/persistentMemory.ts:71](packages/codeboltjs/src/modules/persistentMemory.ts#L71) |
| <a id="validate"></a> `validate()` | (`memory`: [`CreatePersistentMemoryParams`](../interfaces/CreatePersistentMemoryParams)) => `Promise`\<[`PersistentMemoryValidateResponse`](../interfaces/PersistentMemoryValidateResponse)\> | Validate a memory configuration | [packages/codeboltjs/src/modules/persistentMemory.ts:117](packages/codeboltjs/src/modules/persistentMemory.ts#L117) |
