---
sidebar_position: 7
title: Side Execution
---

# Side Execution

**Side execution** is fire-and-forget or background work spawned *alongside* a main agent run — not blocking the main loop, not owning the chat conversation, but still traceable and observable.

Backed by the server's [`SideExecutionManager`](../09_internals/03_subsystems/01_agent-subsystem.md) and the `sideExecution.cli` surface.

## When side execution fits

- **Parallel scouts.** The main agent asks three side tasks to search the codebase, read dependencies, and check recent commits — then uses whichever finish first.
- **Async enrichment.** Kick off a code-map rebuild or a long eval while the main agent continues.
- **Background analyses.** Security scan, license audit, performance regression check — interesting but not blocking.
- **Pre-warming.** Preload memory or retrieval results before the agent needs them.

Don't use side execution for work the main agent **needs a result from before proceeding** — that's a [subagent](./08_subagents.md), which is synchronous and typed.

## The three flavours

| Flavour | Semantics | When |
|---|---|---|
| **Fire-and-forget** | Spawn, don't wait, don't read results | Logging, analytics, pre-warming |
| **Joinable** | Spawn, continue, later `await` the result if still needed | Scouts, speculative work |
| **Streaming** | Spawn, receive partial results as events while the main loop continues | Live indexing, long-running retrieval |

## Spawning

```ts
// fire-and-forget
await ctx.side.spawn({
  task: "reindex-codemap",
  inputs: { root: "./src" },
});

// joinable — grab a handle, await later
const handle = ctx.side.spawn({
  task: "security-scan",
  inputs: { paths: ["./src", "./package.json"] },
  joinable: true,
});

// ... later, when we need the result
const report = await handle.join({ timeout_ms: 30_000 });

// streaming
const stream = ctx.side.spawn({
  task: "deep-code-search",
  inputs: { query: "..." },
  streaming: true,
});
for await (const hit of stream) {
  // process as they arrive
}
```

## Lifecycle and cancellation

- Side executions inherit the parent run's **trace** — the event log nests their events under the parent's.
- They're **cancelled** automatically when the parent run ends (unless explicitly promoted to persistent — rare).
- They have **independent budgets** — a side task can't consume the parent's token / time budget.
- A side task may spawn its own tools and LLM calls, but **may not spawn subagents** by default (keep-it-simple rule; relaxed per-project if needed).

## Observability

Every side execution shows up in:

- The **flow view** as a branch off the parent run.
- The **event log** with its own run ID.
- The **trace** UI nested under the spawning phase.

You can re-run a side task in isolation via replay the same way you would a subagent.

## Side execution vs. subagent

| Axis | Side execution | Subagent |
|---|---|---|
| **Blocking?** | No (unless you `join`) | Yes |
| **Has its own reasoning loop?** | Yes, but lightweight | Yes, full |
| **Memory access** | Read-only to parent's memory | Can write to parent's memory (scoped) |
| **Cost** | Low-moderate | Moderate-high |
| **Good for** | Speculative / parallel work | Decomposition of a required task |

## Authoring a side-execution task type

Most of the time you use built-in task types. If you need a custom one:

1. Define the task in `.codebolt/side-tasks/<name>/task.yaml`.
2. Implement the handler (same shape as a lightweight skill).
3. Register; the server picks it up on reload.

## See also

- [Subagents](./08_subagents.md) — when you need the result synchronously
- [Multi-Agent Orchestration](../08_multi-agent-orchestration/01_overview.md) — flows that spawn many side tasks
- [Event Log](../09_internals/03_subsystems/12_persistence-and-eventlog.md) — where side-task events live
