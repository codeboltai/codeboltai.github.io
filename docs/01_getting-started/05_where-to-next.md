---
sidebar_position: 5
title: Where to next
---

# Where to next

You've finished Quickstart and the first-run checklist. Here's how to pick the right rabbit hole based on what you actually want to do.

## I just want to use Codebolt day-to-day

Go to **[Using Codebolt](../02_using-codebolt/01_overview.md)**. It's reference documentation for every feature — the chat panel, tabs, checkpoints, context, Ctrl+K, the agent marketplace, MCP server management, the CLI, integrations. Read pages as you need them.

**First reads in order of usefulness:**
1. [Chat: context and @-mentions](../02_using-codebolt/03_chat/03_context-and-at-mentions.md)
2. [Chat: checkpoints and rollback](../02_using-codebolt/03_chat/04_checkpoints-and-rollback.md)
3. [Agents: running agents](../02_using-codebolt/04_agents/03_running-agents.md)
4. [Tools & MCP: installing MCP servers](../02_using-codebolt/05_tools-and-mcp/02_installing-mcp-servers.md)

## I want to accomplish a specific task

Go to **[Guides & Tutorials](../03_guides/01_overview.md)**. Every guide has one concrete outcome. Examples:

- [Build your first agent](../03_guides/02_first-steps/build-your-first-agent.md)
- [Connect a local model](../03_guides/02_first-steps/connect-a-local-model.md)
- [Code review with an agent](../03_guides/03_everyday-workflows/code-review-with-an-agent.md)
- [Install a third-party MCP server](../03_guides/04_mcp-and-tools/install-a-third-party-mcp-server.md)
- [Build a plan-execute-review flow](../03_guides/05_multi-agent/build-a-plan-execute-review-flow.md)

## I want to build on Codebolt

Go to **[Build on Codebolt](../04_build-on-codebolt/01_overview.md)**. This is the extension surface: custom agents, agent extensions, plugins, custom UIs, remote providers, orchestration design, server internals, self-hosting.

**Suggested reading path by goal:**

| Goal | Start here |
|---|---|
| Build a custom agent for my codebase | [Custom Agents → Overview](../04_build-on-codebolt/02_creating-agents/01_overview.md) → [Quickstart](../04_build-on-codebolt/02_creating-agents/02_quickstart.md) |
| Give agents access to my internal APIs | [MCP Tools → Overview](../04_build-on-codebolt/03_agent-extensions/04_mcp-tools/01_overview.md) |
| Connect a new LLM provider | [Remote Environment Providers → LLM Provider](../04_build-on-codebolt/06_remote-env-providers/01_llm-provider.md) |
| Extend the application without building a new agent | [Plugins → Overview](../04_build-on-codebolt/05_plugins/01_hooks-overview.md) |
| Design a multi-agent workflow | [Orchestration Design → Overview](../04_build-on-codebolt/08_orchestration-design/01_overview.md) |
| Understand how the server actually works | [Internals → Architecture Overview](../04_build-on-codebolt/09_internals/01_architecture-overview.md) |
| Self-host for my team | [Self-Hosting → Overview](../04_build-on-codebolt/10_self-hosting/01_overview.md) |

## I need the exact signature / schema / flag

Go to **[Reference](../05_reference/01_overview.md)**. Mostly auto-generated, always complete:

- [SDK reference (codeboltjs, clientsdk, pluginsdk)](../05_reference/01_overview.md)
- [CLI reference](../05_reference/01_overview.md)
- [Built-in tools](../05_reference/01_overview.md)
- [Protocols (WebSocket, REST, MCP extensions)](../05_reference/01_overview.md)
- [Config schemas](../05_reference/01_overview.md)

## I'm curious how it works under the hood

The **Internals** section was written for you. Start with:

1. [Architecture Overview](../04_build-on-codebolt/09_internals/01_architecture-overview.md) — the five planes, the process model, where data lives.
2. [Agent Subsystem](../04_build-on-codebolt/09_internals/03_subsystems/01_agent-subsystem.md) — what an agent actually is.
3. [Chat message end-to-end](../04_build-on-codebolt/09_internals/04_data-flow-walkthroughs/chat-message-end-to-end.md) — follow one message all the way through.
4. [Memory](../04_build-on-codebolt/09_internals/03_subsystems/04_memory.md) — the layer stack and the ingestion pipeline.

From there, pick subsystems as they become relevant.

## I want to be opinionated about multi-agent

Start with **[When to use multi-agent](../04_build-on-codebolt/08_orchestration-design/02_when-multi-agent.md)** — it will likely talk you *out* of multi-agent for your first project, which is the right answer most of the time. Then:

- [Plan-Execute-Review](../04_build-on-codebolt/08_orchestration-design/03_patterns/plan-execute-review.md) — the one pattern that covers most real cases.
- [Agent Flows](../04_build-on-codebolt/08_orchestration-design/04_agent-flows.md) — how to freeze a pattern into a reusable graph.
- [Review & Merge Design](../04_build-on-codebolt/08_orchestration-design/07_review-and-merge-design.md) — human-in-the-loop without making humans the bottleneck.

## Still not sure?

Default path: **[Using Codebolt → Overview](../02_using-codebolt/01_overview.md)**. Everything else is accessible from there.
