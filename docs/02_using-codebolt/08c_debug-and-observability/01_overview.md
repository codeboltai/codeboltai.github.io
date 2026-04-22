---
sidebar_position: 1
title: Debug & Observability Overview
---

# Debug & Observability

Codebolt provides a full suite of observability tools so you can see exactly what an agent is doing, why it made a decision, and where something went wrong. All debug panels are accessible from the **Debug Tools** dropdown in the bottom bar.

## Panels at a glance

| Panel | Purpose |
|---|---|
| [Agent Debug](./02_agent-debug.md) | Live tool calls, LLM requests, and agent step output |
| [AI Debug](./03_ai-debug.md) | Raw LLM inputs/outputs and token counts |
| [Console](./03_ai-debug.md#console) | Captured stdout/stderr from agent processes |
| [Environment Debug](./04_environment-debug.md) | Resolved environment variables for the active environment |
| [Plugin Debug](./04_environment-debug.md#plugin-debug) | WebSocket messages and errors from plugin connections |
| [Problems](./05_codemap-and-problems.md#problems) | Syntax errors, lint warnings, type errors across the project |
| [Codemap](./05_codemap-and-problems.md) | Structural dependency graph of the project |
| [Narrative Graph](./06_narrative-graph.md) | Visual execution trace of an agent run |

## Debug Tools dropdown

Click **Debug Tools** in the bottom bar to open a searchable menu. Type to filter panel names.

## Quick debugging workflow

1. **Agent gives unexpected output** → open **Agent Debug** to see the exact prompt and tool calls from that turn
2. **Command failed** → check **Console** for the raw error output
3. **Wrong environment variable** → open **Environment Debug** to see the resolved value
4. **Code has errors** → check **Problems** for lint/type errors
5. **Agent took a strange path** → open **Narrative Graph** to replay the decision tree

## See also

- [Running Agents & Background Agents](../08b_execution-and-tracking/04_running-agents.md) — monitoring live processes
- [Thread Panel](../08b_execution-and-tracking/02_thread-panel.md) — full thread history and traces
