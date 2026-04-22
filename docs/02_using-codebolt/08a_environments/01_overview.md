---
sidebar_position: 1
title: Environments Overview
---

# Environments

An **Environment** in Codebolt defines the execution context for agent runs — the shell, environment variables, runtime versions, and crucially, **where** the agent process runs.

Codebolt separates the concern of *what agents do* from *where they execute*. The same agent task can run locally on your machine, inside a Docker container, in an E2B cloud sandbox, or on a remote server — by changing only the environment configuration.

## Environment types

| Type | Where the agent runs | Best for |
|---|---|---|
| **Local** | Your machine, using your installed tools | Development, fast iteration |
| **Remote SSH** | A remote server you control | Staging, production-adjacent testing |
| **Docker** | An isolated container on your machine or a remote host | Reproducible builds, dependency isolation |
| **E2B** | A cloud sandbox spun up on demand | Ephemeral tasks, parallel runs |
| **Daytona** | A managed cloud workspace | Team environments, persistent remote dev |
| **Git Worktree** | A separate worktree of the same repo | Parallel branches, isolated experiments |

## How environments work

Codebolt keeps the local server as the **control plane** — it owns run state, event logs, and orchestration. When you select a remote environment provider, the provider creates or attaches to the target execution environment and starts the agent runtime there. The remote runtime connects back to Codebolt over WebSocket. From that point, the agent loop runs remotely while Codebolt continues receiving events, tool outputs, and log streams locally.

```
Local Codebolt server  ──▶  Provider  ──▶  Remote environment
       ▲                                          │
       └──────────── WebSocket (events) ──────────┘
```

## What environments control

| Setting | Description |
|---|---|
| **Environment variables** | Injected into every agent process, stored encrypted |
| **Working directory** | Starting path for agent file operations |
| **Shell** | Which shell binary agent commands run under |
| **Runtime versions** | Node, Python, or other language runtimes pre-installed in the environment |
| **Provider config** | Connection details, resource limits, region (for cloud providers) |

## In this section

| Page | What it covers |
|---|---|
| [Configuring Environments](./02_configuring-environments.md) | Creating, editing, and switching environments in the UI |
| [Environment Providers](./03_environment-providers.md) | Connecting E2B, Docker, Daytona, Git worktree, and remote servers |

## See also

- [Environment Debug](../08c_debug-and-observability/04_environment-and-plugin-debug.md) — inspect resolved environment variables at runtime
- [Multi-Environment Orchestration](../../04_build-on-codebolt/08a_multi-environment-orchestration/01_overview.md) — provider architecture for builders
