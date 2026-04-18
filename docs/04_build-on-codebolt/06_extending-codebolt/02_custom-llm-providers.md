---
sidebar_position: 2
title: Custom LLM Providers
---

# Custom LLM Providers

Add any LLM backend — local inference, a private API, a fine-tuned model, or a provider Codebolt doesn't ship with — and make it available as a first-class model choice across the entire application.

## When to write a custom LLM provider

- You're running a local model (Ollama, llama.cpp, vLLM) and want agents to use it without leaving Codebolt.
- Your organisation has a private Azure OpenAI deployment or an on-prem API endpoint.
- You've fine-tuned a model and want it selectable alongside built-in models.
- You need a provider with non-standard auth, routing, or rate-limiting logic.

## How it works

A custom LLM provider is a plugin that implements the `LLMProvider` interface and registers itself via `contributes.llmProviders`. Once registered, the model appears in the model picker everywhere: agent manifests, the chat panel, optimization runs.

```ts
// src/my-provider.ts
import { defineLLMProvider, type LLMProvider } from '@codebolt/plugin-sdk';

export const provider: LLMProvider = defineLLMProvider({
  id: 'my-org/my-model',
  label: 'My Private Model',
  contextWindow: 32768,

  async chat(request) {
    const res = await fetch('https://my-internal-api/v1/chat', {
      method: 'POST',
      headers: { Authorization: `Bearer ${this.config.apiKey}` },
      body: JSON.stringify({
        model: this.config.modelId,
        messages: request.messages,
        stream: request.stream,
      }),
    });
    return this.parseOpenAICompatibleResponse(res);
  },
});
```

Register in the plugin manifest:

```yaml
# plugin.yaml
contributes:
  llmProviders:
    - id: my-org/my-model
      label: My Private Model
      configSchema:
        apiKey:
          type: string
          secret: true
        modelId:
          type: string
          default: "my-model-v1"
```

## Embedding providers

The same pattern applies for embedding models. Implement `EmbeddingProvider` and declare under `contributes.embeddingProviders`. Used by the memory system and any agent that calls `ctx.memory.embed()`.

## See also

- [Plugin SDK — Provider interfaces](../05_plugins/01_overview.md)
- [LLM Provider reference](../05_plugins/06_llm-provider.md)
- [Embedding Provider reference](../05_plugins/07_embedding-provider.md)
