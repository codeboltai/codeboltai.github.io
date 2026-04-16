---
sidebar_position: 1
title: Build on Codebolt
---

import SystemArchitecture from '@site/src/components/diagrams/SystemArchitecture';

# Build on Codebolt

This section is for developers extending Codebolt. If you want to *use* Codebolt, start at [Using Codebolt](../02_using-codebolt/01_overview.md). If you want to follow a specific how-to, try [Guides](../03_guides/01_overview.md). Everything here is for people writing code that plugs into the server.

## The system at a glance

The **Codebolt server** is the execution engine. It owns files, memory, sub-agents, tool execution, the event log, guardrails — everything stateful. Around it, four external surfaces let you build on top without forking the server. Inside it, a handful of internal extension points let you reshape the agent loop without rewriting it.

<SystemArchitecture />

- **Custom UIs** — build your own chat panel, CLI, or editor extension using the [`clientsdk`](./04_custom-uis/01_overview.md), a wrapper over the server's WebSocket protocol and HTTP routes.
- **Custom Agents** — write agents with [`codeboltjs`](./02_creating-agents/01_overview.md), or bring your own framework (Vercel AI SDK, LangChain) via the [adapter layer](./02_creating-agents/08_framework-adapters.md). Agents drive the server over WebSocket.
- **Plugins** — extend the application itself with the [`pluginSdk`](./05_plugins/01_overview.md): gateway integrations, execution plugins, UI extensions, hooks, and custom LLM providers. Plugins live alongside the server and talk to it over the plugin bus.
- **Remote Environment Providers** — federate across machines. A [remote environment provider](./06_remote-env-providers/01_llm-provider.md) is typically another Codebolt server instance (e.g. `e2b`, a remote sandbox, or a peer workstation) that the local server proxies work to.

Inside the server, you can also extend the agent loop *without* rewriting it — [**capabilities**](./03_agent-extensions/02_capabilities/01_overview.md), [**skills**](./03_agent-extensions/03_skills/01_overview.md), [**action blocks**](./03_agent-extensions/05_action-blocks/01_overview.md), [**agent blocks**](./03_agent-extensions/06_agent-blocks.md), and more are all configurable from the same `.codebolt/` project surface. See [Agent Extensions](./03_agent-extensions/01_overview.md).

## The extension surface at a glance

Codebolt exposes these extension points. Agent customization now splits into two top-level sections: create a new agent, or extend existing agents without rewriting them.

| Extension point | What it is | Start here |
|---|---|---|
| **Creating Agents** | Write or wrap agents that show up in the picker | [Creating Agents](./02_creating-agents/01_overview.md) |
| **Agent Extensions** | Shared primitives agents consume: skills, capabilities, MCP tools, and blocks | [Agent Extensions](./03_agent-extensions/01_overview.md) |
| **Custom UIs** | Build your own interface on top of the server | [Custom UIs](./04_custom-uis/01_overview.md) |
| **Plugins** | Extend the application runtime — gateways, execution plugins, UI panels, hooks, providers | [Plugins](./05_plugins/01_overview.md) |
| **Remote Environment Providers** | LLM, embedding, or remote execution backends | [Remote Environment Providers](./05_plugins/06_llm-provider.md) |
| **Eval & Optimization** | Measure, refine, and tune agents | [Eval & Optimization](./07_eval-and-optimization/01_overview.md) |
| **Orchestration** | Multi-agent design — swarms, flows, patterns. | [Orchestration Design](./08_orchestration-design/01_overview.md) |
| **Internals** | How the server works — for devs who need to extend intelligently. | [Internals](./09_internals/01_architecture-overview.md) |

Plus [Self-Hosting](./10_self-hosting/01_overview.md) for teams running the server themselves and [Remote Execution](./11_remote-execution.md) for distributed agent runs.

## Which one do I need?

A decision guide:

