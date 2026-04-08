---
title: autoTesting
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: autoTesting

```ts
const autoTesting: {
  addCaseToSuite: (params: IAddCaseToSuiteParams) => Promise<IAddCaseToSuiteResponse>;
  createCase: (params: ICreateCaseParams) => Promise<ICreateCaseResponse>;
  createRun: (params: ICreateRunParams) => Promise<ICreateRunResponse>;
  createSuite: (params: ICreateSuiteParams) => Promise<ICreateSuiteResponse>;
  deleteCase: (params: IDeleteCaseParams) => Promise<IDeleteCaseResponse>;
  deleteSuite: (params: IDeleteSuiteParams) => Promise<IDeleteSuiteResponse>;
  getCase: (params: IGetCaseParams) => Promise<IGetCaseResponse>;
  getRun: (params: IGetRunParams) => Promise<IGetRunResponse>;
  getSuite: (params: IGetSuiteParams) => Promise<IGetSuiteResponse>;
  listCases: (_params?: IListCasesParams) => Promise<IListCasesResponse>;
  listRuns: (params?: IListRunsParams) => Promise<IListRunsResponse>;
  listSuites: (_params?: IListSuitesParams) => Promise<IListSuitesResponse>;
  removeCaseFromSuite: (params: IRemoveCaseFromSuiteParams) => Promise<IRemoveCaseFromSuiteResponse>;
  updateCase: (params: IUpdateCaseParams) => Promise<IUpdateCaseResponse>;
  updateRunCaseStatus: (params: IUpdateRunCaseParams) => Promise<IUpdateRunCaseResponse>;
  updateRunStatus: (params: IUpdateRunStatusParams) => Promise<IUpdateRunStatusResponse>;
  updateRunStepStatus: (params: IUpdateRunStepParams) => Promise<IUpdateRunStepResponse>;
  updateSuite: (params: IUpdateSuiteParams) => Promise<IUpdateSuiteResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/autoTesting.ts:43

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="addcasetosuite"></a> `addCaseToSuite()` | (`params`: [`IAddCaseToSuiteParams`](../interfaces/IAddCaseToSuiteParams)) => `Promise`\<[`IAddCaseToSuiteResponse`](../interfaces/IAddCaseToSuiteResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:75](packages/codeboltjs/src/modules/autoTesting.ts#L75) |
| <a id="createcase"></a> `createCase()` | (`params`: [`ICreateCaseParams`](../interfaces/ICreateCaseParams)) => `Promise`\<[`ICreateCaseResponse`](../interfaces/ICreateCaseResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:88](packages/codeboltjs/src/modules/autoTesting.ts#L88) |
| <a id="createrun"></a> `createRun()` | (`params`: [`ICreateRunParams`](../interfaces/ICreateRunParams)) => `Promise`\<[`ICreateRunResponse`](../interfaces/ICreateRunResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:119](packages/codeboltjs/src/modules/autoTesting.ts#L119) |
| <a id="createsuite"></a> `createSuite()` | (`params`: [`ICreateSuiteParams`](../interfaces/ICreateSuiteParams)) => `Promise`\<[`ICreateSuiteResponse`](../interfaces/ICreateSuiteResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:45](packages/codeboltjs/src/modules/autoTesting.ts#L45) |
| <a id="deletecase"></a> `deleteCase()` | (`params`: [`IDeleteCaseParams`](../interfaces/IDeleteCaseParams)) => `Promise`\<[`IDeleteCaseResponse`](../interfaces/IDeleteCaseResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:112](packages/codeboltjs/src/modules/autoTesting.ts#L112) |
| <a id="deletesuite"></a> `deleteSuite()` | (`params`: [`IDeleteSuiteParams`](../interfaces/IDeleteSuiteParams)) => `Promise`\<[`IDeleteSuiteResponse`](../interfaces/IDeleteSuiteResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:69](packages/codeboltjs/src/modules/autoTesting.ts#L69) |
| <a id="getcase"></a> `getCase()` | (`params`: [`IGetCaseParams`](../interfaces/IGetCaseParams)) => `Promise`\<[`IGetCaseResponse`](../interfaces/IGetCaseResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:94](packages/codeboltjs/src/modules/autoTesting.ts#L94) |
| <a id="getrun"></a> `getRun()` | (`params`: [`IGetRunParams`](../interfaces/IGetRunParams)) => `Promise`\<[`IGetRunResponse`](../interfaces/IGetRunResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:125](packages/codeboltjs/src/modules/autoTesting.ts#L125) |
| <a id="getsuite"></a> `getSuite()` | (`params`: [`IGetSuiteParams`](../interfaces/IGetSuiteParams)) => `Promise`\<[`IGetSuiteResponse`](../interfaces/IGetSuiteResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:51](packages/codeboltjs/src/modules/autoTesting.ts#L51) |
| <a id="listcases"></a> `listCases()` | (`_params?`: [`IListCasesParams`](../interfaces/IListCasesParams)) => `Promise`\<[`IListCasesResponse`](../interfaces/IListCasesResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:100](packages/codeboltjs/src/modules/autoTesting.ts#L100) |
| <a id="listruns"></a> `listRuns()` | (`params?`: [`IListRunsParams`](../interfaces/IListRunsParams)) => `Promise`\<[`IListRunsResponse`](../interfaces/IListRunsResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:131](packages/codeboltjs/src/modules/autoTesting.ts#L131) |
| <a id="listsuites"></a> `listSuites()` | (`_params?`: [`IListSuitesParams`](../interfaces/IListSuitesParams)) => `Promise`\<[`IListSuitesResponse`](../interfaces/IListSuitesResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:57](packages/codeboltjs/src/modules/autoTesting.ts#L57) |
| <a id="removecasefromsuite"></a> `removeCaseFromSuite()` | (`params`: [`IRemoveCaseFromSuiteParams`](../interfaces/IRemoveCaseFromSuiteParams)) => `Promise`\<[`IRemoveCaseFromSuiteResponse`](../interfaces/IRemoveCaseFromSuiteResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:81](packages/codeboltjs/src/modules/autoTesting.ts#L81) |
| <a id="updatecase"></a> `updateCase()` | (`params`: [`IUpdateCaseParams`](../interfaces/IUpdateCaseParams)) => `Promise`\<[`IUpdateCaseResponse`](../interfaces/IUpdateCaseResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:106](packages/codeboltjs/src/modules/autoTesting.ts#L106) |
| <a id="updateruncasestatus"></a> `updateRunCaseStatus()` | (`params`: [`IUpdateRunCaseParams`](../interfaces/IUpdateRunCaseParams)) => `Promise`\<[`IUpdateRunCaseResponse`](../interfaces/IUpdateRunCaseResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:143](packages/codeboltjs/src/modules/autoTesting.ts#L143) |
| <a id="updaterunstatus"></a> `updateRunStatus()` | (`params`: [`IUpdateRunStatusParams`](../interfaces/IUpdateRunStatusParams)) => `Promise`\<[`IUpdateRunStatusResponse`](../interfaces/IUpdateRunStatusResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:137](packages/codeboltjs/src/modules/autoTesting.ts#L137) |
| <a id="updaterunstepstatus"></a> `updateRunStepStatus()` | (`params`: [`IUpdateRunStepParams`](../interfaces/IUpdateRunStepParams)) => `Promise`\<[`IUpdateRunStepResponse`](../interfaces/IUpdateRunStepResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:149](packages/codeboltjs/src/modules/autoTesting.ts#L149) |
| <a id="updatesuite"></a> `updateSuite()` | (`params`: [`IUpdateSuiteParams`](../interfaces/IUpdateSuiteParams)) => `Promise`\<[`IUpdateSuiteResponse`](../interfaces/IUpdateSuiteResponse)\> | [packages/codeboltjs/src/modules/autoTesting.ts:63](packages/codeboltjs/src/modules/autoTesting.ts#L63) |
