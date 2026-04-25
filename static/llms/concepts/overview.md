# Concepts Overview

> The what and why of Codebolt — the mental models you need to understand the rest of the docs.

# Concepts

The **what** and **why** of Codebolt — the mental models you need to understand the rest of the docs.

This section is explanation, not instruction. Looking for *how to do something*? Try [Guides](../03_guides/01_overview.md). Looking for *what a flag does*? Try [Reference](../05_reference/01_overview.md).

## Where to start

- [Architecture](./02_foundation/01_architecture.md) — the 5-plane model and server subsystems
- [Agents](./03_the-agent/01_agents.md) — what an agent actually is, and the four creation levels
- [Tools and MCP](./03_the-agent/02_tools-and-mcp.md) — how agents act on the world
- [Capabilities](./03_the-agent/03_capabilities.md) — packaged behaviour units
- [Hooks and processors](./04_runtime/01_hooks-and-processors.md) — interception and transformation
- [Context and memory](./04_runtime/02_context-and-memory.md) — what an agent "knows" at any moment
- [Shadow git and checkpoints](./05_persistence/01_shadow-git-and-checkpoints.md) — safe rollback
- [Event log](./05_persistence/02_event-log.md) — the source of truth
- [Guardrails](./06_quality/01_guardrails.md) — keeping individual runs in bounds
- [Multi-agent patterns](./07_multi-agent/01_multi-agent-patterns.md) — when one agent isn't enough
- [Orchestration flows](./07_multi-agent/02_orchestration-flows.md) — how patterns become runnable graphs
- [Dispute resolution](./07_multi-agent/03_dispute-resolution.md) — the four-layer conflict management framework
- [Evals and optimization](./06_quality/02_evals-and-optimization.md) — measuring and improving agent quality over time
- [The planning system](./08_planning/01_planning-system.md) — how Roadmap, Specs, UI Flow, Requirement Plan, Action Plan, and Tasks form a coherent stack

## How concepts relate to the rest of the docs

| You want to… | Go to |
|---|---|
| Understand what something **is** | Concepts (here) |
| **Use** it in the desktop app or CLI | Using Codebolt |
| **Follow steps** to accomplish a task | Guides |
| **Build** custom agents/tools/providers | Build on Codebolt |
| Look up an **API or schema** | Reference |
