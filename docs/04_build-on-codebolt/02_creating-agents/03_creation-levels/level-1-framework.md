---
sidebar_position: 2
title: Level 1 — Framework
---

# Level 1 — Framework

> **Note:** The `@codebolt/agent` package and the framework patterns described on this page
> (`createCodeboltAgent`, `UnifiedAgent`, etc.) represent planned functionality that has not
> been implemented yet. The actual agent SDK today is `@codebolt/codeboltjs` (a singleton
> `codebolt` with modules like `codebolt.llm`, `codebolt.fs`, `codebolt.git`, `codebolt.mcp`,
> `codebolt.chat`, `codebolt.cbstate`). For building agents today, use Markdown agents in
> `.codebolt/agents/remix/` or the `@codebolt/codeboltjs` SDK directly (level 2).

Write a custom agent with a small amount of TypeScript, using the Codebolt agent framework. This is where most real custom agents live. The framework handles the loop, context assembly, heartbeats, memory writes, and the event log — you write the part that makes your agent different.

## When level 1 is the right choice

- You need custom code in the handler — conditional logic, external API calls, domain-specific transformations.
- You need structured typed inputs and outputs (not just free-form chat).
- You want to use this agent as a node in a flow, or as a callable from other agents.
- You want to compose processors in a specific order.
- [Level 0](./level-0-remix.md) isn't expressive enough.

If you're just tweaking prompts and tools, **stay at level 0** — it's easier and inherits upstream improvements automatically.

## What the framework gives you

When you `import { createCodeboltAgent } from "@codebolt/agent"` (planned — see note above) you get:

| Provided | Meaning |
|---|---|
| **Agent loop** | Deliberate → execute → reflect, with phase tracking |
| **Context assembly** | Default [contextAssembly](../../../09_internals/03_subsystems/07_context-assembly.md) wiring, configurable |
| **Tool calling** | Typed access to the [tool service](../../../09_internals/03_subsystems/02_mcp-and-tools.md) |
| **LLM client** | Typed access to [llmService](../../../09_internals/03_subsystems/03_llm-and-inference.md) |
| **Memory access** | Typed access to [memory layers](../../../09_internals/03_subsystems/04_memory.md) |
| **Heartbeats** | Automatic — framework emits them; `HeartbeatManager` handles killing stalled runs |
| **Event log integration** | Every phase is recorded automatically |
| **Error handling** | Structured errors with run-level context |
| **Replay support** | Runs are fully replayable by default |

You don't build any of these. You use them.

## The handler

The minimal handler shape:

```ts
import { createCodeboltAgent } from "@codebolt/agent"; // planned — see note above

export default createCodeboltAgent({
  name: "my-agent",

  async run(ctx, input) {
    // your logic here
    return output;
  },
});
```

The `ctx` parameter gives you access to all the framework-provided services:

```ts
ctx.llm.chat({ messages, tools, model })       // → LLM call
ctx.tools.call({ tool, args })                  // → tool execution
ctx.memory.episodic.append({ ... })             // → memory write
ctx.memory.persistent.query({ ... })            // → memory read
ctx.state.get() / ctx.state.set(...)            // → per-run working state
ctx.context.assemble(opts)                      // → explicit context build
ctx.log.info(...) / ctx.log.warn(...)           // → structured logging
ctx.children.start({ agent, input })            // → spawn a child agent run
```

Everything is typed. If you pass an invalid tool name or malformed arguments, TypeScript catches it at compile time rather than at runtime.

## Two shapes of handler

The framework supports two styles:

### Single-pass (stateless)
One invocation of `run()` handles the whole task from input to output. Good for agents that don't need a chat loop:

```ts
import { createCodeboltAgent } from "@codebolt/agent"; // planned — not yet available

export default createCodeboltAgent({
  name: "summarizer",
  async run(ctx, input: { file: string }) {
    const content = await ctx.tools.call("codebolt_fs.read_file", { path: input.file });
    const response = await ctx.llm.chat({
      messages: [
        { role: "system", content: "Summarise the given code file in 3 sentences." },
        { role: "user", content: content.content },
      ],
    });
    return { summary: response.content };
  },
});
```

Returns when done. No loop.

