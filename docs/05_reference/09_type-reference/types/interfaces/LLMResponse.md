---
title: LLMResponse
---

[**@codebolt/types**](../index.md)

***

# Interface: LLMResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:157

LLM response interface

## Extends

- [`BaseLLMSDKResponse`](BaseLLMSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="choices"></a> `choices?` | [`LLMChoice`](LLMChoice)[] | - | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:163 |
| <a id="content"></a> `content` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:158 |
| <a id="error"></a> `error?` | `string` | [`BaseLLMSDKResponse`](BaseLLMSDKResponse).[`error`](BaseLLMSDKResponse.md#error) | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:116 |
| <a id="finish_reason"></a> `finish_reason?` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:162 |
| <a id="message"></a> `message?` | `string` | [`BaseLLMSDKResponse`](BaseLLMSDKResponse).[`message`](BaseLLMSDKResponse.md#message) | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:115 |
| <a id="model"></a> `model?` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:160 |
| <a id="role"></a> `role` | `"assistant"` | - | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:159 |
| <a id="success"></a> `success?` | `boolean` | [`BaseLLMSDKResponse`](BaseLLMSDKResponse).[`success`](BaseLLMSDKResponse.md#success) | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:114 |
| <a id="tool_calls"></a> `tool_calls?` | [`ToolCall`](ToolCall)[] | - | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:164 |
| <a id="usage"></a> `usage?` | [`TokenUsage`](TokenUsage) | - | common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:161 |
