# Running Agents

> Same underlying runtime, multiple ways to start a run

![Running Agents](/productImages/agents/running_agent.png)

Same underlying runtime, multiple ways to start a run. Pick the surface that matches what you're doing — interactive work in chat, scripted runs from the CLI, fixed pipelines via flows, or autonomous background runs via triggers.

## Starting an interactive run

## Agent flows

When you want a fixed pipeline instead of a chat loop, run a [flow](../../04_build-on-codebolt/08_multi-agent-orchestration/04_agent-flows.md). The flow runtime reads a declarative graph (nodes = agents, edges = data flow) and executes it; each node is still a normal agent run, the flow is just wiring.

Use flows for repeatable multi-agent patterns. See [Reading a flow](../07_multi-agent-usage/03_reading-a-flow.md).

## Background triggers

Some agents run without you starting them. A background agent declares `triggers:` in its manifest:

```yaml
triggers:
  - type: cron
    schedule: "0 9 * * 1"     # Mondays at 9 AM
  - type: file_change
    pattern: "src/**/*.ts"
  - type: webhook
    path: /hooks/my-agent
```

When the trigger fires, the agent runs. Results land in the **Background Agents** panel (desktop) or via `codebolt agent history` (CLI).

Use for **scheduled audits** ("every Monday, run the reviewer on last week's changes"), **reactive work** ("when any file under `schema/` changes, regenerate types"), and **webhook integrations** ("when GitHub posts a PR event, run a reviewer and comment").

## Watching a running agent

Every phase — deliberate, execute, reflect — appears with timing and inputs/outputs. Nothing is hidden.

## Stopping a running agent

There are two flavours: **graceful** (lets the agent finish its current phase, emit a clean `run.stopped` event, flush memory, exit) and **force** (immediate kill, run marked `killed` with reason `forced`). Use force only when graceful doesn't respond.

## Interrupting to add information

If the agent is mid-task and you realise it's missing something, **don't stop it — interject**. Type a new message while the agent is working; it queues up and is delivered at the next phase boundary. The agent gets "user added context mid-run" as part of its next deliberation.

This is different from stopping and starting a new turn — the queued message shares the same thread and context.

## Running multiple agents at once

- **Different tabs** — independent, parallel. Each has its own agent.
- **Child agents** — one agent spawns another via `codebolt_agent.start`. The child runs as a nested run. See [Agent run end-to-end](../../04_build-on-codebolt/09_internals/04_data-flow-walkthroughs/agent-run-end-to-end.md).
- **Flow** — a declared multi-agent pipeline, graph-based.
- **Swarm** — a dynamic group of cooperating agents. See [Running a swarm](../07_multi-agent-usage/02_running-a-swarm.md).

All of these are bounded by server-wide limits: max concurrent agent processes, max spawn rate, etc. See [Self-hosting → Scaling](../../04_build-on-codebolt/10_self-hosting/01_overview.md) if you hit them.

## Agent history

Every run is recorded — successful or failed, from any starting point.

Each entry has the run ID, agent, outcome, duration, token usage, cost, and a link to the trace.

## Limits and budgets

Every agent has limits in its manifest:

- `max_tool_calls` — stop after N tool calls
- `max_tokens` — stop when total tokens exceed N
- `max_wall_time_seconds` — stop after N seconds of real time
- `max_cost_usd` — stop when cumulative cost exceeds $N

Hitting any of these stops the run with terminal state `killed` and reason `budget_<kind>`. You can raise the limit for a specific run with `--limits` on the CLI or by editing the agent's yaml.

## Monitoring in the UI

### Running Agent panel

Open via the **Execution dropdown → Running Agent** in the bottom bar. The panel shows every agent process currently executing with:

- **Agent name and ID** — which agent is running
- **Thread link** — click to jump to its conversation thread
- **Status** — current phase (`thinking`, `executing tool`, `waiting`, etc.)
- **Duration** — how long the run has been active
- **Token usage** — cumulative input/output tokens this run
- **Stop button** — immediately terminates the agent process

The panel refreshes in real time. When a run completes it disappears from the list; the thread is marked `completed`.

### Background Agents panel

Open via **Execution dropdown → Background Agents**. Background agents run without a visible chat thread. They are started by lifecycle hooks, scheduled triggers, or another agent delegating work asynchronously.

An agent moves from the active panel to Background Agents when:
- Its initiating chat tab is closed but the process is still running
- It was started programmatically without a user-facing thread
- It was detached via `codebolt.run.detach()` in agent code

### System alert notifications

The **bell icon** (top-right of the bottom bar) shows a progress bar entry for every active agent. Click a notification to jump to that agent's thread without opening the Running Agent panel.

## See also

- [What is an agent](./01_what-is-an-agent.md)
- [Agent Debug](../05c_agent-observability/02_agent-debug.md)
- [Thread Panel](./08_thread-panel.md)
- [CLI → Agent commands](../02_surfaces/03_cli/02_agent-commands.md)
- [Agent Subsystem (internals)](../../04_build-on-codebolt/09_internals/03_subsystems/01_agent-subsystem.md)
