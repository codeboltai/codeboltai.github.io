---
title: LLMCompletion
---

[**@codebolt/types**](../index)

***

# Interface: LLMCompletion

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:144

LLM completion response

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="choices"></a> `choices?` | [`LLMChoice`](LLMChoice)[] | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:150](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L150) |
| <a id="content"></a> `content` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:145](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L145) |
| <a id="finish_reason"></a> `finish_reason?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:149](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L149) |
| <a id="model"></a> `model?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:147](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L147) |
| <a id="role"></a> `role` | `"assistant"` | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:146](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L146) |
| <a id="tool_calls"></a> `tool_calls?` | [`ToolCall`](ToolCall)[] | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:151](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L151) |
| <a id="usage"></a> `usage?` | [`TokenUsage`](TokenUsage) | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:148](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L148) |
