# Multi-Agent Usage Overview

> This section covers running multi-agent work — swarms, flows, review/merge — as a user

# Multi-Agent Usage

This section covers **running** multi-agent work — swarms, flows, review/merge — as a user. If you want to *design* multi-agent patterns, that's in [Build on Codebolt → Multi-Agent Orchestration](../../04_build-on-codebolt/08_multi-agent-orchestration/01_overview.md).

## What counts as multi-agent

Any of:

- **An agent flow** — a declared graph of agent stages you run as one unit.
- **A swarm** — a group of cooperating agents running concurrently.
- **Plan-execute-review** — the most common pipeline, with three specialised agents.
- **Background coordination** — one agent delegating work to others via `codebolt_agent.start`.

All of these are built on the same underlying primitives; they differ in who decides the shape (you, via a flow file; or an orchestrator agent, at runtime).

## How multi-agent shows up in the UI

### Flow runs

When you run a flow, you get a dedicated flow view:

```
┌─────────────────────────────────────────────┐
│ flow: plan-execute-review · run abc123      │
├─────────────────────────────────────────────┤
│                                             │
│   ┌─plan──┐       ┌─execute─┐   ┌─review─┐  │
│   │  ✓    │──────▶│    ▶    │──▶│        │  │
│   └───────┘       └─────────┘   └────────┘  │
│                                             │
│   current: execute                          │
│   elapsed: 43s                              │
└─────────────────────────────────────────────┘
```

Each node is clickable. Clicking shows:
- Its agent, model, and configuration.
- Its input (from the previous node) and output (if done).
- Its full phase trace — same detail as a single-agent run.
- Any child runs it spawned.

### Swarm runs

Swarms (dynamic groups, not fixed flows) show as a tree in the Agents panel:

```
orchestrator (run_xyz)
├── worker-1 (run_aaa)  ✓
├── worker-2 (run_bbb)  ▶ running
├── worker-3 (run_ccc)  ✗ failed
└── worker-4 (run_ddd)  ⏸ waiting
```

Click any node for the full trace. The orchestrator's event log shows every child's start and completion.

### Chat-style invocation

You can also run a flow or swarm from a regular chat tab:

```
user: @flow:plan-execute-review
      task: "add rate limiting to /api/users"
```

The chat tab shows the usual message stream, with the flow's internal stages appearing as collapsible sections.

## Running a multi-agent task

### From the UI

**New flow run:** Agents panel → "Run flow" → pick the flow → fill inputs → start. The flow view opens and streams progress.

**From a chat tab:** use `@flow:<name>` in the composer, or pick a flow-shaped agent from the agent picker.

### From the CLI

```bash
codebolt flow run plan-execute-review --input '{"task": "..."}'
codebolt flow watch <run_id>
codebolt flow trace <run_id>
```

Flows support the same `--detach`, `--watch`, and `--json` options as agent commands.

### Scheduled / background

Flows can have triggers, just like agents:

```yaml
# .codebolt/flows/nightly-review.yaml
triggers:
  - type: cron
    schedule: "0 2 * * *"
```

Background flow runs appear in the Background Agents panel alongside scheduled agents.

## Observing a multi-agent run

The flow/swarm view is the first stop. For deeper inspection:

### `codebolt events query`

The event log has every phase of every child run, causally linked:

```bash
codebolt events query "run_id descendent_of <parent_id>"
```

Returns every event in the tree rooted at the parent run. See [Query the event log](../../03_guides/07_advanced/query-the-event-log.md).

### `codebolt flow trace`

Higher-level than `events query` — structured for flow graphs:

```bash
codebolt flow trace <run_id>
```

Shows every node, its timing, its input/output, its causal parents. Useful for "why did my flow take so long" and "where did this value come from".

### Real-time tracing

`codebolt flow watch <run_id>` streams events as they happen. Good for noticing hangs or slow stages.

## Review and merge

Multi-agent work often ends in a change that needs review. The [review/merge design](../../04_build-on-codebolt/08_multi-agent-orchestration/07_review-and-merge-design.md) lets you mix LLM reviewers with human reviewers.

From the user's point of view:

1. The flow (or orchestrator) produces a change.
2. An LLM reviewer looks at it first, either approving or flagging issues.
3. If human review is required, a notification lands in your inbox (UI panel or external channel).
4. You open the review, see the plan + diff + LLM comments, and approve or reject.
5. On approval, the change is merged (committed to real git, or whatever "merge" means for the change kind).

See [Review and merge](./04_review-and-merge.md) for the full walkthrough.

## Stopping a multi-agent run

Stopping the parent stops all children:

- **UI:** stop button on the flow view.
- **CLI:** `codebolt flow stop <run_id>` or `codebolt agent stop <root_run_id>`.

Partial stops (stop one child but keep others) are possible but rare — usually you want to stop the whole thing.

## When multi-agent is hurting more than helping

Signs:

- **Flows that always take the same path.** If every run of a flow makes identical decisions, the branching is noise. Simplify.
- **Agents disagreeing in circles.** Debate or review loops that never converge mean the cap isn't tight enough or the question isn't well-formed.
- **Cost exploding.** Multi-agent multiplies token cost. If a single-agent version of the same task is 80% as good for 20% the cost, use the single agent.
- **"Which agent broke this?"** becoming a frequent question. Tracing should answer it instantly; if it doesn't, the flow is too complex for the debugging tools.

When in doubt, simplify. Multi-agent is an optimisation, not a default.

See [When to use multi-agent](../../04_build-on-codebolt/08_multi-agent-orchestration/02_when-multi-agent.md) for the honest version.

## See also

- [Running a swarm](./02_running-a-swarm.md)
- [Reading a flow](./03_reading-a-flow.md)
- [Review and merge](./04_review-and-merge.md)
- [Observability and tracing](./05_observability-and-tracing.md)
- [Multi-Agent Orchestration (for builders)](../../04_build-on-codebolt/08_multi-agent-orchestration/01_overview.md)
