---
title: state
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: state

```ts
const state: {
  addToAgentState: (key: string, value: string) => Promise<AddToAgentStateResponse>;
  getAgentState: () => Promise<GetAgentStateResponse>;
  getApplicationState: () => Promise<ApplicationState>;
  getProjectState: () => Promise<GetProjectStateResponse>;
  updateProjectState: (key: string, value: any) => Promise<UpdateProjectStateResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/state.ts:8

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="addtoagentstate"></a> `addToAgentState()` | (`key`: `string`, `value`: `string`) => `Promise`\<`AddToAgentStateResponse`\> | Adds a key-value pair to the agent's state on the server via WebSocket. | [packages/codeboltjs/src/modules/state.ts:28](packages/codeboltjs/src/modules/state.ts#L28) |
| <a id="getagentstate"></a> `getAgentState()` | () => `Promise`\<`GetAgentStateResponse`\> | Retrieves the current state of the agent from the server via WebSocket. | [packages/codeboltjs/src/modules/state.ts:46](packages/codeboltjs/src/modules/state.ts#L46) |
| <a id="getapplicationstate"></a> `getApplicationState()` | () => `Promise`\<[`ApplicationState`](../interfaces/ApplicationState)\> | Retrieves the current application state from the server via WebSocket. | [packages/codeboltjs/src/modules/state.ts:13](packages/codeboltjs/src/modules/state.ts#L13) |
| <a id="getprojectstate"></a> `getProjectState()` | () => `Promise`\<`GetProjectStateResponse`\> | Retrieves the current project state from the server via WebSocket. | [packages/codeboltjs/src/modules/state.ts:62](packages/codeboltjs/src/modules/state.ts#L62) |
| <a id="updateprojectstate"></a> `updateProjectState()` | (`key`: `string`, `value`: `any`) => `Promise`\<`UpdateProjectStateResponse`\> | Updates the project state on the server via WebSocket. | [packages/codeboltjs/src/modules/state.ts:78](packages/codeboltjs/src/modules/state.ts#L78) |
