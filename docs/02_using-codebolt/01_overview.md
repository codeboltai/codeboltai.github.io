---
sidebar_position: 1
title: Overview
---

# Using Codebolt

Reference documentation for every feature. Read pages as you need them — this isn't meant to be read cover-to-cover.

If you're looking for a step-by-step walkthrough of a specific task, try [Guides & Tutorials](../03_guides/01_overview.md) instead. If you're writing code against Codebolt, see [Build on Codebolt](../04_build-on-codebolt/01_overview.md).

## Feature map

### The interface

The app is divided into a few durable areas:

- **Project panel** — file tree, search, git status, codemap entry.
- **Chat tabs** — one or more conversations, each bound to an agent and model. See [Chat Overview](./03_chat/01_overview.md).
- **Status bar** — connection, active agents, diagnostics.
- **Command palette** (Ctrl+K) — inline edits and quick actions. See [Inline edit and Ctrl+K](./03_chat/05_inline-edit-and-ctrl-k.md).
- **Settings** — providers, agents, guardrails, themes, profiles. Per-workspace and per-user layers.

See [The Interface](./02_surfaces/02_desktop-app/01_workspace-and-projects.md) for the detail.

### Chat

The main way you interact with agents. Key features:

- **Tabs and history.** Multiple parallel conversations, each with its own thread.
- **Checkpoints.** Every change is rollback-able via shadow git, without touching your real git. See [Checkpoints and rollback](./03_chat/04_checkpoints-and-rollback.md).
- **@-mentions and context.** Explicitly add files, symbols, or past turns to the prompt. See [Context and @-mentions](./03_chat/03_context-and-at-mentions.md).
- **Ctrl+K inline edit.** Edit a selection in place without opening a chat. See [Inline edit](./03_chat/05_inline-edit-and-ctrl-k.md).
- **Model picker per tab.** Different tabs can use different models, even different providers.

### Agents

Codebolt ships with default agents and supports more from the marketplace. Agents are real processes; each runs isolated.

- **Built-in agents** — a generalist, a reviewer, a planner, and a few specialists. See [Built-in agents](./04_agents/02_built-in-agents.md).
- **Marketplace** — install community-authored agents. See [The marketplace](./04_agents/04_the-marketplace.md).
- **Portfolios** — curate which agents are available in which workspace. See [Agent portfolios](./04_agents/06_agent-portfolios.md).
- **Debugging** — inspect a running or failed agent. See [Debugging an agent](./04_agents/07_debugging-an-agent.md).

### Tools & MCP

Agents use tools to *do* things. Three flavours, all invoked through the same interface:

- **Built-in tools.** Filesystem, git, browser, debug, memory, etc. See the full list in [Built-in Tools reference](../05_reference/01_overview.md).
- **MCP servers.** Community or custom. See [Installing MCP servers](./05_tools-and-mcp/02_installing-mcp-servers.md).
- **Capabilities.** Bundles that include tools + prompts + UI. See [Managing MCP servers](./05_tools-and-mcp/03_managing-mcp-servers.md).

### CLI and TUI

Not everyone wants a desktop app. The CLI provides the same surface over a terminal, and the TUI gives you a full-screen terminal interface. See [CLI & TUI](./02_surfaces/03_cli/01_overview.md).

### Multi-agent usage

Running swarms and flows. The *design* side lives under [Build on Codebolt](../04_build-on-codebolt/08_multi-agent-orchestration/01_overview.md); the *running* side is here:

- [Running a swarm](./07_multi-agent-usage/02_running-a-swarm.md)
- [Reading a flow](./07_multi-agent-usage/03_reading-a-flow.md)
- [Review and merge](./07_multi-agent-usage/04_review-and-merge.md)
- [Observability and tracing](./07_multi-agent-usage/05_observability-and-tracing.md)

### Integrations

LLM providers, local models, git, browser control, mail, calendar, chat widget. See [Integrations](./08_integrations/01_llm-providers.md).

### Account

Sign-in, teams, usage, billing. See [Account](./09_account/01_sign-in.md).

## When something goes wrong

See [Troubleshooting](./10_troubleshooting/01_common-issues.md). If you're filing a bug, [Reporting bugs](./10_troubleshooting/03_reporting-bugs.md) has the template.
