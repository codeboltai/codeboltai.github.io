---
sidebar_position: 1
title: Debug & Observability Overview
---

# Debug & Observability

Codebolt provides observability tools to inspect code structure, diagnose errors, and visualise multi-agent runs. All debug panels are accessible from the **Agents** and **Debug Tools** dropdowns in the bottom bar.

## Panels in this section

| Panel | Purpose |
|---|---|
| [Codemap & Problems](./05_codemap-and-problems.md) | Dependency graph of the project; syntax errors and lint warnings |
| [Chat Canvas](./06_chat-canvas.md) | Freeform visual workspace for monitoring multi-agent runs |

## Debug panels that live elsewhere

A few debug panels live alongside the feature they inspect, not here:

| Panel | Location |
|---|---|
| Agent Debug (log stream, tool calls, LLM calls) | [Agent Observability → Agent Debug](../05c_agent-observability/02_agent-debug.md) |
| AI Debug & Console (raw LLM I/O, stdout/stderr) | [Agent Observability → AI Debug & Console](../05c_agent-observability/03_ai-debug-and-console.md) |
| Environment Debug (resolved env vars, source priority) | [Multi Environment Coordination → Environment Debug](../08a_environments/04_environment-debug.md) |
| Plugin Debug (plugin WebSocket traffic, connection state) | [Plugin Integrations → Plugin Debug](../08_integrations/07_plugin-debug.md) |
| Narrative Graph (visual run replay) | [Agents → Narrative Graph](../04_agents/09_narrative-graph.md) |

## Quick debugging workflow

1. **Agent gives unexpected output** → [Agent Debug](../05c_agent-observability/02_agent-debug.md) — check the exact prompt and tool calls
2. **Command failed** → [AI Debug & Console](../05c_agent-observability/03_ai-debug-and-console.md#console) — raw error output
3. **Wrong environment variable** → [Environment Debug](../08a_environments/04_environment-debug.md) — resolved value
4. **Plugin disconnected or silent** → [Plugin Debug](../08_integrations/07_plugin-debug.md) — WebSocket traffic and errors
5. **Code has errors** → [Problems](./05_codemap-and-problems.md#problems) — lint/type errors
6. **Agent took a strange path** → [Narrative Graph](../04_agents/09_narrative-graph.md) — visual decision replay
7. **Monitor a swarm run** → [Chat Canvas](./06_chat-canvas.md) — see all agents updating in real time
