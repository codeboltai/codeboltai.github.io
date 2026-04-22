---
sidebar_position: 4
title: Running Agents & Background Agents
---

# Running Agents & Background Agents

Codebolt can run multiple agent processes simultaneously — some tied to an active chat thread, others running silently in the background. Two panels help you track them all.

## Running Agent panel

Open via: **Execution dropdown → Running Agent**

The Running Agent panel shows every agent process currently executing. For each agent:

- **Agent name and ID** — which agent is running
- **Thread link** — click to jump to its conversation thread
- **Status** — what phase the agent is in (`thinking`, `executing tool`, `waiting`, etc.)
- **Duration** — how long it has been running
- **Token usage** — cumulative input/output tokens this run
- **Stop button** — immediately terminates the agent process

The panel auto-refreshes in real time via WebSocket. When a process completes, it disappears from the Running Agent panel and the thread is marked `completed`.

### Stopping an agent

Click **Stop** next to a running agent to send a termination signal. The agent's process ends immediately; its partial output is preserved in the thread. Use this when an agent is stuck in a loop, taking too long, or producing unwanted output.

### Steering a running agent

While an agent is running, you can send a **steering message** from the chat panel without interrupting the current loop. The agent picks it up at the end of its current turn. Use this to redirect mid-run: "Actually, skip the database migration for now."

## Background Agents panel

Open via: **Execution dropdown → Background Agents**

Background agents are processes that run without a visible chat thread. They are typically started by:

- Lifecycle hooks (e.g., a `gitPush` hook that starts a CI agent)
- Scheduled triggers
- Another agent that delegates work asynchronously

The Background Agents panel lists all such processes with the same controls as the Running Agent panel. You can open the thread for any background agent to see its full trace.

### When agents go to the background

An agent moves from the Running Agent panel to Background Agents when:

- Its initiating chat tab is closed but the process is still running
- It was started programmatically without a user-facing thread
- It was explicitly detached by calling `codebolt.run.detach()` in the agent code

## Agent run history

Completed runs are visible in the **Thread Panel** (Execution → Thread Panel). Each completed thread is a permanent record of everything the agent did, including all tool calls and their outputs. See [Thread Panel](./02_thread-panel.md) for details.

## System alerts

The **System Alert** bell icon (top-right of the bottom bar) shows progress notifications for all running agents. Each active agent contributes a progress bar entry — you can monitor multiple concurrent runs without opening the Running Agent panel. Click a notification to jump directly to that agent's thread.
