---
sidebar_position: 3
title: Environments
---

# Environments

An Environment in Codebolt defines the execution context for agent runs — which shell they use, which environment variables are set, which Node/Python version is active, and whether the run happens locally or on a remote machine.

Open via: **Execution dropdown → Environment**

## Why environments matter

Agents run commands against your project. Those commands need the right tools available: the correct Node version, database credentials, API keys, build tools. Environments capture that configuration once so every agent run starts from the same baseline.

## Environment types

| Type | Description |
|---|---|
| **Local** | Runs on your machine using your installed tools |
| **Remote** | Connects to a remote host over SSH or a provider |
| **Provider** | Creates a fresh cloud environment on demand (e.g., a container) |

## Creating an environment

1. Open **Execution → Environment**
2. Click **+ New Environment**
3. Give it a name (e.g., `dev`, `ci`, `staging`)
4. Choose the environment type
5. Add environment variables (key/value pairs)
6. Set the working directory if different from the project root
7. Click **Save**

## Environment variables

Variables set here are injected into every agent process that uses this environment. They are stored encrypted at rest and never appear in the conversation history or event log.

Common variables to set:

| Variable | Example |
|---|---|
| `NODE_ENV` | `development` |
| `DATABASE_URL` | `postgresql://localhost:5432/mydb` |
| `OPENAI_API_KEY` | `sk-...` |
| `PORT` | `3000` |

## Selecting the active environment

The active environment for a project is shown in the **Environment** section of the bottom bar. Click it to switch environments. The change takes effect for the next agent run — runs already in progress continue with their original environment.

## Per-task environments

Individual tasks in the **Tasks** panel can override the project-level environment. Open a task → **Environment** tab → select or create a task-specific environment. Use this when a particular task needs different credentials or a fresh container.

## Remote environments

For remote environments, configure:

- **Host** — IP address or hostname
- **Port** — SSH port (default 22)
- **User** — SSH username
- **Auth** — SSH key path or password
- **Remote working directory** — path on the remote machine

Codebolt streams the agent's command output from the remote host back to your local Terminal panel in real time.

## Environment Debug panel

The **Environment Debug** panel (Debug Tools dropdown → **Environment Debug**) shows the full set of resolved environment variables for the active environment, including any inherited from the system. Use it to verify variables are set correctly before running an agent.
