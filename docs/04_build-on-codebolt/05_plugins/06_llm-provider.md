---
sidebar_position: 6
title: Custom LLM Provider
---

# Custom LLM Provider

Write a plugin that lets CodeBolt talk to an LLM source CodeBolt doesn't natively support. Once registered, your provider behaves exactly like the built-in ones — users pick it from the provider list, configure it in Settings, and agents use it transparently.

## When You'd Build One

- **A new SaaS provider** CodeBolt hasn't added yet
- **An in-house LLM gateway** with custom auth or routing
- **An exotic local runtime** without an OpenAI-compatible API
- **A router / fallback layer** that wraps multiple providers with custom selection logic
- **An OAuth-protected provider** (like ChatGPT or Claude Pro subscriptions)

If the provider is already OpenAI-compatible, you don't need a custom provider — configure it as a **Custom HTTP** provider in the Settings UI. Custom providers are for when the wire format or auth is genuinely different.

## How It Works

```
User selects "My Provider" in Settings
       │
       ▼
Agent sends LLM request → llmService
       │
       ├─ getPluginProvider("myprovider") → found!
       │
       ▼
forwardLlmProviderCompletion() or forwardLlmProviderStream()
       │
       ▼ (via WebSocket)
Plugin child process handles the actual API call
       │
       ▼ (sendReply / sendChunk)
Response flows back to agent
```

## Complete Example

```ts
import plugin from '@codebolt/plugin-sdk';

plugin.onStart(async (ctx) => {
  // Step 1: Register the provider and its models
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
        required: true,
        placeholder: 'sk-...',
        description: 'Your API key from https://my-provider.com/keys'
      },
      {
        key: 'baseUrl',
        label: 'API Base URL',
        type: 'url',
        required: false,
        placeholder: 'https://api.my-provider.com/v1',
        description: 'Custom endpoint (optional)'
      }
    ]
  });

  // Step 2: Handle non-streaming completion requests
  plugin.llmProvider.onCompletionRequest(async (request) => {
    try {
      const { messages, model, tools, tool_choice } = request.options;
      const apiKey = request.options.providerConfig?.apiKey;
      const baseUrl = request.options.providerConfig?.baseUrl || 'https://api.my-provider.com/v1';

      const response = await fetch(`${baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ model, messages, tools, tool_choice })
      });

      const result = await response.json();

      // Return in OpenAI-compatible format
      plugin.llmProvider.sendReply(request.requestId, {
        choices: result.choices,
        usage: result.usage,
        model: result.model
      }, true);
    } catch (err: any) {
      plugin.llmProvider.sendError(request.requestId, {
        message: err.message,
        code: err.status || 500
      });
    }
  });

  // Step 3: Handle streaming requests
  plugin.llmProvider.onStreamRequest(async (request) => {
    try {
      const { messages, model, tools } = request.options;
      const apiKey = request.options.providerConfig?.apiKey;
      const baseUrl = request.options.providerConfig?.baseUrl || 'https://api.my-provider.com/v1';

      const response = await fetch(`${baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ model, messages, tools, stream: true })
      });

      let fullContent = '';
      const reader = response.body!.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = decoder.decode(value);
        const lines = text.split('\n').filter(l => l.startsWith('data: '));

        for (const line of lines) {
          const data = line.slice(6);
          if (data === '[DONE]') break;

          const chunk = JSON.parse(data);
          const delta = chunk.choices?.[0]?.delta;

          if (delta?.content) {
            fullContent += delta.content;
            plugin.llmProvider.sendChunk(request.requestId, {
              choices: [{ delta: { content: delta.content } }]
            });
          }
        }
      }

      // Final reply with complete response
      plugin.llmProvider.sendReply(request.requestId, {
        choices: [{ message: { content: fullContent, role: 'assistant' } }],
        usage: { prompt_tokens: 0, completion_tokens: 0 },
        model
      }, true);
    } catch (err: any) {
      plugin.llmProvider.sendError(request.requestId, {
        message: err.message,
        code: err.status || 500
      });
    }
  });
});

plugin.onStop(async () => {
  await plugin.llmProvider.unregister('my-llm');
});
```

## Provider Manifest Reference

```ts
interface LlmProviderManifest {
  providerId: string;         // Normalized: lowercase, no spaces
  name: string;               // Display name in UI
  models?: Array<{
    id: string;               // Model identifier
    name?: string;            // Display name
    capabilities?: string[];  // 'streaming', 'function_calling', 'vision'
    contextWindow?: number;
    supportsTools?: boolean;
  }>;
  capabilities?: string[];    // Provider-level capabilities
  description?: string;       // Shown in provider list
  requiresKey?: boolean;      // true = show API key field in settings
  configFields?: Array<{      // Custom config fields in Settings UI
    key: string;
    label: string;
    type?: 'string' | 'password' | 'number' | 'url';
    required?: boolean;
    placeholder?: string;
    description?: string;
  }>;
}
```

## OAuth-based Providers

For providers that use OAuth instead of API keys (like the built-in `codex-plugin` and `anthropic-plugin`):

```ts
// Set requiresKey: false (we don't use static API keys)
await plugin.llmProvider.register({
  providerId: 'oauth-provider',
  name: 'OAuth Provider',
  requiresKey: false,
  models: [...]
});

// Handle login requests from the auth-status / login routes
plugin.llmProvider.onLoginRequest(async (request) => {
  // 1. Generate PKCE code_verifier + code_challenge
  // 2. Open browser to authorization URL
  // 3. Start local HTTP server to receive callback
  // 4. Exchange auth code for tokens
  // 5. Save tokens (e.g., to ~/.codebolt/plugins/my-plugin/auth.json)
  // 6. Reply with success

  const tokens = await performPKCEFlow();
  saveTokens(tokens);
  plugin.llmProvider.sendReply(request.requestId, { authenticated: true }, true);
});

// In completion handlers, load and refresh tokens
plugin.llmProvider.onCompletionRequest(async (request) => {
  let tokens = loadTokens();
  if (tokens.expires_at < Date.now()) {
    tokens = await refreshTokens(tokens.refresh_token);
    saveTokens(tokens);
  }

  // Use tokens.access_token for API calls
  // ...
});
```

The REST API provides auth endpoints for the UI:
- `GET /plugins/:id/auth-status` — checks if `auth.json` has valid tokens
- `POST /plugins/:id/login` — triggers the login flow
- `POST /plugins/:id/logout` — deletes `auth.json`

## Plugin Manifest

```json
{
  "name": "@my-org/codebolt-plugin-my-llm",
  "version": "1.0.0",
  "main": "dist/index.js",
  "codebolt": {
    "plugin": {
      "type": "llmProvider",
      "triggers": [
        { "type": "startup" }
      ]
    }
  },
  "dependencies": {
    "@codebolt/plugin-sdk": "*"
  }
}
```

## Tips

- Provider IDs are normalized (lowercase, whitespace stripped) when matched — `"My Provider"` and `"myprovider"` resolve to the same ID
- Use `startup` trigger so the provider is available as soon as CodeBolt launches
- Handle both `onCompletionRequest` and `onStreamRequest` — agents may use either
- Return responses in OpenAI-compatible format (choices, usage, model fields)
- Config field values from Settings are available in `request.options.providerConfig`

## See Also

- [Plugins Overview](./01_overview.md)
- [Plugin SDK and Lifecycle](./02_sdk-and-lifecycle.md)
- [Gateway, Execution, and LLM Provider Patterns](./04_major-patterns.md)
- [Custom Embedding Provider](./07_embedding-provider.md)
- [Proxy Execution Gateway](./08_proxy-execution-gateway/01_overview.md)
