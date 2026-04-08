---
title: ActionPlanGroup
---

[**@codebolt/types**](../index)

***

# Interface: ActionPlanGroup

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:45

Action plan group structure

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="condition"></a> `condition?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:52](common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts#L52) |
| <a id="groupitems"></a> `groupItems?` | `Record`\<`string`, [`ActionPlanTask`](ActionPlanTask)[]\> | [common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:48](common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts#L48) |
| <a id="iftasks"></a> `ifTasks?` | [`ActionPlanTask`](ActionPlanTask)[] | [common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:50](common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts#L50) |
| <a id="looptasks"></a> `loopTasks?` | [`ActionPlanTask`](ActionPlanTask)[] | [common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:49](common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts#L49) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | [common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:53](common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts#L53) |
| <a id="name"></a> `name?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:47](common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts#L47) |
| <a id="type"></a> `type` | [`ActionPlanGroupType`](../type-aliases/ActionPlanGroupType) | [common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:46](common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts#L46) |
| <a id="waittasks"></a> `waitTasks?` | [`ActionPlanTask`](ActionPlanTask)[] | [common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts:51](common/types/src/codeboltjstypes/libFunctionTypes/actionPlan.ts#L51) |
