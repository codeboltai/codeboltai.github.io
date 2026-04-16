---
sidebar_position: 7
title: Custom Embedding Provider
---

# Custom Embedding Provider

An embedding provider turns text into vectors. Codebolt uses embeddings for the memory ingestion pipeline, vector search, and knowledge graph enrichment. In the plugin system, custom embedding providers can be registered to extend Codebolt's retrieval capabilities.

## How to build an embedding provider plugin

Embedding providers are typically bundled with LLM provider plugins or registered as standalone plugins.

```ts
import plugin from "@codebolt/plugin-sdk";

plugin.onStart(async () => {
  // Registration logic (if supported by plugin-sdk)
});
```

## See also

- [Custom LLM Provider](./06_llm-provider.md)
- [Plugins Overview](./01_overview.md)
- [Gateway, execution, and LLM provider patterns](./04_major-patterns.md)
