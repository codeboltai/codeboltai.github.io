---
sidebar_position: 8
title: Custom Execution Backends
description: An execution backend (provider) manages remote execution environments where agents run
---

# Custom Execution Backends

An execution backend (provider) manages remote execution environments where agents run. It handles environment creation, teardown, file operations, and message transport between the local Codebolt platform and the remote environment.

## When to Write a Custom Execution Backend

- You have a proprietary sandboxing system (internal VM pool, custom container runtime).
- You want agents to run on a platform not supported out of the box.
- You need custom credential injection, network topology, or resource management per run.

## Architecture

```
┌─────────────────────────┐
│  Codebolt Platform      │
│  (local)                │
└────────┬────────────────┘
         │ WebSocket
         │
┌────────┴────────────────┐
│  Your Provider          │
│  (child process)        │
│                         │
│  BaseProvider           │
│  ├─ setupEnvironment()  │
│  ├─ teardownEnvironment │
│  ├─ file operations     │
│  └─ message transport   │
└────────┬────────────────┘
         │
┌────────┴────────────────┐
│  Remote Environment     │
│  (E2B, Docker, VM, etc) │
│                         │
│  Agent runs here        │
└─────────────────────────┘
```

1. The server spawns your provider as a **child process**.
2. Your provider creates/connects to a remote environment.
3. A **WebSocket bridge** forwards messages between the local platform and the remote agent.
4. File operations are routed through your provider.
5. On shutdown, your provider tears down the environment.

## Provider Interface

Providers extend `BaseProvider` from `@codebolt/provider` and implement these abstract methods:

| Method | Purpose |
|---|---|
| `setupEnvironment(initVars)` | Create or connect to the remote environment |
| `teardownEnvironment()` | Clean up the environment on shutdown |
| `resolveProjectContext(initVars)` | Resolve project paths and metadata |
| `resolveWorkspacePath(initVars)` | Resolve the workspace directory in the remote environment |
| `onGetDiffFiles()` | Return file changes in the environment |

### Optional hooks

| Hook | Purpose |
|---|---|
| `ensureAgentServer()` | Start the agent server in the remote environment |
| `beforeClose()` | Run logic before disconnecting |
| `afterConnected(startResult)` | Run logic after connection is established |
| `onReconnectAttempt()` | Pre-reconnect checks (e.g., is port still open?) |
| `checkEnvironmentHealth()` | Custom health check for the environment |
| `onEnvironmentRecoveryFailed(resourceId)` | Clean up orphaned resources |
| `buildWebSocketUrl(initVars)` | Customize the WebSocket URL |

## SDK Registration

Providers register lifecycle and file operation handlers via the `@codebolt/codeboltjs` SDK:

```typescript
import codebolt from "@codebolt/codeboltjs";

// Lifecycle handlers
codebolt.onProviderStart(handlers.onProviderStart);
codebolt.onProviderAgentStart(handlers.onProviderAgentStart);
codebolt.onProviderStop(handlers.onProviderStop);
codebolt.onCloseSignal(handlers.onCloseSignal);
codebolt.onRawMessage(handlers.onRawMessage);
codebolt.onGetDiffFiles(handlers.onGetDiffFiles);

// File operation handlers
codebolt.onReadFile(provider.onReadFile);
codebolt.onWriteFile(provider.onWriteFile);
codebolt.onDeleteFile(provider.onDeleteFile);
codebolt.onDeleteFolder(provider.onDeleteFolder);
codebolt.onRenameItem(provider.onRenameItem);
codebolt.onCreateFolder(provider.onCreateFolder);
codebolt.onCopyFile(provider.onCopyFile);
codebolt.onCopyFolder(provider.onCopyFolder);
codebolt.onGetTreeChildren(provider.onGetProject);
codebolt.onGetFullProject(provider.onGetFullProject);
```

## Provider Lifecycle

1. **Install** — provider is installed from the marketplace or local directory.
2. **Configure** — user sets provider-specific config (API keys, endpoints) in the UI.
3. **Spawn** — server spawns the provider as a child process with environment variables.
4. **Start** — `onProviderStart(initVars)` is called. Provider creates the remote environment and connects transport.
5. **Run** — agents execute in the remote environment. Messages and file operations are bridged through the provider.
6. **Stop** — `onProviderStop()` is called. Provider tears down the environment and disconnects.

## Built-in Features (from BaseProvider)

BaseProvider gives you these for free:

- **Message queueing** — messages sent before transport is ready are queued and flushed on connect.
- **WebSocket reconnection** — exponential backoff (1s → 30s max, configurable attempts).
- **Keepalive pings** — periodic WebSocket pings to prevent idle disconnects.
- **Request timeouts** — tracks pending requests with automatic timeout (default: 120s).
- **Resource ID persistence** — persist sandbox/container IDs for recovery after restart.
- **Health checks** — periodic environment health monitoring.
- **Heartbeats** — provider status heartbeats to the platform.

## Available Providers

| Provider | Environment |
|---|---|
| E2B | E2B cloud sandbox |
| Docker | Local Docker container |
| Daytona | Daytona cloud workspace |
| Git Worktree | Local git worktree |
| Remote Server | SSH remote server |
| AgentFS | Agent filesystem |

## Server API

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/environments/installed-providers` | List installed providers |
| `POST` | `/environments/installed-providers` | Add a provider |
| `POST` | `/environments/installed-providers/install` | Install from marketplace |
| `GET` | `/environments/installed-providers/:id` | Get provider details |
| `PUT` | `/environments/installed-providers/:id` | Update provider config |
| `DELETE` | `/environments/installed-providers/:id` | Remove a provider |
| `POST` | `/environments/installed-providers/:id/set-default` | Set as default provider |
| `GET` | `/environments/providers/running` | List running providers |

## See Also

- [Build Your First Execution Backend](./07_build-your-first-execution-backend.md) — step-by-step tutorial
- [Plugins Overview](../05_plugins/01_overview.md) — plugin development overview
