---
title: LLMInferenceParams
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: LLMInferenceParams

Defined in: packages/codeboltjs/src/types/libFunctionTypes.ts:133

LLM inference request parameters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="llmrole"></a> `llmrole` | `string` | The LLM role to determine which model to use | [packages/codeboltjs/src/types/libFunctionTypes.ts:141](packages/codeboltjs/src/types/libFunctionTypes.ts#L141) |
| <a id="max_tokens"></a> `max_tokens?` | `number` | Maximum number of tokens to generate | [packages/codeboltjs/src/types/libFunctionTypes.ts:143](packages/codeboltjs/src/types/libFunctionTypes.ts#L143) |
| <a id="messages"></a> `messages` | [`Message`](Message)[] | Array of messages in the conversation | [packages/codeboltjs/src/types/libFunctionTypes.ts:135](packages/codeboltjs/src/types/libFunctionTypes.ts#L135) |
| <a id="stream"></a> `stream?` | `boolean` | Whether to stream the response | [packages/codeboltjs/src/types/libFunctionTypes.ts:147](packages/codeboltjs/src/types/libFunctionTypes.ts#L147) |
| <a id="temperature"></a> `temperature?` | `number` | Temperature for response generation | [packages/codeboltjs/src/types/libFunctionTypes.ts:145](packages/codeboltjs/src/types/libFunctionTypes.ts#L145) |
| <a id="tool_choice"></a> `tool_choice?` | \| \{ `function`: \{ `name`: `string`; \}; `type`: `"function"`; \} \| `"auto"` \| `"none"` \| `"required"` | How the model should use tools | [packages/codeboltjs/src/types/libFunctionTypes.ts:139](packages/codeboltjs/src/types/libFunctionTypes.ts#L139) |
| <a id="tools"></a> `tools?` | [`Tool`](Tool)[] | Available tools for the model to use | [packages/codeboltjs/src/types/libFunctionTypes.ts:137](packages/codeboltjs/src/types/libFunctionTypes.ts#L137) |
