---
sidebar_position: 2
title: Replay and Traces
---

# Replay and Traces

Every agent run in Codebolt produces a **trace** — an ordered record of every phase, LLM call, tool invocation, memory read/write, and child run. Traces live in the [event log](../09_internals/03_subsystems/12_persistence-and-eventlog.md) and are the raw material for replay, debugging, and eval.

## What's in a trace

A full agent trace captures:

- Every **phase transition** (deliberate → execute → reflect → terminate), with timestamps.
- Every **LLM call** with full inputs (messages, tools, model, parameters) and outputs (tokens, tool calls, content).
- Every **tool invocation** with args and results.
- Every **memory read/write** — episodic and persistent.
- Every **child run** (subagents, side executions) nested.
- **Heartbeats** and **structured logs** emitted during the run.

Traces are canonical — nothing about the run is outside them. If replay works on a trace, you have the complete recipe to re-produce the behaviour.

## Replay

Replay takes a recorded run and re-executes it against a (possibly different) version of the agent.

```bash
codebolt run replay <run_id>                       # same agent, re-run
codebolt run replay <run_id> --agent my-agent@v2   # different version
codebolt run replay <run_id> --agent my-agent-b    # entirely different agent
```

### Two replay modes

| Mode | LLM behaviour | When |
|---|---|---|
| **Deterministic** | LLM outputs are replayed from the trace — no new inference | Testing code changes that don't affect LLM decisions |
| **Live** | LLM is called fresh — tool results are still replayed | Testing prompt / model / tool changes |

Deterministic replay is fast and free (no LLM cost). It's the default for CI-style regression checks. Live replay is the mode you want when testing prompt changes, since that's exactly the path that matters.

### What replay proves

If a change passes replay on a representative trace set, you know:

- The change didn't break the recorded path.
- The change didn't alter memory semantics (state at each phase matches).
- Tool call sequences are preserved (for deterministic replay).

What it doesn't prove: novel inputs behave well. For that, use [eval sets](./03_writing-evals.md).

## Viewing traces

In the UI:

- **Flow view** — every run as a tree. Click any node for its full detail.
- **Trace timeline** — linear view with phase bars, easier for short runs.
- **Inline diff** — compare two traces side-by-side (often parent run vs. replay).

From the CLI:

```bash
codebolt run trace <run_id>              # human-readable summary
codebolt run trace <run_id> --format json > run.json
codebolt run diff <run_id_a> <run_id_b>  # compare
```

## Promoting a trace to an eval fixture

The natural path:

1. Something went wrong in a run. You fix it.
2. You don't want that regression again. Promote the trace to a fixture.
3. `codebolt eval add-from-run <run_id> --set my-agent-regressions`
4. Now CI runs replay against that fixture on every change.

This is the cheapest way to build an eval set — real production runs promoted on demand.

## Retention and privacy

- Traces live locally by default in the event log DB.
- Sensitive inputs (tokens, secrets) are redacted according to project policy. See [Security Hardening](../10_self-hosting/06_security-hardening.md).
- For remote runs, the trace is written to the central server, not the sandbox.

## See also

- [Writing Evals](./03_writing-evals.md) — turn traces into measured sets
- [Event Log subsystem](../09_internals/03_subsystems/12_persistence-and-eventlog.md) — where traces live
- [Testing and debugging](../02_creating-agents/09_testing-and-debugging.md) — day-to-day dev loop
