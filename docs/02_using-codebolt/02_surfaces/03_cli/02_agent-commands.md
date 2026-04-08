---
sidebar_position: 2
title: Agent Commands
---

# `codebolt agent` commands

Everything related to running, managing, installing, and debugging agents from the command line. This is the user-level reference; the full auto-generated flag list is under [Reference → CLI](../../../05_reference/01_overview.md).

## Running

### `codebolt agent start`

Start a new agent run.

```bash
codebolt agent start <agent-name> --task "..."
codebolt agent start generalist --task "add a /health endpoint" --project /path/to/proj
```

Options:

| Flag | Meaning |
|---|---|
| `--task "..."` | Free-form task description |
| `--input '{"key": "..."}'` | Typed input (for agents with an inputs schema) |
| `--project <path>` | Which project to run in (default: cwd) |
| `--model <name>` | Override the default model |
| `--watch` | Stream progress to stdout (default for interactive shells) |
| `--detach` | Run in background, return immediately |
| `--print-id` | Print the run ID and exit (useful with `--detach`) |
| `--json` | Print structured progress and final result as JSON |
| `--limits '{"max_tool_calls": 50}'` | Override budget limits |
| `--timeout N` | Client-side timeout in seconds |

### `codebolt agent watch`

Stream events from a running agent.

```bash
codebolt agent watch <run-id>
codebolt agent watch <run-id> --filter tool.*
```

Attaches to a running agent and streams its events. Useful after `--detach`, or to watch a run started from the UI.

### `codebolt agent wait`

Block until a run finishes.

```bash
codebolt agent wait <run-id>
```

Exits when the run ends. Exit code reflects the terminal state (0 for completed, non-zero otherwise).

### `codebolt agent output`

Print the final output of a completed run.

```bash
codebolt agent output <run-id>
codebolt agent output <run-id> --json
```

### `codebolt agent stop`

Gracefully stop a run at the next phase boundary.

```bash
codebolt agent stop <run-id>
```

### `codebolt agent kill`

Force-kill a hung run (SIGTERM, then SIGKILL). Use only if `stop` doesn't work.

```bash
codebolt agent kill <run-id>
```

## Listing and inspecting

### `codebolt agent list`

List installed agents.

```bash
codebolt agent list
codebolt agent list --json
codebolt agent list --scope workspace    # only workspace-local
codebolt agent list --source marketplace  # only from marketplace
```

### `codebolt agent show`

Show the full manifest of an agent, including resolved defaults.

```bash
codebolt agent show generalist
codebolt agent show my-agent --json
```

Useful before remixing to see what you're inheriting from.

### `codebolt agent history`

Show recent runs.

```bash
codebolt agent history
codebolt agent history --agent reviewer --limit 20
codebolt agent history --status failed --since "2026-04-01"
```

### `codebolt agent trace`

Print the full phase-by-phase trace of a run.

```bash
codebolt agent trace <run-id>
codebolt agent trace <run-id> --phase 3
codebolt agent trace <run-id> --type llm.chat
codebolt agent trace <run-id> --json
```

See [Testing and debugging](../../../04_build-on-codebolt/02_custom-agents/06_testing-and-debugging.md) for debugging workflows.

### `codebolt agent inspect`

Open an interactive REPL into a recorded run.

```bash
codebolt agent inspect <run-id>
```

Step through phases, query memory-as-it-was, re-execute a phase with modified inputs, diff assembled contexts. See [Testing and debugging](../../../04_build-on-codebolt/02_custom-agents/06_testing-and-debugging.md).

## Installing and publishing

### `codebolt agent install`

Install an agent from a registry.

```bash
codebolt agent install marketplace/<name>
codebolt agent install marketplace/<name>@1.2.0
codebolt agent install org/<name> --registry https://codebolt.my-org.com
```

### `codebolt agent uninstall`

```bash
codebolt agent uninstall <name>
```

### `codebolt agent create`

Scaffold a new agent.

```bash
codebolt agent create --remix generalist --name my-reviewer
codebolt agent create --framework --name my-planner
codebolt agent create --framework --pattern unified --name my-agent
```

### `codebolt agent publish`

Publish to a registry.

```bash
codebolt agent publish my-agent                             # public marketplace
codebolt agent publish my-agent --registry <url>            # private registry
codebolt agent publish my-agent --dry-run                   # validate without publishing
```

See [Publishing](../../../04_build-on-codebolt/02_custom-agents/07_publishing.md).

### `codebolt agent lint`

Validate an agent manifest and structure.

```bash
codebolt agent lint my-agent
```

Run before publishing. Catches missing fields, invalid schemas, unreachable entrypoints, suspicious tool allowlists.

## Testing

### `codebolt agent test`

Run an agent once in a sandbox.

```bash
codebolt agent test my-agent --task "..."
codebolt agent test my-agent --input '{"task": "..."}'
```

Does not commit file changes. Prints the phase trace.

### `codebolt agent record`

Run an agent and record the full trace to a file.

```bash
codebolt agent record my-agent --task "..." --output trace.json
```

The recorded trace can be replayed later.

### `codebolt agent replay`

Replay a recorded trace against the agent as it exists now.

```bash
codebolt agent replay trace.json
codebolt agent replay trace.json --strict   # fail on any behaviour divergence
```

The replay mocks LLM and tool calls with the recorded responses. Changes in your agent's logic will show up as divergences from the original trace.

### `codebolt agent test-all`

Run every recorded test case for an agent.

```bash
codebolt agent test-all my-agent
```

Runs every `*.trace.json` file under `my-agent/tests/` as a replay test. Exit code indicates pass/fail.

## Portfolios

### `codebolt agent portfolio`

Manage which agents are active in the current workspace's portfolio.

```bash
codebolt agent portfolio list
codebolt agent portfolio add <name>
codebolt agent portfolio remove <name>
codebolt agent portfolio export > portfolio.yaml
codebolt agent portfolio import < portfolio.yaml
```

Useful for reproducible project setups: commit `portfolio.yaml` to the repo and anyone who opens the project gets the same set of agents.

## Delegation

### `codebolt agent delegate`

Start a child run from an existing run (programmatic use).

```bash
codebolt agent delegate <parent-run-id> <child-agent> --input '...'
```

Creates a child run causally linked to the parent. Primarily used from inside agents via the `codebolt_agent.start` tool, but also available from the CLI for testing orchestration logic.

## Examples

### Run a reviewer in CI on every PR

```bash
set -euo pipefail
codebolt project open "$CHECKOUT_DIR"

RUN_ID=$(codebolt agent start reviewer \
  --task "review the diff against origin/main" \
  --detach --print-id)

codebolt agent wait "$RUN_ID"
codebolt agent output "$RUN_ID" --json > review.json

# Fail if the reviewer flagged issues
jq -e '.status == "approved"' review.json
```

### Replay-test an agent before shipping

```bash
codebolt agent lint my-agent
codebolt agent test-all my-agent
codebolt agent publish my-agent --dry-run
codebolt agent publish my-agent
```

### Find why a production run failed

```bash
codebolt agent history --status failed --limit 5
codebolt agent trace <run-id> --type llm.chat > llm-calls.txt
codebolt agent inspect <run-id>
```

## See also

- [CLI & TUI Overview](./01_overview.md)
- [Running agents](../../04_agents/03_running-agents.md)
- [Reference → CLI](../../../05_reference/01_overview.md) — the auto-generated flag reference
- [Testing and debugging](../../../04_build-on-codebolt/02_custom-agents/06_testing-and-debugging.md)
