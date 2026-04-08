---
sidebar_position: 1
title: CLI & TUI Overview
---

# CLI & TUI Overview

Codebolt ships three ways to interact with the same server:

1. **Desktop app** — the GUI. What most people use.
2. **CLI** — `codebolt` command for scripting, headless operation, and CI.
3. **TUI** — full-screen terminal UI. The GUI experience in a terminal.

All three speak the same protocol to the same server. You can use the desktop app for daily work and the CLI for CI, and they'll see the same projects, agents, and history.

## The `codebolt` command

The CLI uses a flag-based interface:

```
codebolt [flags]
```

Core flags:

| Flag | What it does |
|---|---|
| (no flags) | Start server + TUI |
| `--server` | Start server only (no TUI, headless) |
| `--prompt "text"` | Run an agent with a prompt |
| `--agent <name>` | Specify which agent to use with `--prompt` |
| `--provider <name>` | Specify LLM provider |
| `--model <name>` | Specify LLM model |
| `--api-key <key>` | API key for the provider |
| `--project <path>` | Set project directory |
| `--port <number>` | Set server port (default: 12345) |
| `--connect <port>` | Connect to an existing server |
| `--web` | Require web frontend |
| `--auth-token <token>` | Set auth token |
| `--version` / `-v` | Print version |
| `--help` / `-h` | Show help |

Extension commands:

```
codebolt <type> create --name <name>
codebolt <type> publish --name <name>
codebolt <type> list
```

Where `<type>` is one of: `agent`, `tool`, `provider`, `plugin`, `skill`, `actionblock`, `capability`, `executor`.

## First checks

```bash
codebolt --version
```

Prints the installed version, e.g. `codebolt 1.12.12`.

## Common CLI patterns

### Start the TUI

```bash
codebolt
```

Opens the full-screen terminal UI. This is the default behavior when no flags are given.

### Run an agent from the shell

```bash
codebolt --prompt "add a /health endpoint" --agent generalist
```

Runs the agent with the given prompt and returns when done.

### Start server-only (headless)

```bash
codebolt --server
```

Starts the server without any UI. Useful for CI, remote dev, or background services.

### Start with a specific project

```bash
codebolt --project /path/to/my/project
```

### Use a specific provider and model

```bash
codebolt --provider openai --model gpt-4 --api-key sk-...
```

## Output formats

The `--prompt` mode prints agent output to stdout. Useful for scripting and CI.

## Scripting

The CLI is built for scripting:

- Exits non-zero on failure.
- Prints errors to stderr.
- `--prompt` mode outputs agent results to stdout.

Example: a CI job that runs a reviewer agent on every PR:

```bash
#!/bin/bash
set -euo pipefail

codebolt --server --project "$PR_CHECKOUT_DIR" &
sleep 5

codebolt --prompt "review the diff against origin/main" \
  --agent reviewer \
  --provider openai \
  --api-key "$OPENAI_API_KEY"
```

## The TUI

For interactive work without a GUI:

```bash
codebolt
```

Opens a full-screen terminal UI with chat tabs, file tree, and agent runs. Uses the same server as the desktop app — if both are running, they see the same state.

Key bindings:
- `Tab` — cycle focus between panels
- `Ctrl+N` — new chat tab
- `Ctrl+W` — close tab
- `Ctrl+K` — command palette
- `?` — show help
- `q` — quit

See [TUI mode](../04_tui.md) for the full guide.

## Headless mode

For running on a server without any display:

```bash
codebolt --server
```

Starts the server without attempting any GUI or terminal UI. The CLI can still connect and issue commands. Useful for:

- **CI runners** — a shared Codebolt instance for the CI fleet.
- **Remote dev environments** — Codebolt running on a cloud VM, accessed via CLI or `ssh`.
- **Background services** — Codebolt as a systemd unit.

See [Headless mode](../05_headless.md).

## Extension management

Manage extensions (agents, tools, providers, etc.):

```bash
codebolt agent create --name my-agent
codebolt agent publish --name my-agent
codebolt agent list

codebolt tool create --name my-tool
codebolt tool list

codebolt skill create --name my-skill
codebolt skill list
```

## See also

- [Agent commands](./02_agent-commands.md)
- [Tool commands](./03_tool-commands.md)
- [Provider commands](./04_provider-commands.md)
- [TUI mode](../04_tui.md)
- [Headless mode](../05_headless.md)
- [Reference](../../../05_reference/01_overview.md)
