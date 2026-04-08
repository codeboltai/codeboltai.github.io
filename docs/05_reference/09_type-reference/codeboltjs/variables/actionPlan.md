---
title: actionPlan
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: actionPlan

```ts
const actionPlan: {
  addGroupToActionPlan: (planId: string, group: ActionPlanGroup) => Promise<any>;
  addTaskToActionPlan: (planId: string, task: ActionPlanTask) => Promise<any>;
  createActionPlan: (payload: {
     agentId?: string;
     agentName?: string;
     description?: string;
     name: string;
     planId?: string;
     status?: string;
  }) => Promise<any>;
  getActionPlanDetail: (planId: string) => Promise<any>;
  getAllPlans: () => Promise<any>;
  getPlanDetail: (planId: string) => Promise<any>;
  startTaskStep: (planId: string, taskId: string) => Promise<any>;
  startTaskStepWithListener: (planId: string, taskId: string, onResponse: (response: TaskStepResponse) => void) => () => void;
  updateActionPlan: (planId: string, updateData: ActionPlanUpdateData) => Promise<any>;
};
```

Defined in: packages/codeboltjs/src/modules/actionPlan.ts:19

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="addgrouptoactionplan"></a> `addGroupToActionPlan()` | (`planId`: `string`, `group`: `ActionPlanGroup`) => `Promise`\<`any`\> | Add a group to an action plan | [packages/codeboltjs/src/modules/actionPlan.ts:130](packages/codeboltjs/src/modules/actionPlan.ts#L130) |
| <a id="addtasktoactionplan"></a> `addTaskToActionPlan()` | (`planId`: `string`, `task`: `ActionPlanTask`) => `Promise`\<`any`\> | Add a task to an action plan | [packages/codeboltjs/src/modules/actionPlan.ts:113](packages/codeboltjs/src/modules/actionPlan.ts#L113) |
| <a id="createactionplan"></a> `createActionPlan()` | (`payload`: \{ `agentId?`: `string`; `agentName?`: `string`; `description?`: `string`; `name`: `string`; `planId?`: `string`; `status?`: `string`; \}) => `Promise`\<`any`\> | Create a new action plan | [packages/codeboltjs/src/modules/actionPlan.ts:72](packages/codeboltjs/src/modules/actionPlan.ts#L72) |
| <a id="getactionplandetail"></a> `getActionPlanDetail()` | (`planId`: `string`) => `Promise`\<`any`\> | Get action plan detail by ID (alternative method) | [packages/codeboltjs/src/modules/actionPlan.ts:56](packages/codeboltjs/src/modules/actionPlan.ts#L56) |
| <a id="getallplans"></a> `getAllPlans()` | () => `Promise`\<`any`\> | Get all action plans | [packages/codeboltjs/src/modules/actionPlan.ts:25](packages/codeboltjs/src/modules/actionPlan.ts#L25) |
| <a id="getplandetail"></a> `getPlanDetail()` | (`planId`: `string`) => `Promise`\<`any`\> | Get action plan detail by ID | [packages/codeboltjs/src/modules/actionPlan.ts:40](packages/codeboltjs/src/modules/actionPlan.ts#L40) |
| <a id="starttaskstep"></a> `startTaskStep()` | (`planId`: `string`, `taskId`: `string`) => `Promise`\<`any`\> | Start/execute a task step in an action plan | [packages/codeboltjs/src/modules/actionPlan.ts:147](packages/codeboltjs/src/modules/actionPlan.ts#L147) |
| <a id="starttaskstepwithlistener"></a> `startTaskStepWithListener()` | (`planId`: `string`, `taskId`: `string`, `onResponse`: (`response`: `TaskStepResponse`) => `void`) => () => `void` | Start/execute a task step in an action plan with event listener | [packages/codeboltjs/src/modules/actionPlan.ts:165](packages/codeboltjs/src/modules/actionPlan.ts#L165) |
| <a id="updateactionplan"></a> `updateActionPlan()` | (`planId`: `string`, `updateData`: `ActionPlanUpdateData`) => `Promise`\<`any`\> | Update an existing action plan | [packages/codeboltjs/src/modules/actionPlan.ts:96](packages/codeboltjs/src/modules/actionPlan.ts#L96) |
