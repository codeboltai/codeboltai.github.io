---
sidebar_position: 1
title: Build on Codebolt
---

# Build on Codebolt

This section is for developers extending Codebolt. If you want to *use* Codebolt, start at [Using Codebolt](../02_using-codebolt/01_overview.md). If you want to follow a specific how-to, try [Guides](../03_guides/01_overview.md). Everything here is for people writing code that plugs into the server.

## The extension surface at a glance

Codebolt exposes seven extension points. Each has its own subsection:

| Extension point | What it is | Start here |
|---|---|---|
| **Custom agents** | The main unit of extension. A program the server spawns to handle tasks. | [Custom Agents](./02_custom-agents/01_overview.md) |
| **Processors** | Reusable pieces of the agent loop (context modifiers, tool validators, etc.). | [Processors](./03_processors/01_what-are-processors.md) |
| **Custom tools / MCP** | Tools agents can call. Built-in, MCP server, or capability bundle. | [Custom Tools & MCP](./04_custom-tools-and-mcp/01_overview.md) |
| **Custom providers** | LLM, embedding, or remote execution providers. | [Custom Providers](./05_custom-providers/01_llm-provider.md) |
| **Hooks & capabilities** | Intercept events without owning the loop. | [Hooks](./06_hooks-and-capabilities/01_hooks-overview.md) |
| **Orchestration** | Multi-agent design — swarms, flows, patterns. | [Orchestration Design](./07_orchestration-design/01_overview.md) |
| **Internals** | How the server works — for devs who need to extend intelligently. | [Internals](./08_internals/01_architecture-overview.md) |

Plus [Self-Hosting](./09_self-hosting/01_overview.md) for teams running the server themselves and [Remote Execution](./10_remote-execution.md) for distributed agent runs.

## Which one do I need?

A decision guide:

- **I want an AI specialised for my codebase.** → [Custom Agents](./02_custom-agents/01_overview.md). Start at level 0 (remix), graduate to level 1 (framework) only if you need to.
- **I want to give agents access to my internal APIs / databases / tools.** → [Custom Tools & MCP](./04_custom-tools-and-mcp/01_overview.md). MCP server is usually the right answer.
- **I want a new LLM provider or a local inference backend.** → [Custom Providers → LLM Provider](./05_custom-providers/01_llm-provider.md).
- **I want to intercept or modify agent behaviour project-wide** (redact secrets, enforce policies, log tool calls to my SIEM). → [Hooks](./06_hooks-and-capabilities/01_hooks-overview.md). Hooks are cheap; full agents are expensive. Start here.
- **I want to modify how context is assembled.** → [Processors](./03_processors/01_what-are-processors.md) + a custom processor.
- **I want several agents to cooperate on a task.** → [Orchestration Design](./07_orchestration-design/01_overview.md). Read [When to use multi-agent](./07_orchestration-design/02_when-multi-agent.md) first.
- **I need to run the server myself.** → [Self-Hosting](./09_self-hosting/01_overview.md).
- **I want to understand the whole system.** → [Internals → Architecture Overview](./08_internals/01_architecture-overview.md). Then pick subsystems as you need them.

## The level-zero mindset

Codebolt is designed so you almost never need to modify it to get what you want. The extension points, in order of effort:

1. **Configuration.** `.codebolt/` files in your project: rules, context rules, hook definitions, flow graphs. Often enough for real use cases. No code at all.
2. **Remix an existing agent.** Change its prompt, tools, or model without forking its code. See [Level 0 — Remix](./02_custom-agents/03_creation-levels/level-0-remix.md).
3. **Write a hook.** Intercept one specific event. Tens of lines of code.
4. **Build an MCP server.** Give agents new capabilities. Usually a small standalone program.
5. **Build a custom agent from the framework.** Full control over the loop but with batteries included. See [Level 1 — Framework](./02_custom-agents/03_creation-levels/level-1-framework.md).
6. **Build on `codeboltjs` directly.** Everything the framework gives you and nothing you don't want. [Level 2](./02_custom-agents/03_creation-levels/level-2-codeboltjs.md).
7. **Write against the raw WebSocket protocol.** Only if you need something no level above allows. [Level 3](./02_custom-agents/03_creation-levels/level-3-raw-websocket.md).

**Start at the top and stop as soon as you have what you need.** Most extensions live at level 1-4.

## Writing for agents vs writing for humans

One mental shift to make early: the code you write in Build is consumed by an LLM in addition to (or instead of) humans. That changes what "good" means:

- **Tool descriptions matter more than doc comments.** An LLM chooses which tool to call based on its description. A vague description means wrong tool choices.
- **Error messages are data for a reasoning loop.** "Failed to read file" is useless; "Failed to read file: path does not exist, nearest matches: …" lets the agent recover.
- **Schemas are contracts with the LLM.** If your tool takes `{ path: string }` but the agent keeps passing `{ file: string }`, your schema is the bug, not the agent.
- **Idempotency is a feature.** Agents retry. Tools that are safe to call twice are better than tools that aren't.

These aren't rules, just things to keep in mind as you write.

## See also

- [Architecture Overview](./08_internals/01_architecture-overview.md) — the mental model of the server
- [Custom Agents Overview](./02_custom-agents/01_overview.md)
- [Custom Tools Overview](./04_custom-tools-and-mcp/01_overview.md)
- [Orchestration Design](./07_orchestration-design/01_overview.md)
