---
sidebar_position: 2
title: Composable Pattern
---

# Composable Pattern

> **Note:** The `@codebolt/agent/composable` package and the primitives (`Agent`, `LocalTools`, `Orchestrator`, `Workflow`)
> represent planned functionality. They do not exist in the current codebase. For building agents today,
> use Markdown agents in `.codebolt/agents/remix/` or the `@codebolt/codeboltjs` SDK directly.

Build an agent out of small reusable pieces you can share across agents: `Agent`, `LocalTools`, `Orchestrator`, `Workflow`. Use when you have several related agents and want to reuse the parts.

## When to pick Composable over Unified

Choose Composable when:

- **You're building several related agents** that share pieces (tool definitions, sub-workflows, orchestration logic).
- **You want each piece testable in isolation** as a plain object.
- **Your team has a library of internal patterns** you want to reuse.

If you're building one agent, use [Unified Agent](./unified-agent.md) — Composable is overkill.

## The four primitives

```ts
import { Agent, LocalTools, Orchestrator, Workflow } from "@codebolt/agent/composable";
```

| Primitive | What it is | Reusable? |
|---|---|---|
| **LocalTools** | A bundle of tools + descriptions scoped to one agent | Yes — share across agents |
| **Agent** | A single agent with prompt, model, tools | Yes — nest inside workflows |
| **Orchestrator** | Logic that decides which agent runs next | Yes — share across workflows |
| **Workflow** | A sequence of agents + orchestration | The top-level runnable |

## A minimal example

```ts
import { Agent, LocalTools, Workflow } from "@codebolt/agent/composable";

// 1. Bundle tools once, reuse across agents
const readTools = new LocalTools([
  "codebolt_fs.search_files",
  "codebolt_codebase.*",
]);

// 2. Define agents that share the tool bundle
const planner = new Agent({
  name: "planner",
  systemPrompt: "Produce a structured plan.",
  model: "claude-opus-4-6",
  tools: readTools,
});

const summariser = new Agent({
  name: "summariser",
  systemPrompt: "Summarise the plan in 3 sentences.",
  model: "claude-sonnet-4-6",
  tools: readTools,
});

// 3. Wire them into a workflow
export default new Workflow({
  name: "plan-and-summarise",
  steps: [planner, summariser],
});
```

The tool bundle is declared once and used by both agents. Change the bundle in one place and every agent that uses it updates.

## Orchestrator — conditional routing

When "just run in sequence" isn't enough, pass an `Orchestrator`:

```ts
import { Orchestrator } from "@codebolt/agent/composable";

const routeByIntent = new Orchestrator({
  name: "route-by-intent",
  decide: async (ctx, lastOutput) => {
    if (lastOutput.intent === "plan") return planner;
    if (lastOutput.intent === "execute") return coder;
    if (lastOutput.intent === "review") return reviewer;
    return null; // stop
  },
});

new Workflow({
  steps: [intentClassifier, routeByIntent],
});
```

The orchestrator runs after each step and picks the next agent. Return `null` to stop the workflow.

## Nesting workflows

Workflows can contain other workflows as steps:

```ts
const understandPhase = new Workflow({
  name: "understand",
  steps: [codeReader, structureAnalyser],
});

const implementPhase = new Workflow({
  name: "implement",
  steps: [planner, coder, tester],
});

export default new Workflow({
  name: "full-feature",
  steps: [understandPhase, implementPhase, deployer],
});
```

This is how you build complex agents out of small, testable pieces.

## Testing

Each primitive is a plain object. Unit-test them directly:

```ts
import { planner } from "./my-agent";

test("planner handles empty task gracefully", async () => {
  const result = await planner.run({ task: "" });
  expect(result.error).toBe("empty_task");
});
```

For integration tests, use `@codebolt/agent/testing` helpers to mock LLM and tool calls.

## When to use Composable vs Builder vs Processor

- **Composable** — reuse at the *agent* level. You have many agents sharing configs.
- **[Builder](./builder-pattern.md)** — reuse at the *phase* level. You want to customise one phase (initial prompt, LLM output handling) while keeping others default.
- **[Processor](./processor-pattern.md)** — reuse at the *slot* level. You want to swap individual modifiers in and out.

## See also

- [Patterns Overview](./overview.md)
- [Unified Agent](./unified-agent.md) — the simpler default
- [Builder Pattern](./builder-pattern.md)
- [Processor Pattern](./processor-pattern.md)
