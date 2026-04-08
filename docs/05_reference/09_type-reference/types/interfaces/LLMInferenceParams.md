---
title: LLMInferenceParams
---

[**@codebolt/types**](../index)

***

# Interface: LLMInferenceParams

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:87

LLM inference request parameters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="full"></a> `full?` | `boolean` | Whether to return full response | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:95](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L95) |
| <a id="llmrole"></a> `llmrole?` | `string` | The LLM role to determine which model to use | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:97](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L97) |
| <a id="max_tokens"></a> `max_tokens?` | `number` | Maximum number of tokens to generate | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:99](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L99) |
| <a id="messages"></a> `messages` | [`MessageObject`](MessageObject)[] | Array of messages in the conversation | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:89](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L89) |
| <a id="stream"></a> `stream?` | `boolean` | Whether to stream the response | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:103](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L103) |
| <a id="temperature"></a> `temperature?` | `number` | Temperature for response generation | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:101](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L101) |
| <a id="tool_choice"></a> `tool_choice?` | [`ToolChoice`](../type-aliases/ToolChoice) | How the model should use tools | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:93](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L93) |
| <a id="tools"></a> `tools?` | [`Tool`](Tool)[] | Available tools for the model to use | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:91](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L91) |
