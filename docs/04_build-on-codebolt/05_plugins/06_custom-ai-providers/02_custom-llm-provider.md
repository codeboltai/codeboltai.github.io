---
sidebar_position: 2
title: Custom LLM Provider
description: Write a plugin that lets CodeBolt talk to an LLM source CodeBolt does not natively support
---

# Custom LLM Provider

Write a plugin that lets CodeBolt talk to an LLM source CodeBolt does not natively support. Once registered, your provider behaves like the built-in ones: users pick it in Settings, configure it, and agents use it transparently.

## When You'd Build One

- **A new SaaS provider** CodeBolt has not added yet
- **An in-house LLM gateway** with custom auth or routing
- **An exotic local runtime** without an OpenAI-compatible API
- **A router or fallback layer** that wraps multiple providers with custom selection logic
- **An OAuth-protected provider** such as subscription-backed services

If the provider is already OpenAI-compatible, you usually do not need a plugin provider. Use Codebolt's configurable HTTP provider path instead.

## How It Works

```text
User selects provider in Settings
      │
      ▼
Agent sends inference request
      │
      ▼
llmService resolves plugin provider
      │
      ▼
request is forwarded over WebSocket to the plugin
      │
      ▼
plugin calls real backend and returns reply / chunks
      │
      ▼
response flows back to the agent
```

## Complete Example

```ts
import plugin from '@codebolt/plugin-sdk';

plugin.onStart(async () => {
  await plugin.llmProvider.register({
    providerId: 'my-llm',
    name: 'My LLM',
    models: [
      {
        id: 'my-model-small',
        name: 'Small (8K)',
        capabilities: ['streaming', 'function_calling'],
        contextWindow: 8192,
        supportsTools: true
      },
      {
        id: 'my-model-large',
        name: 'Large (128K)',
        capabilities: ['streaming', 'function_calling', 'vision'],
        contextWindow: 131072,
        supportsTools: true
      }
    ],
    capabilities: ['streaming', 'function_calling'],
    description: 'My custom LLM provider',
    requiresKey: true,
    configFields: [
      {
        key: 'apiKey',
        label: 'API Key',
        type: 'password',
        required: true
      },
      {
        key: 'baseUrl',
        label: 'API Base URL',
        type: 'url'
      }
    ]
  });

  plugin.llmProvider.onCompletionRequest(async (request) => {
    try {
      const response = await fetch(`${request.options.providerConfig?.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${request.options.providerConfig?.apiKey}`
        },
        body: JSON.stringify(request.options)
      });

      const result = await response.json();
      plugin.llmProvider.sendReply(request.requestId, result, true);
    } catch (err: any) {
      plugin.llmProvider.sendError(request.requestId, {
        message: err.message,
        code: err.status || 500
      });
    }
  });

  plugin.llmProvider.onStreamRequest(async (request) => {
    // stream chunks and then send final reply
  });
});

plugin.onStop(async () => {
  await plugin.llmProvider.unregister('my-llm');
});
```

## Provider Manifest Reference

```ts
interface LlmProviderManifest {
  providerId: string;
  name: string;
  models?: Array<{
    id: string;
    name?: string;
    capabilities?: string[];
    contextWindow?: number;
    supportsTools?: boolean;
  }>;
  capabilities?: string[];
  description?: string;
  requiresKey?: boolean;
  configFields?: Array<{
    key: string;
    label: string;
    type?: 'string' | 'password' | 'number' | 'url';
    required?: boolean;
    placeholder?: string;
    description?: string;
  }>;
}
```

## OAuth-Based Providers

For providers that use OAuth instead of API keys:

```ts
await plugin.llmProvider.register({
  providerId: 'oauth-provider',
  name: 'OAuth Provider',
  requiresKey: false,
  models: [{ id: 'model-v1' }]
});

plugin.llmProvider.onLoginRequest(async (request) => {
  const tokens = await performPKCEFlow();
  saveTokens(tokens);
  plugin.llmProvider.sendReply(request.requestId, { authenticated: true }, true);
});
```

The UI can then use auth-status/login/logout routes exposed through the plugin integration surface.

## Plugin Manifest

```json
{
  "name": "@my-org/codebolt-plugin-my-llm",
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

## Tips

- Provider IDs are normalized before matching
- Use the `startup` trigger so the provider is available immediately
- Handle both `onCompletionRequest` and `onStreamRequest`
- Return OpenAI-style response envelopes
- Read user config from `request.options.providerConfig`

## See Also

- [Custom AI Providers](./01_overview.md)
- [Custom Embedding Provider](./03_custom-embedding-provider.md)
- [Plugins Overview](../01_overview.md)
- [Plugin SDK and Lifecycle](../02_sdk-and-lifecycle.md)
