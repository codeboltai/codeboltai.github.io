---
sidebar_position: 3
title: Creating a Custom Provider
---

# Creating a Custom Provider

A provider bridges Codebolt to a remote execution environment such as an E2B sandbox, Docker container, remote server, git worktree, or other custom backend. It handles environment creation, agent execution, file operations, and teardown.

## The BaseProvider Class

All providers extend `BaseProvider` from `@codebolt/provider`. It handles lifecycle wiring, WebSocket transport, reconnection, heartbeats, request queueing, and message forwarding. Your provider implements the environment-specific parts.

### Abstract Methods

| Method | Purpose |
|---|---|
| `setupEnvironment(initVars)` | Create or connect to the remote environment |
| `resolveProjectContext(initVars)` | Resolve project paths and metadata |
| `onGetDiffFiles()` | Return file changes in the remote environment |

### Optional Hooks

| Hook | Purpose |
|---|---|
| `teardownEnvironment()` | Clean up the environment on shutdown |
| `ensureAgentServer()` | Start Codebolt or the remote runtime inside the environment |
| `resolveWorkspacePath(initVars)` | Resolve the remote workspace path |
| `checkEnvironmentHealth()` | Custom health check |
| `beforeClose()` | Run logic before disconnecting |
| `afterConnected(startResult)` | Run logic after transport is established |
| `onReconnectAttempt()` | Pre-reconnect checks |
| `onEnvironmentRecoveryFailed(resourceId)` | Clean up orphaned resources |
| `buildWebSocketUrl(initVars)` | Customize the transport URL |

## Provider Entry Point

The entry point creates your provider, gets its handlers, and registers them with the Codebolt runtime:

```ts
import codebolt from "@codebolt/codeboltjs";
import { MyProvider } from "./services/MyProvider";

const provider = new MyProvider({
  agentServerPort: parseInt(process.env.REMOTE_EXECUTION_PORT || "3100", 10),
  agentServerHost: "localhost",
  transport: "websocket",
});

const handlers = provider.getEventHandlers();

codebolt.onProviderStart(handlers.onProviderStart);
codebolt.onProviderAgentStart(handlers.onProviderAgentStart);
codebolt.onProviderStop(handlers.onProviderStop);
codebolt.onCloseSignal(handlers.onCloseSignal);
codebolt.onRawMessage(handlers.onRawMessage);
codebolt.onGetDiffFiles(handlers.onGetDiffFiles);
```

## What BaseProvider Gives You

You do not need to reimplement:

- queued messages before transport is ready
- WebSocket reconnection with backoff
- keepalive pings
- pending request timeout tracking
- resource ID persistence helpers
- provider and environment heartbeats
- connected-environment tracking

## Good Providers To Study

| Provider | Why it matters |
|---|---|
| `codeboltjs/providers/e2b` | Strong full-stack example of sandbox creation, recovery, and transport |
| `codeboltjs/providers/daytona-remote-provider` | Similar remote workspace model with reconnect logic |
| `codeboltjs/providers/dockerprovider` | Container-oriented environment management |
| `codeboltjs/providers/remoteserverprovider` | Remote server execution model |

## See Also

- [Remote Environments](./02_remote-environments/01_overview.md)
- [Provider Architecture](./02_remote-environments/02_provider-architecture.md)
- [Execution Chaining](./02_remote-environments/03_execution-chaining.md)
- [Environment Lifecycle](./02_remote-environments/04_environment-lifecycle.md)
- [Environment Creation And Management](./02_remote-environments/05_environment-creation-and-management.md)
- [Communication Flow](./02_remote-environments/06_communication-flow.md)
