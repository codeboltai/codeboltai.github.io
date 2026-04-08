---
title: LLMResponse
---

[**@codebolt/types**](../index)

***

# Interface: LLMResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:157

LLM response interface

## Extends

- [`BaseLLMSDKResponse`](BaseLLMSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="choices"></a> `choices?` | [`LLMChoice`](LLMChoice)[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:163](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L163) |
| <a id="content"></a> `content` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:158](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L158) |
| <a id="error"></a> `error?` | `string` | [`BaseLLMSDKResponse`](BaseLLMSDKResponse).[`error`](BaseLLMSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:116](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L116) |
| <a id="finish_reason"></a> `finish_reason?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:162](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L162) |
| <a id="message"></a> `message?` | `string` | [`BaseLLMSDKResponse`](BaseLLMSDKResponse).[`message`](BaseLLMSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:115](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L115) |
| <a id="model"></a> `model?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:160](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L160) |
| <a id="role"></a> `role` | `"assistant"` | - | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:159](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L159) |
| <a id="success"></a> `success?` | `boolean` | [`BaseLLMSDKResponse`](BaseLLMSDKResponse).[`success`](BaseLLMSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:114](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L114) |
| <a id="tool_calls"></a> `tool_calls?` | [`ToolCall`](ToolCall)[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:164](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L164) |
| <a id="usage"></a> `usage?` | [`TokenUsage`](TokenUsage) | - | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:161](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L161) |
