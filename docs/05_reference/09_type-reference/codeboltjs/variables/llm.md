---
title: llm
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: llm

```ts
const llm: {
  getModelConfig: (modelId?: string) => Promise<{
     config: LLMModelConfig | null;
     error?: string;
     success: boolean;
  }>;
  inference: (params: LLMInferenceParams) => Promise<{
     completion: LLMCompletion;
  }>;
};
```

Defined in: packages/codeboltjs/src/modules/llm.ts:11

A module for interacting with language learning models (LLMs) via WebSocket.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="getmodelconfig"></a> `getModelConfig()` | (`modelId?`: `string`) => `Promise`\<\{ `config`: `LLMModelConfig` \| `null`; `error?`: `string`; `success`: `boolean`; \}\> | Gets the model configuration for a specific model or the default application model. If modelId is provided, returns configuration for that specific model. If modelId is not provided, returns the default application LLM configuration. | [packages/codeboltjs/src/modules/llm.ts:51](packages/codeboltjs/src/modules/llm.ts#L51) |
| <a id="inference"></a> `inference()` | (`params`: `LLMInferenceParams`) => `Promise`\<\{ `completion`: `LLMCompletion`; \}\> | Sends an inference request to the LLM using OpenAI message format with tools support. The model is selected based on the provided `llmrole`. If the specific model for the role is not found, it falls back to the default model for the current agent, and ultimately to the default application-wide LLM if necessary. | [packages/codeboltjs/src/modules/llm.ts:28](packages/codeboltjs/src/modules/llm.ts#L28) |
