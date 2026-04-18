---
cbapicategory:
  - name: getModelConfig
    link: /docs/reference/plugin-sdk/api-reference/llm/getModelConfig
    description: "Gets the model configuration for a specific model or the default application model.
If modelId is provided, returns configuration for that specific model.
If modelId is not provided, returns the default application LLM configuration."
  - name: inference
    link: /docs/reference/plugin-sdk/api-reference/llm/inference
    description: "Sends an inference request to the LLM using OpenAI message format with tools support.
The model is selected based on the provided `llmrole`. If the specific model
for the role is not found, it falls back to the default model for the current agent,
and ultimately to the default application-wide LLM if necessary."
---
# Llm API

The `llm` module of the Plugin SDK.

<CBAPICategory />

## Methods

- [`getModelConfig()`](./getModelConfig) — Gets the model configuration for a specific model or the default application model.
If modelId is provided, returns configuration for that specific model.
If modelId is not provided, returns the default application LLM configuration.
- [`inference()`](./inference) — Sends an inference request to the LLM using OpenAI message format with tools support.
The model is selected based on the provided `llmrole`. If the specific model
for the role is not found, it falls back to the default model for the current agent,
and ultimately to the default application-wide LLM if necessary.
