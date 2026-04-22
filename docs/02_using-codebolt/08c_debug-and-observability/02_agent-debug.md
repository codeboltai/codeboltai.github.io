---
sidebar_position: 2
title: Agent Debug
---

# Agent Debug

The Agent Debug panel shows a real-time feed of everything an agent does in the current session — every LLM call, every tool invocation, every result, and every status transition. It is the first place to look when an agent's behaviour is unexpected.

Open via: **Debug Tools dropdown → Agent Debug**

## What the panel shows

The panel is a time-ordered log stream. Each entry is one of:

### LLM Request

Shows the prompt sent to the LLM for a single turn, including:
- System prompt (collapsed by default — click to expand)
- All messages in the context window
- The model name, temperature, and max tokens
- Token count (input)

Expand the entry to read the full prompt. This is the most useful item for diagnosing why an agent said something — if the context was missing key information, you'll see it here.

### LLM Response

The raw text returned by the LLM, streamed token by token. For tool-calling models, includes the structured tool call JSON before the text output.

### Tool Call

Each tool invocation is logged as:
- **Tool name** (e.g., `readFile`, `executeCommand`, `searchFiles`)
- **Input parameters** — the exact arguments the agent passed
- **Result** — the tool's output (collapsed; click to expand)
- **Duration** — how long the tool call took

### Status Event

Phase transitions in the agent loop — `thinking`, `executing`, `reflecting`, `completed`, `failed`. Shows the duration of each phase.

### Error

Any exception thrown by a tool or within the agent loop, with a full stack trace.

## Filtering the log

Use the filter bar at the top to show only specific entry types:

| Filter | Shows |
|---|---|
| All | Everything |
| LLM | Only LLM requests and responses |
| Tools | Only tool calls and results |
| Errors | Only error entries |
| Status | Only phase transitions |

## Multi-agent runs

When a parent agent spawns sub-agents, all sub-agent logs also appear in the Agent Debug panel, grouped by agent ID. Use the **Agent** dropdown at the top to show only one agent's entries.

## Copying debug data

Right-click any log entry → **Copy as JSON** to export the raw event data. Useful for:
- Pasting into a bug report
- Analysing token usage across turns in a spreadsheet
- Sharing a specific LLM call with a colleague

## Live vs history mode

By default, Agent Debug is in **Live** mode — it shows the current run as it happens. Click **History** to switch to a replay of a past run. Select any previous thread from the dropdown to load its full debug log.

## Auto-scroll

The panel auto-scrolls to the latest entry as the agent runs. Click the **lock scroll** button (top-right) to pause auto-scroll and inspect an earlier entry without losing your place.
