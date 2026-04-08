---
title: contextRuleEngine
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: contextRuleEngine

```ts
const contextRuleEngine: {
  create: (config: CreateContextRuleEngineParams) => Promise<ContextRuleEngineResponse>;
  delete: (id: string) => Promise<ContextRuleEngineDeleteResponse>;
  evaluate: (params: EvaluateRulesParams) => Promise<EvaluateRulesResponse>;
  get: (id: string) => Promise<ContextRuleEngineResponse>;
  getPossibleVariables: () => Promise<PossibleVariablesResponse>;
  list: () => Promise<ContextRuleEngineListResponse>;
  update: (id: string, updates: UpdateContextRuleEngineParams) => Promise<ContextRuleEngineResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/contextRuleEngine.ts:19

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="create"></a> `create()` | (`config`: [`CreateContextRuleEngineParams`](../interfaces/CreateContextRuleEngineParams)) => `Promise`\<[`ContextRuleEngineResponse`](../interfaces/ContextRuleEngineResponse)\> | Create a new rule engine | [packages/codeboltjs/src/modules/contextRuleEngine.ts:24](packages/codeboltjs/src/modules/contextRuleEngine.ts#L24) |
| <a id="delete"></a> `delete()` | (`id`: `string`) => `Promise`\<[`ContextRuleEngineDeleteResponse`](../interfaces/ContextRuleEngineDeleteResponse)\> | Delete a rule engine | [packages/codeboltjs/src/modules/contextRuleEngine.ts:84](packages/codeboltjs/src/modules/contextRuleEngine.ts#L84) |
| <a id="evaluate"></a> `evaluate()` | (`params`: [`EvaluateRulesParams`](../interfaces/EvaluateRulesParams)) => `Promise`\<[`EvaluateRulesResponse`](../interfaces/EvaluateRulesResponse)\> | Evaluate rules against provided variables | [packages/codeboltjs/src/modules/contextRuleEngine.ts:99](packages/codeboltjs/src/modules/contextRuleEngine.ts#L99) |
| <a id="get"></a> `get()` | (`id`: `string`) => `Promise`\<[`ContextRuleEngineResponse`](../interfaces/ContextRuleEngineResponse)\> | Get a rule engine by ID | [packages/codeboltjs/src/modules/contextRuleEngine.ts:39](packages/codeboltjs/src/modules/contextRuleEngine.ts#L39) |
| <a id="getpossiblevariables"></a> `getPossibleVariables()` | () => `Promise`\<[`PossibleVariablesResponse`](../interfaces/PossibleVariablesResponse)\> | Get all possible variables for UI configuration | [packages/codeboltjs/src/modules/contextRuleEngine.ts:113](packages/codeboltjs/src/modules/contextRuleEngine.ts#L113) |
| <a id="list"></a> `list()` | () => `Promise`\<[`ContextRuleEngineListResponse`](../interfaces/ContextRuleEngineListResponse)\> | List all rule engines | [packages/codeboltjs/src/modules/contextRuleEngine.ts:53](packages/codeboltjs/src/modules/contextRuleEngine.ts#L53) |
| <a id="update"></a> `update()` | (`id`: `string`, `updates`: [`UpdateContextRuleEngineParams`](../interfaces/UpdateContextRuleEngineParams)) => `Promise`\<[`ContextRuleEngineResponse`](../interfaces/ContextRuleEngineResponse)\> | Update a rule engine | [packages/codeboltjs/src/modules/contextRuleEngine.ts:69](packages/codeboltjs/src/modules/contextRuleEngine.ts#L69) |
