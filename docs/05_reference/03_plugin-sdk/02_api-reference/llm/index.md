---
title: Llm API
---

# Llm API

The `llm` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`getModelConfig`](./getModelConfig) | Gets the model configuration for a specific model or the default application model. |
| [`inference`](./inference) | Sends an inference request to the LLM using OpenAI message format with tools support. |

## Methods

---

### `getModelConfig`

```typescript
plugin.llm.getModelConfig(modelId?: string): Promise<object>
```

Gets the model configuration for a specific model or the default application model.
If modelId is provided, returns configuration for that specific model.
If modelId is not provided, returns the default application LLM configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `modelId` | `string` | No | Optional model identifier. If not provided, returns default model config. |

**Returns:** `Promise<object>` — A promise that resolves with the model configuration including provider and model details.

[Full reference →](./getModelConfig)

---

### `inference`

```typescript
plugin.llm.inference(params: LLMInferenceParams): Promise<object>
```

Sends an inference request to the LLM using OpenAI message format with tools support.
The model is selected based on the provided `llmrole`. If the specific model
for the role is not found, it falls back to the default model for the current agent,
and ultimately to the default application-wide LLM if necessary.

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

**Returns:** `Promise<object>` — A promise that resolves with the LLM's response

[Full reference →](./inference)

