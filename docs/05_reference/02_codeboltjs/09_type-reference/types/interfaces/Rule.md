---
title: Rule
---

[**@codebolt/types**](../index.md)

***

# Interface: Rule

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:37

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="action"></a> `action` | [`RuleAction`](../type-aliases/RuleAction) | common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:43 |
| <a id="action_config"></a> `action_config?` | \{ `memory_ids?`: `string`[]; `priority?`: `number`; \} | common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:44 |
| `action_config.memory_ids?` | `string`[] | common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:45 |
| `action_config.priority?` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:46 |
| <a id="condition_logic"></a> `condition_logic?` | `"and"` \| `"or"` | common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:42 |
| <a id="conditions"></a> `conditions` | [`RuleCondition`](RuleCondition)[] | common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:41 |
| <a id="description"></a> `description?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:40 |
| <a id="enabled"></a> `enabled?` | `boolean` | common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:48 |
| <a id="id"></a> `id?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:38 |
| <a id="name"></a> `name` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:39 |
| <a id="order"></a> `order?` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:49 |
