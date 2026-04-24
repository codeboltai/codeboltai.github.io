---
sidebar_position: 2
title: Configuring Environments
---

# Configuring Environments



The Environments panel is the central place to create, edit, and switch between execution environments for your project.

Open via: **Execution dropdown → Environment**

## Creating an environment

1. Open **Execution → Environment**
2. Click **+ New Environment**
3. Enter a name (e.g., `dev`, `ci`, `staging`)
4. Choose the **environment type** — Local, Remote SSH, Docker, E2B, Daytona, or Git Worktree
5. Add environment variables (key/value pairs)
6. Set the working directory if different from the project root
7. Click **Save**

## Environment variables

Variables set here are injected into every agent process that uses this environment. They are stored encrypted at rest and never appear in conversation history or event logs.

Common variables to configure:

| Variable | Example |
|---|---|
| `NODE_ENV` | `development` |
| `DATABASE_URL` | `postgresql://localhost:5432/mydb` |
| `PORT` | `3000` |
| `API_KEY` | `sk-...` |

Secrets are shown as `●●●●●●` in the UI. Click the eye icon to reveal a value temporarily.

## Selecting the active environment

The active environment for a project is shown in the **Environment** indicator in the bottom bar. Click it to switch environments. The change takes effect for the next agent run — runs already in progress continue with their original environment.

## Per-task environment overrides

Individual tasks in the **Tasks** panel can override the project-level environment:

1. Open a task → **Environment** tab
2. Select a different environment or set task-specific variable overrides
3. Save the task

Use per-task overrides when a specific task needs different credentials or a fresh isolated container without changing the project-level default.

## Variable precedence

When an agent runs, environment variables are resolved in this order (highest priority first):

1. **Task-level override** — set on an individual task
2. **Project environment** — configured in the Environments panel
3. **System environment** — your OS environment variables
4. **Codebolt defaults** — built-in fallback values

The [Environment Debug panel](./04_environment-debug.md) shows the fully resolved variable set with the source of each value, so you can verify what an agent will actually see before running it.

## Comparing environments

To compare two environments (e.g., `dev` vs `staging`), open **Environment Debug** and use the **Environment** dropdown to switch between them without leaving the debug view.

## Editing and deleting environments

Click the **…** menu next to an environment name to edit or delete it. Deleting an environment removes its configuration but does not affect completed runs that used it.