- **I want an AI specialised for my codebase.** → [Creating Agents](./02_creating-agents/01_overview.md). Start at level 0 (remix), graduate to level 1 (framework) only if you need to.
- **I want my agents to gain a capability without rewriting them.** → [Agent Extensions](./03_agent-extensions/01_overview.md). Capabilities, skills, MCP tools, action blocks.
- **I want to give agents access to my internal APIs / databases / tools.** → [Agent Extensions → MCP Tools](./03_agent-extensions/04_mcp-tools/01_overview.md). MCP server is usually the right answer.
- **I want to run Claude Code (or similar) as a Codebolt agent.** → [Third-Party Agents](./02_creating-agents/04_third-party-agents.md).
- **I want to build agents using Vercel AI SDK or LangChain.** → [Framework Adapters](./02_creating-agents/08_framework-adapters.md).
- **I want a new LLM provider or a local inference backend.** → [LLM Provider](./06_remote-env-providers/01_llm-provider.md).
- **I want to intercept or modify application behaviour project-wide** (gateways, hooks, execution routing, provider registration, embedded panels). → [Plugins](./05_plugins/01_overview.md).
- **I want to build my own UI on top of Codebolt.** → [Custom UIs](./04_custom-uis/01_overview.md).
- **I want to measure and tune my agent systematically.** → [Eval & Optimization](./07_eval-and-optimization/01_overview.md).
- **I want several agents to cooperate on a task.** → [Orchestration Design](./08_orchestration-design/01_overview.md). Read [When to use multi-agent](./08_orchestration-design/02_when-multi-agent.md) first.
- **I need to run the server myself.** → [Self-Hosting](./10_self-hosting/01_overview.md).
- **I want to understand the whole system.** → [Internals → Architecture Overview](./09_internals/01_architecture-overview.md). Then pick subsystems as you need them.

## The level-zero mindset

Codebolt is designed so you almost never need to modify it to get what you want. The extension points, in order of effort:

1. **Configuration.** `.codebolt/` files in your project: rules, context rules, hook definitions, flow graphs. Often enough for real use cases. No code at all.
2. **Install an MCP server or capability.** Every agent in the project gains new tools / behaviour. See [Agent Extensions](./03_agent-extensions/01_overview.md).
3. **Remix an existing agent.** Change its prompt, tools, or model without forking its code. See [Level 0 — Remix](./02_creating-agents/03_creation-levels/level-0-remix.md).
4. **Write a plugin.** Extend one part of the application without forking the server. See [Plugins](./05_plugins/01_overview.md).
5. **Build a skill or action block.** Reusable competency any agent can call. See [Skills](./03_agent-extensions/03_skills/01_overview.md).
6. **Build an MCP server.** Give agents new capabilities. Usually a small standalone program.
7. **Build a custom agent from the framework.** Full control over the loop but with batteries included. See [Level 1 — Framework](./02_creating-agents/03_creation-levels/level-1-framework.md).
8. **Build on `codeboltjs` directly.** Everything the framework gives you and nothing you don't want. [Level 2](./02_creating-agents/03_creation-levels/level-2-codeboltjs.md).
9. **Write against the raw WebSocket protocol.** Only if you need something no level above allows. [Level 3](./02_creating-agents/03_creation-levels/level-3-raw-websocket.md).

**Start at the top and stop as soon as you have what you need.** Most extensions live at level 1-6.

## Writing for agents vs writing for humans

One mental shift to make early: the code you write in Build is consumed by an LLM in addition to (or instead of) humans. That changes what "good" means:

- **Tool descriptions matter more than doc comments.** An LLM chooses which tool to call based on its description. A vague description means wrong tool choices.
- **Error messages are data for a reasoning loop.** "Failed to read file" is useless; "Failed to read file: path does not exist, nearest matches: …" lets the agent recover.
- **Schemas are contracts with the LLM.** If your tool takes `{ path: string }` but the agent keeps passing `{ file: string }`, your schema is the bug, not the agent.
- **Idempotency is a feature.** Agents retry. Tools that are safe to call twice are better than tools that aren't.

These aren't rules, just things to keep in mind as you write.

## See also

- [Architecture Overview](./09_internals/01_architecture-overview.md) — the mental model of the server
- [Creating Agents](./02_creating-agents/01_overview.md) — build or wrap agents
- [Agent Extensions](./03_agent-extensions/01_overview.md) — shared capabilities agents consume
- [Agent Extensions → MCP Tools](./03_agent-extensions/04_mcp-tools/01_overview.md)
- [Orchestration Design](./08_orchestration-design/01_overview.md)
