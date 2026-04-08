---
title: agent
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: agent

```ts
const agent: {
  findAgent: (task: string, maxResult: number, agents: never[], agentLocaltion: AgentLocation, getFrom: USE_VECTOR_DB) => Promise<FindAgentByTaskResponse>;
  getAgentsDetail: (agentList?: string[]) => Promise<AgentsDetailResponse>;
  getAgentsList: (type: Agents) => Promise<ListAgentsResponse>;
  startAgent: (agentId: string, task: string) => Promise<TaskCompletionResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/agent.ts:7

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="findagent"></a> `findAgent()` | (`task`: `string`, `maxResult`: `number`, `agents`: `never`[], `agentLocaltion`: `AgentLocation`, `getFrom`: `USE_VECTOR_DB`) => `Promise`\<`FindAgentByTaskResponse`\> | Retrieves an agent based on the specified task. | [packages/codeboltjs/src/modules/agent.ts:13](packages/codeboltjs/src/modules/agent.ts#L13) |
| <a id="getagentsdetail"></a> `getAgentsDetail()` | (`agentList?`: `string`[]) => `Promise`\<`AgentsDetailResponse`\> | Lists all available agents. | [packages/codeboltjs/src/modules/agent.ts:64](packages/codeboltjs/src/modules/agent.ts#L64) |
| <a id="getagentslist"></a> `getAgentsList()` | (`type`: `Agents`) => `Promise`\<`ListAgentsResponse`\> | Lists all available agents. | [packages/codeboltjs/src/modules/agent.ts:49](packages/codeboltjs/src/modules/agent.ts#L49) |
| <a id="startagent"></a> `startAgent()` | (`agentId`: `string`, `task`: `string`) => `Promise`\<`TaskCompletionResponse`\> | Starts an agent for the specified task. | [packages/codeboltjs/src/modules/agent.ts:33](packages/codeboltjs/src/modules/agent.ts#L33) |
