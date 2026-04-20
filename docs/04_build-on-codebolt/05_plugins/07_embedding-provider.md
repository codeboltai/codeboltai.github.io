---
sidebar_position: 7
title: Custom Embedding Provider
---

# Custom Embedding Provider

An embedding provider turns text into vectors. CodeBolt uses embeddings for the memory ingestion pipeline, vector search, and knowledge graph enrichment.

## How Embeddings Work in CodeBolt

The `llmService` handles embedding requests through a unified interface:

1. **Local embeddings** — via ONNX models downloaded and managed by `localModelService`
2. **Cloud embeddings** — via configured providers (OpenAI, etc.) using the `Multillm` library
3. **Plugin embeddings** — via custom LLM provider plugins that also support embeddings

The embedding configuration is determined by the user's settings:
- `embeddingProvider` — which provider to use (defaults to the main LLM provider)
- `embeddingModel` — which model (defaults to `text-embedding-ada-002`)

## Approach 1: Bundle with LLM Provider Plugin

The simplest way to add custom embeddings is to include embedding support in your LLM provider plugin. When a plugin registers as an LLM provider, it can include embedding-capable models in its manifest:

```ts
import plugin from '@codebolt/plugin-sdk';

plugin.onStart(async () => {
  await plugin.llmProvider.register({
    providerId: 'my-provider',
    name: 'My Provider',
    models: [
      // Chat models
      { id: 'my-chat-model', name: 'Chat Model', capabilities: ['streaming'] },
      // Embedding models
      { id: 'my-embed-model', name: 'Embedding Model', capabilities: ['embedding'] }
    ],
    capabilities: ['streaming', 'embedding'],
    description: 'Provider with chat and embedding support'
  });

  // Handle embedding requests (sent as completion requests with embedding format)
  plugin.llmProvider.onCompletionRequest(async (request) => {
    if (request.options.input) {
      // This is an embedding request
      const embeddings = await generateEmbeddings(request.options.input);
      plugin.llmProvider.sendReply(request.requestId, {
        data: embeddings.map((emb, i) => ({ embedding: emb, index: i })),
        usage: { prompt_tokens: 0, total_tokens: 0 }
      }, true);
    } else {
      // Regular chat completion
      // ...
    }
  });
});
```

## Approach 2: Standalone Embedding Service

For specialized embedding services (e.g., domain-specific models, local GPU inference):

```ts
import plugin from '@codebolt/plugin-sdk';

plugin.onStart(async () => {
  await plugin.llmProvider.register({
    providerId: 'my-embeddings',
    name: 'My Embedding Service',
    models: [
      {
        id: 'domain-embed-v1',
        name: 'Domain Embeddings v1',
        capabilities: ['embedding']
      },
      {
        id: 'domain-embed-v2',
        name: 'Domain Embeddings v2 (1024d)',
        capabilities: ['embedding']
      }
    ],
    capabilities: ['embedding'],
    description: 'Specialized domain embedding models',
    requiresKey: true,
    configFields: [
      { key: 'apiKey', label: 'API Key', type: 'password', required: true },
      { key: 'endpoint', label: 'Endpoint URL', type: 'url', placeholder: 'http://localhost:8080' }
    ]
  });

  plugin.llmProvider.onCompletionRequest(async (request) => {
    const { input, model } = request.options;
    const endpoint = request.options.providerConfig?.endpoint || 'http://localhost:8080';
    const apiKey = request.options.providerConfig?.apiKey;

    const response = await fetch(`${endpoint}/embeddings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({ input, model })
    });

    const result = await response.json();
    plugin.llmProvider.sendReply(request.requestId, result, true);
  });
});

plugin.onStop(async () => {
  await plugin.llmProvider.unregister('my-embeddings');
});
```

## Configuration

Users select the embedding provider in Settings:

1. Go to **Settings > LLM Configuration**
2. Set **Embedding Provider** to your plugin's provider name
3. Set **Embedding Model** to one of your declared model IDs
4. Fill in any required config fields (API key, endpoint, etc.)

## Local Embedding Models

CodeBolt has built-in support for local ONNX-based embedding models via `localModelService`. These don't require a plugin — they're managed through the Settings UI:

- Download models from the model gallery
- Models run locally via ONNX Runtime
- No API key required
- Set `embeddingProvider: "local"` in config

Custom plugins are for when you need embeddings from a source not covered by the built-in local models or cloud providers.

## Response Format

Embedding responses should follow the OpenAI embedding format:

```json
{
  "data": [
    { "embedding": [0.1, 0.2, ...], "index": 0 },
    { "embedding": [0.3, 0.4, ...], "index": 1 }
  ],
  "usage": {
    "prompt_tokens": 10,
    "total_tokens": 10
  }
}
```

## Plugin Manifest

```json
{
  "name": "my-embedding-plugin",
  "version": "1.0.0",
  "main": "dist/index.js",
  "codebolt": {
    "plugin": {
      "type": "llmProvider",
      "triggers": [{ "type": "startup" }]
    }
  },
  "dependencies": {
    "@codebolt/plugin-sdk": "*"
  }
}
```

## See Also

- [Custom LLM Provider](./06_llm-provider.md)
- [Plugins Overview](./01_overview.md)
- [Gateway, Execution, and LLM Provider Patterns](./04_major-patterns.md)
