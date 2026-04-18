---
title: LLMInferenceParams
---

[**@codebolt/codeboltjs**](../index.md)

***

# Interface: LLMInferenceParams

Defined in: packages/codeboltjs/src/types/libFunctionTypes.ts:133

LLM inference request parameters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="llmrole"></a> `llmrole` | `string` | The LLM role to determine which model to use | packages/codeboltjs/src/types/libFunctionTypes.ts:141 |
| <a id="max_tokens"></a> `max_tokens?` | `number` | Maximum number of tokens to generate | packages/codeboltjs/src/types/libFunctionTypes.ts:143 |
| <a id="messages"></a> `messages` | [`Message`](Message)[] | Array of messages in the conversation | packages/codeboltjs/src/types/libFunctionTypes.ts:135 |
| <a id="stream"></a> `stream?` | `boolean` | Whether to stream the response | packages/codeboltjs/src/types/libFunctionTypes.ts:147 |
| <a id="temperature"></a> `temperature?` | `number` | Temperature for response generation | packages/codeboltjs/src/types/libFunctionTypes.ts:145 |
| <a id="tool_choice"></a> `tool_choice?` | \| \{ `function`: \{ `name`: `string`; \}; `type`: `"function"`; \} \| `"auto"` \| `"none"` \| `"required"` | How the model should use tools | packages/codeboltjs/src/types/libFunctionTypes.ts:139 |
| <a id="tools"></a> `tools?` | [`Tool`](Tool)[] | Available tools for the model to use | packages/codeboltjs/src/types/libFunctionTypes.ts:137 |
