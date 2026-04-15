---
sidebar_position: 1
title: Creating Agents
---

# Creating Agents

This subsection is about *authoring* agents. If you want an AI specialised for your codebase, your domain, your coding conventions — this is where you build it.

For *extending* existing agents without writing a new one, see [Agent Extensions](../03_agent-extensions/01_overview.md).

## What a custom agent is

An agent is a program the server spawns when there's work to do. It:

1. Receives a task (a chat message, a delegation from another agent, a trigger from a flow).
2. Runs a loop: assemble context → call the LLM → execute tool calls → reflect → repeat.
3. Eventually reports done, fails, or gets interrupted.

Every agent runs in its own process, supervised by [`AgentProcessManager`](../09_internals/03_subsystems/01_agent-subsystem.md). This isolation means your agent can crash, hang, or leak memory without affecting anything else.

## Five creation paths

There are five ways to bring an agent into Codebolt, from lowest to highest authorship cost:

| Path | What you write | Good for |
|---|---|---|
| **[Level 0 — Remix](./03_creation-levels/level-0-remix.md)** | A YAML file overriding an existing agent's prompt, model, or tools | Most use cases. Start here. |
| **[Level 1 — Framework](./03_creation-levels/level-1-framework.md)** | A small TypeScript file using the Codebolt agent framework | Custom behaviour with batteries included |
| **[Level 2 — codeboltjs](./03_creation-levels/level-2-codeboltjs.md)** | Code directly against the `codeboltjs` SDK | Non-standard loop shape |
| **[Level 3 — Raw WebSocket](./03_creation-levels/level-3-raw-websocket.md)** | The wire protocol directly | Languages the SDK doesn't cover |
| **[Third-Party Wrapping](./04_third-party-agents.md)** | An adapter around an existing external agent | Running Claude Code / Codex / Cursor etc. as a Codebolt agent |

Plus one sideways path: **[Framework Adapters](./08_framework-adapters.md)** let you author at level 1 but using Vercel AI SDK, LangChain, or similar frameworks instead of the native Codebolt framework.

**The most important thing to know:** level 0 and level 1 cover the vast majority of real use cases. Level 2 is for people building infrastructure on top of Codebolt. Level 3 is for people writing Codebolt agents in Go, Rust, or Python. Don't start higher than you need.

## The framework (level 1) in one paragraph

At level 1 you write a small TypeScript file that:

- Declares a `codeboltagent.yaml` with metadata (name, description, default model, allowed tools).
- Exports a handler that receives a typed input and returns a typed output.
- Optionally imports **patterns** (Unified, Composable, Builder, Processor — see [Patterns](./06_patterns/overview.md)) to structure the handler without writing boilerplate.
- Optionally registers **processors** that modify the prompt assembly, tool calling, or response handling (see [Processors](./07_processors/01_what-are-processors.md)).

The framework handles: the agent loop, context assembly, tool validation, memory writes, event log integration, heartbeats. You handle: what makes your agent different from the default.

Then your agent consumes [Agent Extensions](../03_agent-extensions/01_overview.md) — skills, action blocks, MCP tools — the same way every other agent does.

## Agent patterns

You don't write the agent loop from scratch at level 1. You pick a pattern:

- **[Unified Agent](./06_patterns/unified-agent.md)** — the recommended default. One config, one handler, sensible defaults. Start here.
- **[Composable](./06_patterns/composable-pattern.md)** — build the agent out of small reusable pieces (agent, tools, orchestrator, workflow).
- **[Builder](./06_patterns/builder-pattern.md)** — explicit builder objects for initial prompt, LLM output handling, followup prompt. Used when you need fine control over each phase.
- **[Processor](./06_patterns/processor-pattern.md)** — decompose by loop phase (message modifier, LLM agent step, tool executor). The lowest-level of the four.

Pick Unified unless you have a specific reason not to.

## The anatomy of an agent

Every agent has:

- **A `codeboltagent.yaml`** — metadata, manifest, entry points. See [agent.yaml reference](./05_agent-anatomy/agent-yaml.md).
- **A lifecycle** — start, deliberate, execute, reflect, terminate. See [Lifecycle](./05_agent-anatomy/lifecycle.md).
- **A context** — the working state carried across phases. See [Context](./05_agent-anatomy/context.md).

These are the same for every agent regardless of level. The levels differ in *how much code you write to express them*.

## Testing and debugging

Agents are programs; test them like programs.

- **Unit tests** — the framework exposes testing helpers. See [Testing and debugging](./09_testing-and-debugging.md).
- **Replay** — any production run can be replayed against a new version of your agent to see if the behaviour changes. Uses the event log.
- **Tracing** — every phase is in the event log with full inputs and outputs. The UI shows it as a tree.

For systematic improvement across many runs, see [Eval & Optimization](../07_eval-and-optimization/01_overview.md).

## Publishing

When you're ready, your agent can be:

- **Private to your project** — just a file in `.codebolt/agents/`. No publishing needed.
- **Shared within your org** — pushed to a private registry.
- **Public on the marketplace** — `codebolt agent publish`. See [Publishing](./10_publishing.md).

## See also

- [Quickstart](./02_quickstart.md) — walk through level 0 and level 1 in ~15 min
- [Agent Extensions](../03_agent-extensions/01_overview.md) — what any agent can consume
- [Agent Subsystem internals](../09_internals/03_subsystems/01_agent-subsystem.md) — what happens under the hood
- [Orchestration Design](../08_orchestration-design/01_overview.md) — multi-agent patterns
