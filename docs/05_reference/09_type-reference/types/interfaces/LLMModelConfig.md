---
title: LLMModelConfig
---

[**@codebolt/types**](../index)

***

# Interface: LLMModelConfig

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:177

LLM model configuration interface matching the actual response structure

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="cached_token"></a> `cached_token` | `string` | Cached token information | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:191](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L191) |
| <a id="datetime"></a> `datetime` | `string` | Configuration datetime | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:185](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L185) |
| <a id="input_cost_per_token"></a> `input_cost_per_token` | `number` | Cost per input token | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:193](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L193) |
| <a id="litellm_provider"></a> `litellm_provider` | `string` | LiteLLM provider name | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:197](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L197) |
| <a id="llm_id"></a> `llm_id` | `string` | Unique LLM identifier | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:179](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L179) |
| <a id="max_input_tokens"></a> `max_input_tokens` | `number` | Maximum input tokens | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:209](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L209) |
| <a id="max_output_tokens"></a> `max_output_tokens` | `number` | Maximum output tokens | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:189](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L189) |
| <a id="max_tokens"></a> `max_tokens` | `number` | Maximum tokens for input | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:187](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L187) |
| <a id="mode"></a> `mode` | `string` | Model mode (e.g., 'chat') | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:199](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L199) |
| <a id="model_name"></a> `model_name` | `string` | Actual model name | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:183](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L183) |
| <a id="output_cost_per_token"></a> `output_cost_per_token` | `number` | Cost per output token | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:195](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L195) |
| <a id="source"></a> `source` | `string` | Model source | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:207](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L207) |
| <a id="supports_function_calling"></a> `supports_function_calling` | `number` | Whether model supports function calling | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:201](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L201) |
| <a id="supports_parallel_function_calling"></a> `supports_parallel_function_calling` | `number` | Whether model supports parallel function calling | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:203](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L203) |
| <a id="supports_vision"></a> `supports_vision` | `number` | Whether model supports vision | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:205](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L205) |
| <a id="user_model_name"></a> `user_model_name` | `string` | User-defined model name | [common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:181](common/types/src/codeboltjstypes/libFunctionTypes/llm.ts#L181) |
