---
sidebar_position: 4
title: Background Agent
description: A background agent is a run tracked by the dedicated Background Agents panel
---

# Background Agent

A background agent is a run tracked by the dedicated **Background Agents** panel. In the current implementation, these runs are started as explicit background executions and are managed separately from the normal chat flow.

## What the panel does

Open **Execution dropdown → Background Agents**.

The panel is backed by the server's `/background-agents` endpoints and a dedicated background-agent WebSocket. It gives you:

- A live **Active** list for runs that are still executing
- A **History** list for completed, failed, or cancelled background runs
- A **Start** action to launch a new background run from the panel
- A **Stop** action for active background runs
- Per-run status, start time, duration, optional task text, and any surfaced error message

If log entries are available for a run, you can expand that run and inspect them in the panel.

## Starting a background agent

Click the **+** button in the Background Agents panel:

- Choose an installed, remix, or local agent
- Optionally enter a task
- Start the run

The server starts that agent with background execution tracking enabled, and the run appears in the panel immediately.

## How background runs are tracked

Background runs are stored as background executions on the server side. They are exposed through:

- `GET /background-agents` for active plus historical background runs
- `POST /background-agents/start` to start one
- `POST /background-agents/:instanceId/stop` to stop one
- `ws://.../background-agent-ws` for live updates

Each background run is started with a dedicated background execution record and a generated background thread id.

## When to use them

Background agents are a good fit for:

- Long-running analysis you do not want in the main chat
- Utility agents started from the panel and reviewed later
- Internal product features that launch silent background work

## Things to keep in mind

- These runs are tracked separately from the dedicated Background Agents UI, not just as normal chat tabs.
- The panel shows both active runs and persisted history.
- You can stop a background run directly from the panel.

## See also

- [Running Parallel Agents](./02_running-parallel-agents.md)
- [Sub Agent](./05_sub-agent.md)
- [Running Agents](../04_agents/03_running-agents.md)
