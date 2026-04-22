---
sidebar_position: 1
title: Debug & Observability Overview
---

# Debug & Observability

Codebolt provides observability tools to see what an agent is doing, inspect the LLM prompts it received, understand code structure, and diagnose errors. All debug panels are accessible from the **Debug Tools** dropdown in the bottom bar.

## Panels in this section

| Panel | Purpose |
|---|---|
| [AI Debug & Console](./03_ai-debug-and-console.md) | Raw LLM inputs/outputs, token counts, cost estimates, stdout/stderr |
| [Environment & Plugin Debug](./04_environment-and-plugin-debug.md) | Resolved env vars, plugin WebSocket messages and errors |
| [Codemap & Problems](./05_codemap-and-problems.md) | Dependency graph of the project; syntax errors and lint warnings |

## Agent-specific debug panels

The following panels live in the **Agents** section since they are tightly coupled to agent runs:

| Panel | Location |
|---|---|
| Agent Debug (log stream, tool calls, LLM calls) | [Agents → Debugging an Agent](../04_agents/07_debugging-an-agent.md) |
| Narrative Graph (visual run replay) | [Agents → Narrative Graph](../04_agents/09_narrative-graph.md) |

## Quick debugging workflow

1. **Agent gives unexpected output** → [Debugging an Agent](../04_agents/07_debugging-an-agent.md) — check the exact prompt and tool calls
2. **Command failed** → [AI Debug & Console](./03_ai-debug-and-console.md#console) — raw error output
3. **Wrong environment variable** → [Environment Debug](./04_environment-and-plugin-debug.md) — resolved value
4. **Code has errors** → [Problems](./05_codemap-and-problems.md#problems) — lint/type errors
5. **Agent took a strange path** → [Narrative Graph](../04_agents/09_narrative-graph.md) — visual decision replay
