---
sidebar_position: 1
title: Debug & Observability Overview
---

# Debug & Observability

Codebolt provides observability tools to inspect the environment, plugin traffic, diagnose errors, and visualise multi-agent runs. All debug panels are accessible from the **Agents** and **Debug Tools** dropdowns in the bottom bar.

## Panels in this section

| Panel | Purpose |
|---|---|
| [Environment & Plugin Debug](./04_environment-and-plugin-debug.md) | Resolved env vars, plugin WebSocket messages and errors |
| [Problems](./05_problems.md) | Syntax errors, lint warnings, and type errors across the workspace |
| [Chat Canvas](./06_chat-canvas.md) | Freeform visual workspace for monitoring multi-agent runs |

## Related code observability

For structural code understanding and dependency exploration, see **[Code Observability](../09b_code-observability/01_overview.md)**:

| Panel | Location |
|---|---|
| Codemap (project structure and dependency graph) | [Code Observability → Codemap](../09b_code-observability/02_codemap.md) |

## Agent-focused observability

For agent runs, LLM traces, and the per-instance log stream see the **[Agent Observability](../05c_agent-observability/01_overview.md)** section:

| Panel | Location |
|---|---|
| Agent Debug (log stream, tool calls, LLM calls) | [Agent Observability → Agent Debug](../05c_agent-observability/02_agent-debug.md) |
| AI Debug & Console (raw LLM I/O, stdout/stderr) | [Agent Observability → AI Debug & Console](../05c_agent-observability/03_ai-debug-and-console.md) |
| Narrative Graph (visual run replay) | [Agents → Narrative Graph](../04_agents/09_narrative-graph.md) |

## Quick debugging workflow

1. **Agent gives unexpected output** → [Agent Debug](../05c_agent-observability/02_agent-debug.md) — check the exact prompt and tool calls
2. **Command failed** → [AI Debug & Console](../05c_agent-observability/03_ai-debug-and-console.md#console) — raw error output
3. **Wrong environment variable** → [Environment Debug](./04_environment-and-plugin-debug.md) — resolved value
4. **Code has errors** → [Problems](./05_problems.md) — lint/type errors
5. **Need to understand dependency impact** → [Codemap](../09b_code-observability/02_codemap.md) — trace imports and relationships before editing
6. **Agent took a strange path** → [Narrative Graph](../04_agents/09_narrative-graph.md) — visual decision replay
7. **Monitor a swarm run** → [Chat Canvas](./06_chat-canvas.md) — see all agents updating in real time
