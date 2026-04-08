---
title: Rule
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: Rule

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/contextRuleEngine.d.ts:21

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="action"></a> `action` | [`RuleAction`](../type-aliases/RuleAction) | common/types/dist/codeboltjstypes/libFunctionTypes/contextRuleEngine.d.ts:27 |
| <a id="action_config"></a> `action_config?` | \{ `memory_ids?`: `string`[]; `priority?`: `number`; \} | common/types/dist/codeboltjstypes/libFunctionTypes/contextRuleEngine.d.ts:28 |
| `action_config.memory_ids?` | `string`[] | common/types/dist/codeboltjstypes/libFunctionTypes/contextRuleEngine.d.ts:29 |
| `action_config.priority?` | `number` | common/types/dist/codeboltjstypes/libFunctionTypes/contextRuleEngine.d.ts:30 |
| <a id="condition_logic"></a> `condition_logic?` | `"and"` \| `"or"` | common/types/dist/codeboltjstypes/libFunctionTypes/contextRuleEngine.d.ts:26 |
| <a id="conditions"></a> `conditions` | [`RuleCondition`](RuleCondition)[] | common/types/dist/codeboltjstypes/libFunctionTypes/contextRuleEngine.d.ts:25 |
| <a id="description"></a> `description?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/contextRuleEngine.d.ts:24 |
| <a id="enabled"></a> `enabled?` | `boolean` | common/types/dist/codeboltjstypes/libFunctionTypes/contextRuleEngine.d.ts:32 |
| <a id="id"></a> `id?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/contextRuleEngine.d.ts:22 |
| <a id="name"></a> `name` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/contextRuleEngine.d.ts:23 |
| <a id="order"></a> `order?` | `number` | common/types/dist/codeboltjstypes/libFunctionTypes/contextRuleEngine.d.ts:33 |
