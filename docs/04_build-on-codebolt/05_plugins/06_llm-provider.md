---
sidebar_position: 6
title: Custom LLM Provider
---

# Custom LLM Provider

Write a plugin that lets Codebolt talk to an LLM source Codebolt doesn't natively support. Once registered, your provider behaves exactly like the built-in ones — users pick it from the provider list, configure it in Settings, and agents use it transparently.

## When you'd build one

- **A new SaaS provider** Codebolt hasn't added yet.
- **An in-house LLM gateway** your company runs with custom auth or routing.
- **An exotic local runtime** that doesn't have an OpenAI-compatible API.
- **A router / fallback layer** that wraps multiple providers with custom selection logic.

If the provider is already OpenAI-compatible (most are), you don't need a custom provider — configure it as a **Custom HTTP** provider in the UI. See [LLM Providers](../../02_using-codebolt/08_integrations/01_llm-providers.md).

Custom providers are for when the wire format or auth is genuinely different.

## How to build an LLM provider plugin

An LLM provider plugin uses [`@codebolt/plugin-sdk`](./02_sdk-and-lifecycle.md) to register itself and handle completion requests.

```ts
import plugin from "@codebolt/plugin-sdk";

plugin.onStart(async () => {
  // Register the provider and its models
  await plugin.llmProvider.register({
    name: "my-llm",
    models: [
      { id: "my-model-small", contextWindow: 8192, supportsTools: true },
      { id: "my-model-large", contextWindow: 32768, supportsTools: true },
    ]
  });
});

// Handle non-streaming requests
plugin.llmProvider.onCompletionRequest(async (req) => {
  const result = await callMyApi(req);
  return {
    content: result.text,
    usage: {
      input_tokens: result.usage.input,
      output_tokens: result.usage.output,
    }
  };
});

// Handle streaming requests
plugin.llmProvider.onStreamRequest(async (req) => {
  const stream = await callMyApiStream(req);
  for await (const chunk of stream) {
    plugin.llmProvider.sendChunk({
      type: "text",
      content: chunk.delta
    });
  }
  plugin.llmProvider.sendReply({ /* final usage info */ });
});
```

## Registering the provider

### Plugin manifest

Your `package.json` must mark the plugin as an `llmProvider`:

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

## See also

- [Plugins Overview](./01_overview.md)
- [Plugin SDK and lifecycle](./02_sdk-and-lifecycle.md)
- [Gateway, execution, and LLM provider patterns](./04_major-patterns.md)
- [Custom Embedding Provider](./07_embedding-provider.md)
- [Custom Remote Execution Provider](./08_remote-execution-provider.md)

