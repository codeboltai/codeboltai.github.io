---
title: inference
---

# `inference`

```typescript
plugin.llm.inference(params: LLMInferenceParams): Promise<object>
```

Sends an inference request to the LLM using OpenAI message format with tools support.
The model is selected based on the provided `llmrole`. If the specific model
for the role is not found, it falls back to the default model for the current agent,
and ultimately to the default application-wide LLM if necessary.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `LLMInferenceParams` | Yes | The inference parameters including:
  - messages: Array of conversation messages
  - tools: Available tools for the model to use
  - tool_choice: How the model should use tools
  - full: Whether to return full response
  - max_tokens: Maximum number of tokens to generate
  - temperature: Temperature for response generation
  - stream: Whether to stream the response |

## Returns

`Promise<object>` — A promise that resolves with the LLM's response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.llm.inference(/* LLMInferenceParams */);
console.log(result);
```
