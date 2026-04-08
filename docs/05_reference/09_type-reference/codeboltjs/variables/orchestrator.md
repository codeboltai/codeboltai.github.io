---
title: orchestrator
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: orchestrator

```ts
const orchestrator: {
  createOrchestrator: (data: CreateOrchestratorParams) => Promise<OrchestratorResponse>;
  deleteOrchestrator: (orchestratorId: string) => Promise<OrchestratorResponse>;
  getOrchestrator: (orchestratorId: string) => Promise<OrchestratorResponse>;
  getOrchestratorSettings: (orchestratorId: string) => Promise<OrchestratorResponse>;
  listOrchestrators: () => Promise<OrchestratorResponse>;
  updateCodeboltJs: () => Promise<OrchestratorResponse>;
  updateOrchestrator: (orchestratorId: string, data: UpdateOrchestratorParams) => Promise<OrchestratorResponse>;
  updateOrchestratorSettings: (orchestratorId: string, settings: UpdateOrchestratorSettingsParams) => Promise<OrchestratorResponse>;
  updateOrchestratorStatus: (orchestratorId: string, status: OrchestratorStatus) => Promise<OrchestratorResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/orchestrator.ts:41

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="createorchestrator"></a> `createOrchestrator()` | (`data`: [`CreateOrchestratorParams`](../interfaces/CreateOrchestratorParams)) => `Promise`\<[`OrchestratorResponse`](../interfaces/OrchestratorResponse)\> | Creates a new orchestrator | [packages/codeboltjs/src/modules/orchestrator.ts:84](packages/codeboltjs/src/modules/orchestrator.ts#L84) |
| <a id="deleteorchestrator"></a> `deleteOrchestrator()` | (`orchestratorId`: `string`) => `Promise`\<[`OrchestratorResponse`](../interfaces/OrchestratorResponse)\> | Deletes an orchestrator | [packages/codeboltjs/src/modules/orchestrator.ts:125](packages/codeboltjs/src/modules/orchestrator.ts#L125) |
| <a id="getorchestrator"></a> `getOrchestrator()` | (`orchestratorId`: `string`) => `Promise`\<[`OrchestratorResponse`](../interfaces/OrchestratorResponse)\> | Gets a specific orchestrator by ID | [packages/codeboltjs/src/modules/orchestrator.ts:58](packages/codeboltjs/src/modules/orchestrator.ts#L58) |
| <a id="getorchestratorsettings"></a> `getOrchestratorSettings()` | (`orchestratorId`: `string`) => `Promise`\<[`OrchestratorResponse`](../interfaces/OrchestratorResponse)\> | Gets orchestrator settings | [packages/codeboltjs/src/modules/orchestrator.ts:71](packages/codeboltjs/src/modules/orchestrator.ts#L71) |
| <a id="listorchestrators"></a> `listOrchestrators()` | () => `Promise`\<[`OrchestratorResponse`](../interfaces/OrchestratorResponse)\> | Lists all orchestrators | [packages/codeboltjs/src/modules/orchestrator.ts:45](packages/codeboltjs/src/modules/orchestrator.ts#L45) |
| <a id="updatecodeboltjs"></a> `updateCodeboltJs()` | () => `Promise`\<[`OrchestratorResponse`](../interfaces/OrchestratorResponse)\> | Initiates a Codebolt JS update | [packages/codeboltjs/src/modules/orchestrator.ts:152](packages/codeboltjs/src/modules/orchestrator.ts#L152) |
| <a id="updateorchestrator"></a> `updateOrchestrator()` | (`orchestratorId`: `string`, `data`: [`UpdateOrchestratorParams`](../interfaces/UpdateOrchestratorParams)) => `Promise`\<[`OrchestratorResponse`](../interfaces/OrchestratorResponse)\> | Updates an orchestrator | [packages/codeboltjs/src/modules/orchestrator.ts:97](packages/codeboltjs/src/modules/orchestrator.ts#L97) |
| <a id="updateorchestratorsettings"></a> `updateOrchestratorSettings()` | (`orchestratorId`: `string`, `settings`: [`UpdateOrchestratorSettingsParams`](../interfaces/UpdateOrchestratorSettingsParams)) => `Promise`\<[`OrchestratorResponse`](../interfaces/OrchestratorResponse)\> | Updates orchestrator settings | [packages/codeboltjs/src/modules/orchestrator.ts:111](packages/codeboltjs/src/modules/orchestrator.ts#L111) |
| <a id="updateorchestratorstatus"></a> `updateOrchestratorStatus()` | (`orchestratorId`: `string`, `status`: `OrchestratorStatus`) => `Promise`\<[`OrchestratorResponse`](../interfaces/OrchestratorResponse)\> | Updates orchestrator status | [packages/codeboltjs/src/modules/orchestrator.ts:138](packages/codeboltjs/src/modules/orchestrator.ts#L138) |
