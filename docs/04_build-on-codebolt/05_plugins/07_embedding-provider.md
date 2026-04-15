---
sidebar_position: 2
title: Custom Embedding Provider
---

# Custom Embedding Provider

An embedding provider turns text into vectors. Codebolt uses embeddings for the memory ingestion pipeline, vector search, and knowledge graph enrichment. If you need embeddings from a source Codebolt doesn't natively support, write a custom embedding provider.

## When you'd build one

- **A private embedding endpoint** with custom auth.
- **A local embedding model** not reachable via Ollama or a standard server.
- **A specialised embedding service** (domain-tuned, multilingual, code-specific) not in the built-in list.

If your embedding source is OpenAI-compatible, use a Custom HTTP provider in the UI — no code needed.

## The interface

```ts
interface EmbeddingProvider {
  name: string;
  listModels(): Promise<EmbeddingModel[]>;
  embed(req: EmbedRequest): Promise<EmbedResponse>;
  testConnection(): Promise<TestResult>;
}

interface EmbedRequest {
  model: string;
  texts: string[];
}

interface EmbedResponse {
  vectors: number[][];  // one per input text
  usage: {
    input_tokens: number;
  };
}
```

Simpler than an LLM provider — no tool calls, no streaming, no chat format.

## Minimal embedding provider

```ts
import { EmbeddingProvider, EmbedRequest, EmbedResponse } from "@codebolt/provider-sdk";

export default class MyEmbeddingProvider implements EmbeddingProvider {
  name = "my-embed";

  constructor(private config: { endpoint: string; apiKey: string }) {}

  async listModels() {
    return [
      { id: "my-embed-small", dimensions: 384, maxInputTokens: 512 },
      { id: "my-embed-large", dimensions: 1024, maxInputTokens: 8192 },
    ];
  }

  async embed(req: EmbedRequest): Promise<EmbedResponse> {
    const response = await fetch(`${this.config.endpoint}/embed`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model: req.model, inputs: req.texts }),
    });

    if (!response.ok) throw new Error(`${response.status}: ${await response.text()}`);

    const data = await response.json();
    return {
      vectors: data.embeddings,
      usage: { input_tokens: data.usage?.tokens ?? 0 },
    };
  }

  async testConnection() {
    try {
      const result = await this.embed({ model: "my-embed-small", texts: ["test"] });
      return { ok: true, dimensions: result.vectors[0].length };
    } catch (err) {
      return { ok: false, error: String(err) };
    }
  }
}
```

## Batching

The memory ingestion pipeline batches embedding calls for efficiency. Your `embed` method receives multiple texts at once. Handle the batch efficiently — many embedding APIs accept arrays natively, so pass the batch through:

```ts
// Good — one round trip
async embed(req) {
  const response = await fetch(endpoint, {
    body: JSON.stringify({ inputs: req.texts }),
  });
  return { vectors: await response.json() };
}

// Bad — N round trips
async embed(req) {
  return {
    vectors: await Promise.all(req.texts.map(t => this.embedOne(t))),
  };
}
```

If your upstream API only accepts single inputs, fall back to `Promise.all` but try to batch where possible.

## Dimension consistency

**Critical:** once you've used an embedding model to populate a vector index, switching to a different model — even one with the same dimension count — invalidates the index. Vectors from different models are not comparable.

If users need to switch embedding providers, Codebolt handles this by prompting for a full re-index. Your provider should declare its exact dimension count in `listModels` so Codebolt can detect mismatches.

## Token limits

Embedding models have per-input token limits. Return them in `listModels.maxInputTokens`. Codebolt's ingestion pipeline uses this to decide chunk size — chunks are sized to fit within the limit.

If you receive a batch where one input exceeds the limit, return a partial result with an error for that specific input:

```ts
async embed(req) {
  const results = await Promise.all(req.texts.map(async text => {
    if (await this.countTokens(text) > MAX_TOKENS) {
      return { error: "input_too_long" };
    }
    return { vector: await this.embedOne(text) };
  }));
  // Handle the error cases in the response
}
```

Or throw a `LLMProviderError("input_too_long", ...)` — the pipeline will catch it and handle.

## Registering

Same pattern as an LLM provider:

```json
{
  "name": "@my-org/codebolt-embed-my-service",
  "codebolt": {
    "kind": "embedding-provider",
    "entrypoint": "dist/index.js"
  }
}
```

Users configure in **Settings → Providers → Embeddings**.

## See also

- [Custom LLM Provider](./01_llm-provider.md)
- [Memory (internals)](../09_internals/03_subsystems/04_memory.md)
- [Knowledge & Vector (internals)](../09_internals/03_subsystems/05_knowledge-and-vector.md)
