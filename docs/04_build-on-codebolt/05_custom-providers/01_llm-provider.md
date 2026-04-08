---
sidebar_position: 1
title: Custom LLM Provider
---

# Custom LLM Provider

Write an adapter that lets Codebolt talk to an LLM source Codebolt doesn't natively support. Once registered, your provider behaves exactly like the built-in ones — users pick it from the provider list, configure it in Settings, and agents use it transparently.

## When you'd build one

- **A new SaaS provider** Codebolt hasn't added yet.
- **An in-house LLM gateway** your company runs with custom auth or routing.
- **An exotic local runtime** that doesn't have an OpenAI-compatible API.
- **A router / fallback layer** that wraps multiple providers with custom selection logic.

If the provider is already OpenAI-compatible (most are), you don't need a custom provider — configure it as a **Custom HTTP** provider in the UI. See [LLM Providers](../../02_using-codebolt/08_integrations/01_llm-providers.md).

Custom providers are for when the wire format or auth is genuinely different.

## What Codebolt needs from a provider

A provider must implement a small interface:

```ts
interface LLMProvider {
  name: string;
  listModels(): Promise<Model[]>;
  chat(req: ChatRequest): Promise<ChatResponse>;
  chatStream?(req: ChatRequest): AsyncIterable<StreamChunk>;
  embed?(req: EmbedRequest): Promise<EmbedResponse>;
  tokenize?(text: string, model: string): Promise<number>;
  testConnection(): Promise<TestResult>;
}
```

- **`chat`** — the core method. Accepts messages + tools, returns a response.
- **`chatStream`** — optional but strongly recommended for interactive use.
- **`embed`** — implement if your provider also serves embedding models.
- **`tokenize`** — if your provider exposes a token counter; Codebolt falls back to an estimator otherwise.
- **`listModels`** — models your provider offers.
- **`testConnection`** — used by the **Test** button in Settings.

Full type definitions are in [Reference → codeboltjs types](../../05_reference/01_overview.md).

## Minimal provider

```ts
// providers/my-llm-provider/index.ts
import { LLMProvider, ChatRequest, ChatResponse } from "@codebolt/provider-sdk";

export default class MyLLMProvider implements LLMProvider {
  name = "my-llm";

  constructor(private config: { endpoint: string; apiKey: string }) {}

  async listModels() {
    return [
      { id: "my-model-small", contextWindow: 8192, supportsTools: true },
      { id: "my-model-large", contextWindow: 32768, supportsTools: true },
    ];
  }

  async chat(req: ChatRequest): Promise<ChatResponse> {
    const response = await fetch(`${this.config.endpoint}/chat`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: req.model,
        messages: req.messages,
        tools: req.tools,
        temperature: req.temperature,
      }),
    });

    if (!response.ok) {
      throw new Error(`Provider error: ${response.status} ${await response.text()}`);
    }

    const data = await response.json();
    return {
      content: data.text,
      tool_calls: data.tool_calls,
      usage: {
        input_tokens: data.usage.input,
        output_tokens: data.usage.output,
      },
    };
  }

  async testConnection() {
    try {
      const models = await this.listModels();
      return { ok: true, models: models.length };
    } catch (err) {
      return { ok: false, error: String(err) };
    }
  }
}
```

Real providers add streaming, tool-call format translation, retry logic, and error normalisation — see below.

## Streaming

For interactive use, implement `chatStream`:

```ts
async *chatStream(req: ChatRequest) {
  const response = await fetch(`${this.config.endpoint}/chat`, {
    method: "POST",
    headers: { /* ... */ },
    body: JSON.stringify({ ...req, stream: true }),
  });

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    const chunk = decoder.decode(value);
    for (const line of chunk.split("\n")) {
      if (!line.startsWith("data: ")) continue;
      const payload = JSON.parse(line.slice(6));
      yield { type: "text", content: payload.delta };
    }
  }
}
```

Yield chunks as they arrive. Codebolt handles accumulating them.

