---
sidebar_position: 6
title: TUI Mode
---

# TUI Mode

Full-screen terminal UI for Codebolt. Same server, same features as the desktop app, but runs in a terminal. Good for:

- Remote machines you access via SSH.
- Terminal-first workflows.
- Screen-reader and accessibility use.
- Minimalist setups.

## Launching

```bash
codebolt
```

This starts the server and opens the TUI automatically. The TUI is the default interface when you run `codebolt` without any flags.

To start with a specific project:

```bash
codebolt --project /path/to/project
```

## Layout

```
┌── project ──────┬────── chat ──────────────┐
│ > README.md     │ generalist ▾             │
│   src/          │                          │
│     auth/       │ user: rename getUser     │
│     api/        │ assistant: renamed 3 files
│                 │                          │
├── terminal ─────┴────── status ────────────┤
│ $ npm test      │ ✓ Connected │ 14 phases  │
└─────────────────────────────────────────────┘
```

Four panels:
- **Project** — file tree, search
- **Chat** — active conversation
- **Terminal** — shell
- **Status** — connection, active agents, diagnostics

## Key bindings

### Global

| Key | Action |
|---|---|
| `Tab` | Cycle focus between panels |
| `Shift+Tab` | Reverse cycle |
| `Ctrl+P` | Quick file open |
| `Ctrl+Shift+P` | Command palette |
| `Ctrl+N` | New chat tab |
| `Ctrl+W` | Close current tab |
| `Ctrl+Q` | Quit |
| `?` | Show help overlay |
| `Esc` | Cancel current action / stop current turn |

### Chat panel

| Key | Action |
|---|---|
| `Enter` | Send message |
| `Shift+Enter` | New line in composer |
| `Ctrl+K` | Inline edit (when a file is open in a peer pane) |
| `Up` / `Down` | Scroll message history |
| `PgUp` / `PgDn` | Scroll faster |
| `Ctrl+Home` | Jump to start of thread |
| `Ctrl+End` | Jump to end |

### Project panel

| Key | Action |
|---|---|
| `Up` / `Down` | Navigate tree |
| `Enter` | Open file / expand directory |
| `/` | Fuzzy search |
| `r` | Refresh tree |

### Terminal panel

Normal shell keybindings pass through. `Ctrl+C` interrupts the running command.

## Tabs

The chat panel supports multiple tabs just like the GUI. Switch with `Ctrl+Tab` / `Ctrl+Shift+Tab`. Each tab has its own agent binding and history.

## SSH / remote use

For running on a remote machine:

```bash
ssh user@remote-box
codebolt      # starts the TUI on the remote machine
```

Alternatively, start the server on the remote in headless mode and connect from your local machine:

```bash
# on remote
codebolt --server --port 12345

# on local
codebolt --connect 12345
```

## Limitations vs the GUI

The TUI has most features of the desktop app but a few things differ:

- **Images and rendered output** are shown as placeholders (the terminal can't render images).
- **Checkpoint diffs** use text-diff views instead of side-by-side.
- **The flow view** is a tree rendering rather than a graph.
- **Some panels** (canvas, dynamic panels from extensions) aren't supported.

Everything core — chat, agents, tools, memory, checkpoints, trace — works identically.

## See also

- [CLI Overview](./01_overview.md)
- [Headless Mode](./05_headless.md)
- [Panels and layout (GUI)](../02_surfaces/02_desktop-app/02_panels-and-layout.md)
