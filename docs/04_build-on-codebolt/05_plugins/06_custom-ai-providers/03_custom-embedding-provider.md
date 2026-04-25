---
sidebar_position: 3
title: Custom Embedding Provider
description: An embedding provider turns text into vectors. CodeBolt uses embeddings for memory ingestion, vector search, and knowledge workflows.
---

# Custom Embedding Provider

An embedding provider turns text into vectors. CodeBolt uses embeddings for memory ingestion, vector search, and knowledge workflows.

## How Embeddings Work In CodeBolt

Embedding requests can come from:

1. **Local embeddings** via built-in local model support
2. **Cloud embeddings** via configured providers
3. **Plugin-based embeddings** via custom AI provider plugins

## Common Pattern: Bundle With LLM Provider

The simplest way to add embeddings is to include embedding-capable models in your LLM provider plugin:

```ts
import plugin from '@codebolt/plugin-sdk';

plugin.onStart(async () => {
  await plugin.llmProvider.register({
    providerId: 'my-provider',
    name: 'My Provider',
    models: [
      { id: 'my-chat-model', name: 'Chat Model', capabilities: ['streaming'] },
      { id: 'my-embed-model', name: 'Embedding Model', capabilities: ['embedding'] }
    ],
    capabilities: ['streaming', 'embedding'],
  });

  plugin.llmProvider.onCompletionRequest(async (request) => {
    if (request.options.input) {
      const embeddings = await generateEmbeddings(request.options.input);
      plugin.llmProvider.sendReply(request.requestId, {
        data: embeddings.map((embedding, index) => ({ embedding, index })),
        usage: { prompt_tokens: 0, total_tokens: 0 }
      }, true);
    }
  });
});
```

## Standalone Embedding Service Pattern

For specialized embedding systems:

```ts
import plugin from '@codebolt/plugin-sdk';

plugin.onStart(async () => {
  await plugin.llmProvider.register({
    providerId: 'my-embeddings',
    name: 'My Embedding Service',
    models: [
      { id: 'domain-embed-v1', name: 'Domain Embeddings v1', capabilities: ['embedding'] }
    ],
    capabilities: ['embedding'],
    requiresKey: true,
    configFields: [
      { key: 'apiKey', label: 'API Key', type: 'password', required: true },
      { key: 'endpoint', label: 'Endpoint URL', type: 'url' }
    ]
  });

  plugin.llmProvider.onCompletionRequest(async (request) => {
    const response = await fetch(`${request.options.providerConfig?.endpoint}/embeddings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${request.options.providerConfig?.apiKey}`
      },
      body: JSON.stringify({
        input: request.options.input,
        model: request.options.model
      })
    });

    const result = await response.json();
    plugin.llmProvider.sendReply(request.requestId, result, true);
  });
});
```

## Response Format

Embedding responses should follow the OpenAI embedding shape:

```json
{
  "data": [
    { "embedding": [0.1, 0.2], "index": 0 }
  ],
  "usage": {
    "prompt_tokens": 10,
    "total_tokens": 10
  }
}
```

## Configuration

Users select the embedding provider and model from Settings, then configure any plugin-provided fields such as API key or endpoint.

## When To Use A Plugin Embedding Provider

Use one when you need:

- a private embedding API
- a domain-specific embedding model
- a local service not covered by built-in local models
- a combined provider that owns both chat and embeddings

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

- [Custom AI Providers](./01_overview.md)
- [Custom LLM Provider](./02_custom-llm-provider.md)
- [Plugins Overview](../01_overview.md)
- [Plugin SDK and Lifecycle](../02_sdk-and-lifecycle.md)
