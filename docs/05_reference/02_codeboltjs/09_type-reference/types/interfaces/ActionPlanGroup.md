---
title: ActionPlanGroup
---

[**@codebolt/types**](../index.md)

***

# Interface: ActionPlanGroup

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:45

Action plan group structure

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="condition"></a> `condition?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:52 |
| <a id="groupitems"></a> `groupItems?` | `Record`\<`string`, [`ActionPlanTask`](ActionPlanTask)[]\> | common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:48 |
| <a id="iftasks"></a> `ifTasks?` | [`ActionPlanTask`](ActionPlanTask)[] | common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:50 |
| <a id="looptasks"></a> `loopTasks?` | [`ActionPlanTask`](ActionPlanTask)[] | common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:49 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:53 |
| <a id="name"></a> `name?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:47 |
| <a id="type"></a> `type` | [`ActionPlanGroupType`](../type-aliases/ActionPlanGroupType) | common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:46 |
| <a id="waittasks"></a> `waitTasks?` | [`ActionPlanTask`](ActionPlanTask)[] | common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:51 |
