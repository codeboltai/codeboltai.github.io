---
title: LLMChoice
---

[**@codebolt/types**](../index)

***

# Interface: LLMChoice

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:131

Choice in LLM response

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="finish_reason"></a> `finish_reason` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:137](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L137) |
| <a id="index"></a> `index?` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:138](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L138) |
| <a id="message"></a> `message` | \{ `content`: `string`; `role`: `string`; `tool_calls?`: [`ToolCall`](ToolCall)[]; \} | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:132](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L132) |
| `message.content` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:134](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L134) |
| `message.role` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:133](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L133) |
| `message.tool_calls?` | [`ToolCall`](ToolCall)[] | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:135](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L135) |
