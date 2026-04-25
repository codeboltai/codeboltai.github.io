---
sidebar_position: 1
title: Custom AI Providers
description: Custom AI providers let plugins register AI backends that appear as selectable providers inside Codebolt.
---

# Custom AI Providers

Custom AI providers let plugins register AI backends that appear as selectable providers inside Codebolt.

This section groups two related plugin patterns:

- **Custom LLM Providers**
- **Custom Embedding Providers**

They belong together because both are exposed through the provider-selection model and both are implemented through the plugin AI-provider surface.

## Why This Is A Separate Section

These are not utility plugins. They extend Codebolt's model and inference backend layer.

Use custom AI providers when you need:

- a new chat/completion backend
- an in-house inference gateway
- OAuth-based provider login flows
- a specialized embedding backend
- custom routing or policy around AI models

## Two Common Shapes

| Provider Type | What it adds |
|---|---|
| **Custom LLM Provider** | Chat/completion, streaming, tools, OAuth/login, model registration |
| **Custom Embedding Provider** | Vector generation for memory, search, and knowledge workflows |

## Important Relationship

Embedding support is often bundled into an LLM provider plugin.

That means:

- some plugins expose both chat and embeddings
- some plugins are embedding-focused only

So the docs here are split for clarity, but the runtime surface is closely related.

## In This Section

- [Custom LLM Provider](./02_custom-llm-provider.md)
- [Custom Embedding Provider](./03_custom-embedding-provider.md)

## See Also

- [Plugins Overview](../01_overview.md)
- [Plugin SDK and Lifecycle](../02_sdk-and-lifecycle.md)
- [Proxy Execution Gateway](../08_proxy-execution-gateway/01_overview.md)
