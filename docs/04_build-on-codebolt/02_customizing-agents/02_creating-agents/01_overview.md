---
sidebar_position: 1
title: Custom Agents Overview
---

# Custom Agents

Custom agents are the main extension point in Codebolt. If you want an AI specialised for your codebase, your domain, your coding conventions — this is where you build it.

## What a custom agent is

An agent is a program the server spawns when there's work to do. It:

1. Receives a task (a chat message, a delegation from another agent, a trigger from a flow).
2. Runs a loop: assemble context → call the LLM → execute tool calls → reflect → repeat.
3. Eventually reports done, fails, or gets interrupted.

Every agent runs in its own process, supervised by [`AgentProcessManager`](../08_internals/03_subsystems/01_agent-subsystem.md). This isolation means your agent can crash, hang, or leak memory without affecting anything else.

## The four creation levels

There's not one way to build an agent; there are four, at increasing levels of effort and control.

| Level | Name | What you write | Good for |
|---|---|---|---|
| **0** | [Remix](./03_creation-levels/level-0-remix.md) | A YAML file that overrides an existing agent's prompt, model, or tools | Most use cases. Seriously. Start here. |
| **1** | [Framework](./03_creation-levels/level-1-framework.md) | A small amount of code using the Codebolt agent framework | You need custom behaviour but want batteries included |
| **2** | [codeboltjs](./03_creation-levels/level-2-codeboltjs.md) | Code directly against the `codeboltjs` SDK | You need a non-standard loop shape |
| **3** | [Raw WebSocket](./03_creation-levels/level-3-raw-websocket.md) | Speak the wire protocol directly | You're writing an agent in a language the SDK doesn't cover |

**The most important thing to know:** level 0 and level 1 cover the vast majority of real use cases. Level 2 is for people building infrastructure on top of Codebolt. Level 3 is for people writing Codebolt agents in Go, Rust, or Python. Don't start higher than you need.

## The framework (level 1) in one paragraph

At level 1 you write a small TypeScript file that:

- Declares an `agent.yaml` with metadata (name, description, default model, allowed tools).
- Exports a handler that receives a typed input and returns a typed output.
- Optionally imports **patterns** (Composable, Builder, Processor, Unified — see [Patterns](./05_patterns/overview.md)) to structure the handler without writing boilerplate.
- Optionally registers **processors** that modify the prompt assembly, tool calling, or response handling (see [Processors](../03_processors/01_what-are-processors.md)).

The framework handles: the agent loop, context assembly, tool validation, memory writes, event log integration, heartbeats. You handle: what makes your agent different from the default.

## Agent patterns

You don't write the agent loop from scratch at level 1. You pick a pattern:

- **[Unified Agent](./05_patterns/unified-agent.md)** — the recommended default. One config, one handler, sensible defaults. Start here.
- **[Composable](./05_patterns/composable-pattern.md)** — build the agent out of small reusable pieces (agent, tools, orchestrator, workflow).
- **[Builder](./05_patterns/builder-pattern.md)** — explicit builder objects for initial prompt, LLM output handling, followup prompt. Used when you need fine control over each phase.
- **[Processor](./05_patterns/processor-pattern.md)** — decompose by loop phase (message modifier, LLM agent step, tool executor). The lowest-level of the four.

Pick Unified unless you have a specific reason not to.

## The anatomy of an agent

Every agent has:

- **An `agent.yaml`** — metadata, manifest, entry points. See [agent.yaml reference](./04_agent-anatomy/agent-yaml.md).
- **A lifecycle** — start, deliberate, execute, reflect, terminate. See [Lifecycle](./04_agent-anatomy/lifecycle.md).
- **A context** — the working state carried across phases. See [Context](./04_agent-anatomy/context.md).

These are the same for every agent regardless of level. The levels differ in *how much code you write to express them*.

## Testing and debugging

Agents are programs; test them like programs.

- **Unit tests** — the framework exposes testing helpers. See [Testing and debugging](./06_testing-and-debugging.md).
- **Replay** — any production run can be replayed against a new version of your agent to see if the behaviour changes. Uses the event log.
- **Tracing** — every phase is in the event log with full inputs and outputs. The UI shows it as a tree.

## Publishing

When you're ready, your agent can be:

- **Private to your project** — just a file in `.codebolt/agents/`. No publishing needed.
- **Shared within your org** — pushed to a private registry.
- **Public on the marketplace** — `codebolt agent publish`. See [Publishing](./07_publishing.md).

## See also

- [Quickstart](./02_quickstart.md) — walk through level 0 and level 1 in ~15 min
- [Agent Subsystem internals](../08_internals/03_subsystems/01_agent-subsystem.md) — what happens under the hood
- [Orchestration Design](../07_orchestration-design/01_overview.md) — multi-agent patterns
- [Guide: build your first agent](../../03_guides/02_first-steps/build-your-first-agent.md)
