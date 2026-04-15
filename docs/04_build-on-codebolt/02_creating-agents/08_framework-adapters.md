---
sidebar_position: 8
title: Framework Adapters
---

# Framework Adapters

Build Codebolt agents using frameworks you already know — **Vercel AI SDK**, **LangChain**, **Mastra**, and others — instead of the native Codebolt agent framework. The adapter layer in [`codeboltjs/packages/agent`](https://github.com/codebolt-ai/codeboltjs) translates between the framework's agent shape and the Codebolt server protocol.

## When an adapter makes sense

- You have existing agents written against a framework and want to run them inside Codebolt.
- Your team is fluent in a specific framework and learning Codebolt's native framework has a cost.
- The framework has ecosystem features (tool libraries, memory modules, evaluation harnesses) you want to keep.
- You're prototyping — frameworks move faster than native SDKs.

When it doesn't: if you need deep control over the Codebolt agent loop (custom processors, fine-grained phase hooks, non-standard context assembly), **use the native framework or drop to `codeboltjs` directly**. Adapters flatten some of that expressivity in exchange for framework ergonomics.

## What an adapter gives you

Regardless of the framework, the adapter wires:

- **Tool access.** The framework sees Codebolt tools as native tools — same schema, same call shape. Tool execution still goes through the server.
- **LLM routing.** Calls from the framework's LLM client are routed through [`llmService`](../09_internals/03_subsystems/03_llm-and-inference.md), so provider config, key management, and logging work the same as for native agents.
- **Event-log integration.** Framework calls are recorded as Codebolt events. Trace, replay, and debugging all work.
- **Lifecycle.** The adapter handles start / stop / heartbeat so the framework agent looks like a normal Codebolt agent to `AgentProcessManager`.

## Vercel AI SDK

```ts
import { createCodeboltVercelAgent } from "@codebolt/agent/vercel";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export default createCodeboltVercelAgent({
  name: "my-vercel-agent",
  async run(ctx, input) {
    const result = await generateText({
      model: openai("gpt-5"),
      tools: ctx.tools.asVercelTools(),       // Codebolt tools, Vercel-shaped
      prompt: input.task,
    });
    return { output: result.text };
  },
});
```

`ctx.tools.asVercelTools()` returns the Codebolt tool registry in the format the Vercel AI SDK expects. No re-definition needed.

## LangChain

```ts
import { createCodeboltLangChainAgent } from "@codebolt/agent/langchain";
import { ChatOpenAI } from "@langchain/openai";
import { AgentExecutor, createToolCallingAgent } from "langchain/agents";

export default createCodeboltLangChainAgent({
  name: "my-langchain-agent",
  async run(ctx, input) {
    const llm = new ChatOpenAI({ model: "gpt-5" });
    const agent = await createToolCallingAgent({
      llm,
      tools: ctx.tools.asLangChainTools(),
      prompt: ctx.prompts.buildSystem(input),
    });
    const executor = new AgentExecutor({ agent, tools: ctx.tools.asLangChainTools() });
    const result = await executor.invoke({ input: input.task });
    return { output: result.output };
  },
});
```

Same idea — Codebolt tools arrive as LangChain `StructuredTool` instances.

## Manifest

The manifest is the same shape as a level-1 framework agent. Set `framework: true` and point `entrypoint` at your adapter file.

```yaml
name: my-vercel-agent
version: 0.1.0
framework: true
entrypoint: index.ts
default_model: gpt-5
```

## What's preserved, what isn't

| Feature | Preserved across adapters |
|---|---|
| Tool access (Codebolt registry) | Yes |
| LLM routing & provider config | Yes |
| Event log / trace / replay | Yes |
| Memory (episodic, persistent) | Yes, via `ctx.memory.*` |
| Custom processors | **No** — use the native framework for this |
| Fine-grained lifecycle hooks | Partial — depends on what the framework exposes |
| Pattern helpers (Unified, Builder, etc.) | **No** — pattern helpers are Codebolt-native |

If you need what's in the "no" column, write a native level-1 agent and call the framework from inside the handler as a library, not as an adapter.

## Choosing between adapter and native

- **Adapter:** framework-first code, framework's lifecycle, Codebolt provides tools/LLM/logging plumbing.
- **Native + library use:** Codebolt handler shape, but `import { generateText } from "ai"` inside the handler for a specific call.

The second is usually enough. Reach for a full adapter only if the framework owns the *whole* agent, not just one call.

## See also

- [Level 1 — Framework](./03_creation-levels/level-1-framework.md) — native shape
- [Level 2 — codeboltjs](./03_creation-levels/level-2-codeboltjs.md) — direct SDK
- [`codeboltjs/packages/agent`](https://github.com/codebolt-ai/codeboltjs) — adapter source
- [LLM & Inference subsystem](../09_internals/03_subsystems/03_llm-and-inference.md)
