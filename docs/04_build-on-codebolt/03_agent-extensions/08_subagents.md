---
sidebar_position: 8
title: Subagents
---

# Subagents

A **subagent** is a full child agent run spawned by a parent agent to handle a typed sub-task synchronously. Unlike [side execution](./07_side-execution.md), a subagent call **blocks** until the child finishes (or times out), and the result flows back into the parent's reasoning loop.

## When to use a subagent

- The task has its own reasoning surface — it needs tools, context, maybe an LLM of its own.
- You want isolation — the child's token budget, memory scratchpad, and trace live under their own run ID.
- You want **composable agents** — an agent that uses other agents as building blocks.
- You're decomposing a large task into smaller, typed pieces that each deserve their own loop.

When not to use one: if the task is a one-shot tool call, use a tool; if it's a short procedural sequence, use an [action block](./05_action-blocks/01_overview.md); if it's a single cognitive step, use a [skill](./03_skills/01_overview.md).

## Invoking

```ts
const result = await ctx.children.start({
  agent: "codebase-explorer",
  input: { query: "find all usages of ComponentX" },
  timeout_ms: 120_000,
});
```

The call resolves when the child terminates. The result's shape matches the child agent's declared output schema.

## What the child inherits

- **Project context** — the same workspace, file system view, git state.
- **Tool registry** — the child has its own `tools.allow`/`deny` from its manifest; it doesn't inherit the parent's.
- **Trace parent** — the child's events are nested under the parent's run ID in the event log.

## What it doesn't inherit

- **Working state.** The child gets a fresh context. Pass anything it needs as input.
- **Memory scratchpad.** Child's episodic memory is its own; persistent memory is shared by default but can be scoped.
- **Budget.** The child has its own token / tool-call / wall-time limits.

## Parallel subagents

Spawn multiple in parallel when tasks are independent:

```ts
const [codemap, deps, tests] = await Promise.all([
  ctx.children.start({ agent: "codemap-builder", input: {...} }),
  ctx.children.start({ agent: "dep-analyzer", input: {...} }),
  ctx.children.start({ agent: "test-scanner", input: {...} }),
]);
```

Each runs in its own process, supervised by [`AgentProcessManager`](../09_internals/03_subsystems/01_agent-subsystem.md).

## Subagent vs. side execution vs. skill (recap)

| Axis | Skill | Side Execution | Subagent |
|---|---|---|---|
| **Blocks parent?** | Yes (but lightweight) | No (by default) | Yes |
| **Own reasoning loop?** | Maybe | Yes (lightweight) | Yes (full) |
| **Own trace / run ID?** | Under parent | Under parent, separate run | Under parent, separate run |
| **Budget** | Shared with parent | Independent | Independent |
| **Typical latency** | ms-s | ms-min | s-min |

## Patterns

- **Manager + workers.** A parent manages several worker subagents, each specialised. See [Manager-Worker pattern](../08_orchestration-design/03_patterns/manager-worker.md).
- **Plan + execute + review.** Decomposition across three different subagents.
- **Debate.** Multiple subagents produce competing proposals, parent arbitrates. See [Debate pattern](../08_orchestration-design/03_patterns/debate.md).

## Authoring

A subagent is just an agent. Any agent you build using [Creating Agents](../02_creating-agents/01_overview.md) can be invoked as a subagent — no separate authoring path. Declare a clean input/output schema in its manifest so parents can call it typed.

## See also

- [Side Execution](./07_side-execution.md) — non-blocking alternative
- [Orchestration Design](../08_orchestration-design/01_overview.md) — multi-agent patterns
- [Agent Subsystem](../09_internals/03_subsystems/01_agent-subsystem.md) — how process management works
