---
title: LLMChoice
---

[**@codebolt/types**](../index.md)

***

# Interface: LLMChoice

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:131

Choice in LLM response

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="finish_reason"></a> `finish_reason` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:137 |
| <a id="index"></a> `index?` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:138 |
| <a id="message"></a> `message` | \{ `content`: `string`; `role`: `string`; `tool_calls?`: [`ToolCall`](ToolCall)[]; \} | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:132 |
| `message.content` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:134 |
| `message.role` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:133 |
| `message.tool_calls?` | [`ToolCall`](ToolCall)[] | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:135 |