### Conversational (stateful)
The framework runs the handler in a loop, passing the conversation state each time, until the handler signals completion. Good for chat-shaped agents:

```ts
createCodeboltAgent({
  name: "chat-agent",
  mode: "conversational",
  async turn(ctx, message, history) {
    const response = await ctx.llm.chat({
      messages: [...history, { role: "user", content: message }],
      tools: ctx.tools.available(),
    });

    if (response.tool_calls) {
      const results = await Promise.all(
        response.tool_calls.map(call => ctx.tools.call(call))
      );
      return { type: "continue", tool_results: results };
    }

    return { type: "done", response: response.content };
  },
});
```

The framework wraps this in the [agent loop](../05_agent-anatomy/lifecycle.md), handles retries, and records every phase.

## Using a pattern

For anything beyond the trivial, use one of the [agent patterns](../06_patterns/overview.md) instead of writing the loop yourself:

```ts
import { UnifiedAgent } from "@codebolt/agent/patterns"; // planned — not yet available

export default new UnifiedAgent({
  name: "my-agent",
  systemPrompt: "...",
  tools: ["codebolt_fs.*", "codebolt_git.*"],
  processors: {
    messageModifiers: [new DirectoryContextModifier(), new AtFileProcessorModifier()],
    toolValidation: [new MyCustomValidator()],
  },
  // no handler — the pattern provides it
});
```

[Unified Agent](../06_patterns/unified-agent.md) is the recommended default. It packages the common agent shape with sensible defaults and still lets you customize every phase.

## Declaring the manifest

Your `codeboltagent.yaml` references the framework entry point:

```yaml
name: my-agent
version: 0.1.0
description: What this agent does, in one sentence.
framework: true
entrypoint: index.ts
default_model: claude-sonnet-4-6

inputs:
  task: { type: string, required: true }

outputs:
  result: { type: object }

tools:
  allow:
    - codebolt_fs.*
    - codebolt_codebase.*

limits:
  max_tool_calls: 100
  max_tokens: 200000
  max_wall_time_seconds: 600
```

Key fields specific to level 1:

- `framework: true` — tells the server this is a framework agent, not a remix.
- `entrypoint` — path to the file that `export default`s the handler or pattern.
- `inputs` / `outputs` — typed contract if this agent is called as a flow node.

## Installing dependencies

A level-1 agent is a normal Node package:

```bash
cd .codebolt/agents/my-agent
npm install
```

The agent's dependencies are isolated to its own directory. Multiple agents can use different versions of the same library without conflict because each agent runs in its own process.

## Running

> **Note:** The CLI subcommands below (`codebolt agent test`, `codebolt agent start`, etc.) represent planned functionality. The actual Codebolt CLI uses flag-based commands, not subcommands.

```bash
codebolt agent test my-agent --input '{"task": "..."}'
codebolt agent start my-agent --task "..."
```

Or from the desktop app / chat — a level-1 agent appears in the agent picker alongside the built-ins.

## Debugging

The framework wires replay, tracing, and structured logging automatically:

> **Note:** The CLI subcommands below (`agent test`, `agent trace`, `agent replay`, `agent inspect`) are planned and not yet available. The current CLI is flag-based.

```bash
codebolt agent trace <run_id>       # planned: full phase-by-phase trace
codebolt agent replay <run_id>      # planned: re-run with the recorded inputs
codebolt agent inspect <run_id>     # planned: interactive REPL into a recorded run
```

See [Testing and debugging](../09_testing-and-debugging.md) for the full surface.

## When to graduate to level 2

Clear signs you need [level 2](./level-2-codeboltjs.md):

- You need the loop to have a non-standard shape the patterns don't support.
- You want to call `codeboltjs` APIs the framework doesn't expose.
- You're building infrastructure (a test runner, a debugger, an IDE adapter) rather than an agent.

For everything else, level 1 is the right place to live.

## See also

- [Level 0 — Remix](./level-0-remix.md) — simpler
- [Level 2 — codeboltjs](./level-2-codeboltjs.md) — lower-level
- [Patterns overview](../06_patterns/overview.md)
- [codeboltagent.yaml reference](../05_agent-anatomy/agent-yaml.md)
- [Custom Agents Quickstart](../02_quickstart.md)
