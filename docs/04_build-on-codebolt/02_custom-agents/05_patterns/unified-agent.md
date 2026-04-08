---
sidebar_position: 5
title: Unified Agent
---

# Unified Agent

> **Note:** The `@codebolt/agent` package and `UnifiedAgent` class described below represent planned
> functionality. They do not exist yet. For building agents today, use Markdown agents in
> `.codebolt/agents/remix/` or the `@codebolt/codeboltjs` SDK.

The default pattern and the one most custom agents should use. You declare a config, the pattern provides a working agent. Simple cases need nothing else; complex cases can override any piece.

## The shape

```ts
import { UnifiedAgent } from "@codebolt/agent/patterns"; // planned — not yet available

export default new UnifiedAgent({
  name: "my-agent",
  systemPrompt: "...",
  tools: ["codebolt_fs.*"],
});
```

Three required fields. That's an agent. The pattern wires:

- A standard deliberate → execute → reflect loop.
- Default context assembly with sensible processors.
- Typed tool calling through `toolService`.
- Memory writes at phase boundaries.
- Heartbeats, event log, lifecycle — all automatic.

## Full configuration

```ts
new UnifiedAgent({
  // Identity
  name: "my-agent",
  description: "One-line description.",

  // LLM
  model: "claude-sonnet-4-6",
  temperature: 0.2,
  maxTokens: 8000,

  // Prompting
  systemPrompt: "You are ...",
  systemPromptBuilder: async (ctx) => `You are ... working in ${ctx.workspace.name}`,
    // use this when the system prompt depends on runtime info

  // Tools
  tools: ["codebolt_fs.*", "codebolt_git.read_*"],   // allowlist, globs ok
  toolsDeny: ["codebolt_fs.write_file"],             // optional
  toolDescriptions: {                                // override a tool's description
    "codebolt_fs.read_file": "Read a file. Use for < 1000 lines; for larger files use codebolt_fs.read_many_files.",
  },

  // Context assembly
  context: {
    rules: true,          // use contextRuleEngine
    memory: {
      episodic: true,
      persistent: true,
      vectorTopK: 5,
    },
    codemap: true,
    environment: true,    // inject cwd, git branch, etc.
    openFiles: true,
  },

  // Processors (advanced — usually you don't touch these)
  processors: {
    messageModifiers: [new DirectoryContextModifier(), new AtFileProcessorModifier()],
    toolValidators: [new MyCustomValidator()],
    responseHandlers: [],
  },

  // Input / output schema
  inputs: {
    task: { type: "string", required: true },
  },
  outputs: {
    result: { type: "object" },
  },

  // Limits
  limits: {
    maxToolCalls: 100,
    maxTokens: 200000,
    maxWallTimeSeconds: 600,
  },

  // Hooks into the loop
  onPhaseStart: async (phase, ctx) => { /* ... */ },
  onPhaseEnd: async (phase, ctx, result) => { /* ... */ },
  onToolCall: async (call, ctx) => { /* observe or modify */ },
  onToolResult: async (result, call, ctx) => { /* observe or modify */ },
  onComplete: async (output, ctx) => { /* final cleanup */ },

  // Custom handler (escape hatch)
  handler: async (ctx, input) => {
    // if you need a totally custom loop for this agent
  },
});
```

## The happy path

The minimal config does the right thing for most cases. You only reach for more fields when:

- You want to **override a tool's description** to steer LLM choice.
- You want to **skip default processors** that don't apply (e.g. `DirectoryContextModifier` for an agent that doesn't work with files).
- You want to **hook into specific phases** for logging, metrics, or tweaks.
- You need a **completely custom handler** — at which point you might be better off with the [Builder](./builder-pattern.md) pattern.

## What the defaults actually do

When you leave a field unset, Unified Agent uses these defaults:

| Field | Default |
|---|---|
| `model` | The agent's `default_model` from `codeboltagent.yaml`, falling back to the project default |
| `temperature` | 0.2 |
| `context.memory.episodic` | true |
| `context.memory.persistent` | true |
| `context.memory.vectorTopK` | 5 |
| `context.codemap` | true |
| `processors.messageModifiers` | The standard set (see below) |
| `limits` | Inherited from `codeboltagent.yaml`, falling back to project defaults |

The standard message modifier set, in order:

1. `CoreSystemPromptModifier`
2. `EnvironmentContextModifier`
3. `IdeContextModifier`
4. `DirectoryContextModifier`
5. `MemoryImportModifier`
6. `AtFileProcessorModifier`
7. `ChatHistoryMessageModifier`
8. `ChatCompressionModifier` (fires only if over budget)
9. `LoopDetectionModifier`
10. `ChatRecordingModifier`

You can replace this list entirely via `processors.messageModifiers`, or **append** to it via `processors.additionalMessageModifiers`. Usually append — replacing loses you the standard context assembly.

## Overriding tool descriptions

One of the most useful levers and also the most overlooked. The LLM picks which tool to call based on the tool's description. Codebolt ships generic descriptions for built-in tools, and they're often good enough — but for your specific use case you may want to be more directive:

```ts
toolDescriptions: {
  "codebolt_fs.read_file": "Read a specific file whose path you already know. Do NOT use this to search — use codebolt_fs.search_files for that.",
  "codebolt_fs.search_files": "Search the project for text. Use this before read_file when you don't know which file to read.",
}
```

This guidance only applies to your agent, not to others using the same tools. Cheap to add, often a big quality improvement.

## Phase hooks

All phase hooks are optional. Use them for observation and light modification:

```ts
onToolCall: async (call, ctx) => {
  ctx.log.info(`about to call ${call.tool}`, { args: call.args });
  return call;  // return it unchanged, or return a modified version
},

onToolResult: async (result, call, ctx) => {
  if (!result.ok) {
    ctx.log.warn(`tool failed`, { tool: call.tool, reason: result.reason });
  }
  return result;
},
```

**Don't put heavy logic in phase hooks.** They run on the critical path of every step. If you need heavy logic, spawn a child agent or emit an event and handle it out-of-band.

## The custom handler escape hatch

If Unified Agent's loop shape doesn't match your needs, you can provide a custom handler:

```ts
new UnifiedAgent({
  name: "weird-agent",
  tools: ["codebolt_fs.*"],
  handler: async (ctx, input) => {
    // totally custom loop
  },
});
```

At this point you've lost most of the pattern's value — you're just using it for manifest integration. Consider switching to the [Builder](./builder-pattern.md) pattern instead, which is designed for that use case.

## Testing

```bash
# planned — not yet available:
codebolt agent test my-agent --input '{"task": "..."}'
```

Unified Agent records every phase for replay. You can replay any recorded run against a modified agent to see if the behaviour changed:

```bash
# planned — not yet available:
codebolt agent replay <run_id>
```

See [Testing and debugging](../06_testing-and-debugging.md).

## See also

- [Patterns overview](./overview.md)
- [Level 1 — Framework](../03_creation-levels/level-1-framework.md)
- [Processors](../../03_processors/01_what-are-processors.md) — the modifiers Unified Agent wires up
- [Context Assembly internals](../../08_internals/03_subsystems/07_context-assembly.md)
