---
sidebar_position: 1
title: Patterns Overview
---

# Patterns Overview

> **Note:** The `@codebolt/agent` package and the pattern classes (`UnifiedAgent`, `AgentBuilder`,
> `ProcessorAgent`, `Agent`/`LocalTools`/`Workflow`/`Orchestrator`) described below represent planned
> functionality. They do not exist in the current codebase. For building agents today, use Markdown
> agents in `.codebolt/agents/remix/` or the `@codebolt/codeboltjs` SDK directly.

The framework doesn't force you to write the agent loop from scratch. Instead, it gives you four **patterns** — each a different way to structure an agent — and you pick one that matches your needs. Most agents use [Unified Agent](./unified-agent.md); the others exist for specific situations.

## The four patterns

```
Level of control
      ▲
      │
      │   Processor       ◀── decompose by loop phase
      │
      │   Builder         ◀── explicit builder per phase
      │
      │   Composable      ◀── small reusable pieces glued together
      │
      │   Unified Agent   ◀── one config, sensible defaults  ★ start here
      │
      └──────────────────────────▶ ease of use
```

| Pattern | What it is | When to use |
|---|---|---|
| **[Unified Agent](./unified-agent.md)** | A single declarative config + a default loop. You provide prompt, tools, processors; the pattern provides the rest. | Default. 80% of custom agents. |
| **[Composable](./composable-pattern.md)** | Small reusable pieces: Agent, LocalTools, Orchestrator, Workflow. You wire them up. | When you want to share pieces across multiple agents. |
| **[Builder](./builder-pattern.md)** | Explicit builder objects for each phase of the loop: initial prompt, LLM output handler, followup prompt. | When you need fine control over each phase without writing the loop yourself. |
| **[Processor](./processor-pattern.md)** | Decompose by what runs at each slot: message modifier, LLM agent step, tool executor. | Lowest-level of the four. When none of the above fit. |

All four patterns eventually produce the same thing — an agent that runs through the standard [lifecycle](../04_agent-anatomy/lifecycle.md). They differ in how much structure they impose on *your* code.

## Picking one

### Use Unified Agent if...
- This is your first custom agent.
- You want the standard "prompt + tools + loop" shape.
- You're willing to trust the framework's defaults and customise later.
- You don't have a reason to pick something else.

This is the **default** and the one the quickstart uses. Most agents should live here.

### Use Composable if...
- You're building several related agents that share pieces (tools, orchestration logic, sub-workflows).
- You want each piece to be testable in isolation.
- Your team has built up a library of internal patterns you want to reuse.

### Use Builder if...
- You need to control exactly what the initial prompt contains, what happens when the LLM returns, and how followup prompts are constructed.
- The Unified Agent's default handling of one of those phases doesn't match your needs.
- You're writing an agent with a non-standard conversation shape.

### Use Processor if...
- You want to decompose the loop into pluggable slots and swap them individually.
- You're building infrastructure that produces agent behavior from config, not from code.
- None of the higher-level patterns map onto what you're building.

**If you're genuinely uncertain, use Unified Agent.** Graduating later is cheap; starting too low is expensive.

## Example: the same agent, four ways

To make the patterns concrete — a minimal "summarise this file" agent in each.

### Unified Agent

```ts
import { UnifiedAgent } from "@codebolt/agent/patterns";

export default new UnifiedAgent({
  name: "summariser",
  systemPrompt: "You summarise code files in 3 sentences.",
  tools: ["codebolt_fs.read_file"],
});
```

That's the whole agent. The pattern provides the loop, the default processors, and the output handling.

### Composable

```ts
import { Agent, LocalTools, Workflow } from "@codebolt/agent/composable";

const tools = new LocalTools(["codebolt_fs.read_file"]);

const summarise = new Agent({
  name: "summariser",
  systemPrompt: "Summarise in 3 sentences.",
  tools,
});

export default new Workflow({
  name: "summarise-file",
  steps: [summarise],
});
```

Pieces visible, reusable.

### Builder

```ts
import { AgentBuilder, InitialPromptBuilder, LLMOutputHandler } from "@codebolt/agent/builder";

export default new AgentBuilder({
  name: "summariser",
  initialPrompt: new InitialPromptBuilder({
    system: "Summarise in 3 sentences.",
    includeFileContent: true,
  }),
  llmOutputHandler: new LLMOutputHandler({
    onToolCall: "execute",
    onText: "return",
  }),
});
```

Explicit phases.

### Processor

```ts
import { ProcessorAgent, MessageModifier, LLMAgentStep, ToolExecutor } from "@codebolt/agent/processor";

export default new ProcessorAgent({
  name: "summariser",
  steps: [
    new MessageModifier(/* assembles the prompt */),
    new LLMAgentStep(/* calls the LLM */),
    new ToolExecutor(/* runs tool calls */),
  ],
});
```

Slots made explicit.

For a trivial agent, the patterns all look similar. The differences become clear when you need custom behaviour in the middle — Unified lets you override a handler, Composable lets you swap a piece, Builder lets you extend one phase, Processor lets you inject at any slot.

## Composition

Patterns can call other patterns. A Unified Agent can contain a Composable Workflow; a Builder can delegate to a Processor chain. The four patterns live in one package and share types; the framework doesn't care which one a given agent uses.

## See also

- [Unified Agent](./unified-agent.md) — the default
- [Composable](./composable-pattern.md)
- [Builder](./builder-pattern.md)
- [Processor](./processor-pattern.md)
- [Level 1 — Framework](../03_creation-levels/level-1-framework.md) — where patterns run
