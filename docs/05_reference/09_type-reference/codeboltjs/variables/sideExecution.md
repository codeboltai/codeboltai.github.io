---
title: sideExecution
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: sideExecution

```ts
const sideExecution: {
  getStatus: (sideExecutionId: string) => Promise<GetSideExecutionStatusResponse>;
  listActionBlocks: (projectPath?: string) => Promise<ListActionBlocksResponse>;
  startWithActionBlock: (actionBlockPath: string, params?: Record<string, any>, timeout?: number) => Promise<StartSideExecutionResponse>;
  startWithCode: (inlineCode: string, params?: Record<string, any>, timeout?: number) => Promise<StartSideExecutionResponse>;
  stop: (sideExecutionId: string) => Promise<StopSideExecutionResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/sideExecution.ts:24

Side Execution Module
Provides functionality for running code in isolated child processes

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="getstatus"></a> `getStatus()` | (`sideExecutionId`: `string`) => `Promise`\<[`GetSideExecutionStatusResponse`](../interfaces/GetSideExecutionStatusResponse)\> | Get the status of a side execution | [packages/codeboltjs/src/modules/sideExecution.ts:110](packages/codeboltjs/src/modules/sideExecution.ts#L110) |
| <a id="listactionblocks"></a> `listActionBlocks()` | (`projectPath?`: `string`) => `Promise`\<[`ListActionBlocksResponse`](../interfaces/ListActionBlocksResponse)\> | List all available ActionBlocks | [packages/codeboltjs/src/modules/sideExecution.ts:94](packages/codeboltjs/src/modules/sideExecution.ts#L94) |
| <a id="startwithactionblock"></a> `startWithActionBlock()` | (`actionBlockPath`: `string`, `params?`: `Record`\<`string`, `any`\>, `timeout?`: `number`) => `Promise`\<[`StartSideExecutionResponse`](../interfaces/StartSideExecutionResponse)\> | Start a side execution with an ActionBlock path | [packages/codeboltjs/src/modules/sideExecution.ts:32](packages/codeboltjs/src/modules/sideExecution.ts#L32) |
| <a id="startwithcode"></a> `startWithCode()` | (`inlineCode`: `string`, `params?`: `Record`\<`string`, `any`\>, `timeout?`: `number`) => `Promise`\<[`StartSideExecutionResponse`](../interfaces/StartSideExecutionResponse)\> | Start a side execution with inline JavaScript code | [packages/codeboltjs/src/modules/sideExecution.ts:56](packages/codeboltjs/src/modules/sideExecution.ts#L56) |
| <a id="stop"></a> `stop()` | (`sideExecutionId`: `string`) => `Promise`\<[`StopSideExecutionResponse`](../interfaces/StopSideExecutionResponse)\> | Stop a running side execution | [packages/codeboltjs/src/modules/sideExecution.ts:78](packages/codeboltjs/src/modules/sideExecution.ts#L78) |