## Tool call translation

If your provider's tool-call wire format differs from Codebolt's canonical format (OpenAI-style `tool_calls: [{ id, type, function: { name, arguments }}]`), you need to translate:

```ts
// incoming (from Codebolt to your provider)
private toProviderFormat(tools: Tool[]) {
  return tools.map(t => ({
    name: t.function.name,
    description: t.function.description,
    parameters_schema: t.function.parameters,  // provider uses different name
  }));
}

// outgoing (from your provider to Codebolt)
private fromProviderFormat(calls: any[]) {
  return calls.map(c => ({
    id: c.call_id,
    type: "function",
    function: { name: c.tool, arguments: JSON.stringify(c.args) },
  }));
}
```

Keep this translation layer thin and well-tested — subtle bugs here cause weird agent behaviour.

## Error normalisation

Codebolt expects errors in a specific shape so the framework can classify them:

```ts
try {
  // provider call
} catch (err) {
  if (err.status === 429) {
    throw new LLMProviderError("rate_limited", err.message, { retry_after: err.retry_after });
  }
  if (err.status === 401) {
    throw new LLMProviderError("auth_failed", err.message);
  }
  if (err.status >= 500) {
    throw new LLMProviderError("upstream_error", err.message);
  }
  throw new LLMProviderError("unknown", String(err));
}
```

The framework uses the error code to decide: retry, fall back to another provider, fail the run, or surface to the user.

## Registering the provider

### As a plugin

Package your provider as an npm package:

```json
{
  "name": "@my-org/codebolt-provider-my-llm",
  "version": "0.1.0",
  "main": "dist/index.js",
  "codebolt": {
    "kind": "llm-provider",
    "entrypoint": "dist/index.js"
  },
  "dependencies": {
    "@codebolt/provider-sdk": "^1.0.0"
  }
}
```

The `codebolt` field marks this as a provider plugin. After publishing, users install with:

```bash
codebolt provider install @my-org/codebolt-provider-my-llm
```

### As a capability

Bundle the provider alongside prompts, agents, or panels in a [capability](../06_hooks-and-capabilities/04_capabilities-overview.md).

### Directly in a project

For a one-off, put the provider in `.codebolt/providers/` and reference it from `.codebolt/settings.yaml`:

```yaml
providers:
  my-llm:
    type: custom
    entrypoint: ./providers/my-llm-provider/index.ts
    config:
      endpoint: https://my-llm.example.com
      api_key_env: MY_LLM_KEY
```

## Configuration surface

Users configure your provider in **Settings → Providers**. The schema comes from a companion file:

```yaml
# providers/my-llm-provider/config-schema.yaml
fields:
  endpoint:
    label: Endpoint URL
    type: string
    required: true
    default: https://my-llm.example.com
  api_key:
    label: API Key
    type: secret
    required: true
  organization:
    label: Organization (optional)
    type: string
    required: false
```

Codebolt generates a form from this and stores the values encrypted.

## Testing

Providers can be unit-tested without a running Codebolt server:

```ts
import MyLLMProvider from "./index";

test("handles rate limit", async () => {
  const provider = new MyLLMProvider({ endpoint: "...", apiKey: "test" });
  // Mock fetch to return 429
  global.fetch = jest.fn().mockResolvedValueOnce({
    ok: false,
    status: 429,
    text: async () => "Too many requests",
  });
  await expect(provider.chat({ /* ... */ })).rejects.toThrow("rate_limited");
});
```

For integration tests, use Codebolt's test harness to spin up a minimal server with your provider registered.

## See also

- [LLM & Inference (internals)](../08_internals/03_subsystems/03_llm-and-inference.md) — the server side
- [LLM Providers (user-facing)](../../02_using-codebolt/08_integrations/01_llm-providers.md)
- [Custom Embedding Provider](./02_embedding-provider.md)
- [Custom Remote Execution Provider](./03_remote-execution-provider.md)
- [Reference → provider-sdk](../../05_reference/01_overview.md)
