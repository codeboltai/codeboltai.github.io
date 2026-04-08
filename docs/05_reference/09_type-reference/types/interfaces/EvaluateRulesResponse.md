---
title: EvaluateRulesResponse
---

[**@codebolt/types**](../index)

***

# Interface: EvaluateRulesResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:106

Context Rule Engine Types
Type definitions for context rule engine operations

## Extends

- [`ContextRuleEngineBaseResponse`](ContextRuleEngineBaseResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `excluded_memories`: `string`[]; `forced_memories`: `string`[]; `included_memories`: `string`[]; `matched_rules`: `string`[]; \} | [`ContextRuleEngineBaseResponse`](ContextRuleEngineBaseResponse).[`data`](ContextRuleEngineBaseResponse.md#data) | - | [common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:107](common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts#L107) |
| `data.excluded_memories` | `string`[] | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:109](common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts#L109) |
| `data.forced_memories` | `string`[] | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:111](common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts#L111) |
| `data.included_memories` | `string`[] | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:110](common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts#L110) |
| `data.matched_rules` | `string`[] | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:108](common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts#L108) |
| <a id="error"></a> `error?` | `string` | - | [`ContextRuleEngineBaseResponse`](ContextRuleEngineBaseResponse).[`error`](ContextRuleEngineBaseResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:11](common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts#L11) |
| <a id="message"></a> `message?` | `string` | - | [`ContextRuleEngineBaseResponse`](ContextRuleEngineBaseResponse).[`message`](ContextRuleEngineBaseResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts#L10) |
| <a id="requestid"></a> `requestId` | `string` | - | [`ContextRuleEngineBaseResponse`](ContextRuleEngineBaseResponse).[`requestId`](ContextRuleEngineBaseResponse.md#requestid) | [common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:13](common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts#L13) |
| <a id="success"></a> `success` | `boolean` | - | [`ContextRuleEngineBaseResponse`](ContextRuleEngineBaseResponse).[`success`](ContextRuleEngineBaseResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts#L8) |
| <a id="timestamp"></a> `timestamp` | `string` | - | [`ContextRuleEngineBaseResponse`](ContextRuleEngineBaseResponse).[`timestamp`](ContextRuleEngineBaseResponse.md#timestamp) | [common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:12](common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts#L12) |
| <a id="type"></a> `type` | `string` | - | [`ContextRuleEngineBaseResponse`](ContextRuleEngineBaseResponse).[`type`](ContextRuleEngineBaseResponse.md#type) | [common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts:7](common/types/src/codeboltjstypes/libFunctionTypes/contextRuleEngine.ts#L7) |
