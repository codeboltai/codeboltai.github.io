---
sidebar_position: 5
title: Creating a Custom Provider
---

# Creating a Custom Provider

A provider bridges Codebolt to a remote execution environment — E2B sandbox, Docker container, remote server, git worktree, or any custom backend. It handles environment creation, agent execution, file operations, and teardown.

## The BaseProvider class

All providers extend `BaseProvider` from `@codebolt/provider`. It handles lifecycle wiring, WebSocket transport, reconnection, heartbeats, and message forwarding. Your provider implements the environment-specific parts.

### Abstract methods (must implement)

| Method | Purpose |
|---|---|
| `setupEnvironment(initVars)` | Create or connect to the remote environment (sandbox, container, VM) |
| `resolveProjectContext(initVars)` | Resolve project paths and metadata for the remote environment |
| `onGetDiffFiles()` | Return file changes in the remote environment |

### Optional hooks (can override)

| Hook | Default | Purpose |
|---|---|---|
| `teardownEnvironment()` | No-op | Clean up the environment on shutdown |
| `ensureAgentServer()` | No-op | Start the agent server inside the remote environment |
| `resolveWorkspacePath(initVars)` | Returns `projectPath` | Resolve the workspace directory in the remote environment |
| `checkEnvironmentHealth()` | Returns `true` | Custom health check for the environment |
| `beforeClose()` | No-op | Run logic before disconnecting |
| `afterConnected(startResult)` | No-op | Run logic after connection is established |
| `onReconnectAttempt()` | Returns `true` | Pre-reconnect checks (e.g., is the remote port still open?) |
| `onEnvironmentRecoveryFailed(resourceId)` | No-op | Clean up orphaned resources from a previous crashed session |
| `buildWebSocketUrl(initVars)` | Default URL format | Customize the WebSocket connection URL |

### Configuration

```typescript
interface BaseProviderConfig {
  agentServerPort: number;           // Default: 3001
  agentServerHost: string;           // Default: "localhost"
  reconnectAttempts: number;         // Default: 10
  reconnectDelay: number;            // Default: 1000ms
  wsRegistrationTimeout: number;     // Default: 10000ms
  transport: ProviderTransportType;  // "websocket"
  maxReconnectAttempts: number;      // Default: 10
  maxReconnectDelay: number;         // Default: 30000ms
  wsKeepaliveInterval: number;       // Default: 20000ms
  requestTimeout: number;            // Default: 120000ms
}
```

## Provider entry point

The entry point (`src/index.ts`) creates your provider, gets its event handlers, and registers them with the `@codebolt/codeboltjs` SDK:

```typescript
import codebolt from "@codebolt/codeboltjs";
import { MyProvider } from "./services/MyProvider";

const provider = new MyProvider({
  agentServerPort: parseInt(process.env.REMOTE_EXECUTION_PORT || '3100', 10),
  agentServerHost: 'localhost',
  transport: 'websocket',
});

// Get lifecycle handlers from BaseProvider
const handlers = provider.getEventHandlers();

// Register lifecycle handlers
codebolt.onProviderStart(handlers.onProviderStart);
codebolt.onProviderAgentStart(handlers.onProviderAgentStart);
codebolt.onProviderStop(handlers.onProviderStop);
codebolt.onCloseSignal(handlers.onCloseSignal);
codebolt.onRawMessage(handlers.onRawMessage);
codebolt.onGetDiffFiles(handlers.onGetDiffFiles);

// Register file operation handlers
codebolt.onReadFile(provider.onReadFile.bind(provider));
codebolt.onWriteFile(provider.onWriteFile.bind(provider));
codebolt.onDeleteFile(provider.onDeleteFile.bind(provider));
codebolt.onDeleteFolder(provider.onDeleteFolder.bind(provider));
codebolt.onRenameItem(provider.onRenameItem.bind(provider));
codebolt.onCreateFolder(provider.onCreateFolder.bind(provider));
codebolt.onCopyFile(provider.onCopyFile.bind(provider));
codebolt.onCopyFolder(provider.onCopyFolder.bind(provider));
codebolt.onGetTreeChildren(provider.onGetProject.bind(provider));
codebolt.onGetFullProject(provider.onGetFullProject.bind(provider));
```

## Implementing your provider

Extend `BaseProvider` and implement the abstract methods:

```typescript
import { BaseProvider } from '@codebolt/provider';
import type { ProviderInitVars, ProviderStartResult } from '@codebolt/provider';

export class MyProvider extends BaseProvider {

  async setupEnvironment(initVars: ProviderInitVars): Promise<void> {
    // Create or connect to your remote environment
    // Example: create a container, start a VM, connect to a sandbox
  }

  async resolveProjectContext(initVars: ProviderInitVars): Promise<any> {
    return {
      projectPath: initVars.projectPath,
      projectName: initVars.projectPath?.split('/').pop() || 'project',
    };
  }

  async onGetDiffFiles(): Promise<any> {
    // Return file changes in the remote environment
    return { files: [] };
  }

  // Optional: clean up
  async teardownEnvironment(): Promise<void> {
    // Stop and remove the container/VM/sandbox
  }

  // Optional: start agent server inside the environment
  async ensureAgentServer(): Promise<void> {
    // Start CodeBolt in the remote environment
    // Wait for it to be ready on the configured port
  }
}
```

## What BaseProvider gives you for free

You don't need to implement these — they're built into BaseProvider:

- **Message queueing** — messages sent before transport is ready are queued and flushed on connect.
- **WebSocket reconnection** — exponential backoff (1s to 30s max, 10 attempts).
- **Keepalive pings** — every 20 seconds to prevent idle disconnects.
- **Request timeouts** — tracks pending requests with 120s timeout.
- **Resource ID persistence** — persist sandbox/container IDs for crash recovery via `setEnvironmentResourceId()` and `getPersistedResourceId()`.
- **Health monitoring** — provider heartbeats every 10s, environment heartbeats every 15s.
- **Multi-environment tracking** — `registerConnectedEnvironment()` / `unregisterConnectedEnvironment()` for providers serving multiple environments.

## Existing providers to study

| Provider | Environment | Key pattern |
|---|---|---|
| `codeboltjs/providers/e2b` | E2B cloud sandbox | Remote sandbox + WebSocket bridge to in-sandbox CodeBolt |
| `codeboltjs/providers/dockerprovider` | Docker container | Local container lifecycle |
| `codeboltjs/providers/daytona-remote-provider` | Daytona workspace | Cloud workspace management |
| `codeboltjs/providers/gitWorkTreeProvider` | Git worktree | Local filesystem isolation |
| `codeboltjs/providers/remoteserverprovider` | Remote SSH server | SSH-based remote execution |

## Step-by-step guide

For a complete walkthrough of building a provider from scratch, see [Build Your First Execution Backend](../06_extending-codebolt/07_build-your-first-execution-backend.md).

## See also

- [Provider Architecture](./02_provider-architecture.md) — three-layer model
- [Environment Lifecycle](./03_environment-lifecycle.md) — lifecycle phases and states
- [Communication Flow](./04_communication-flow.md) — message types and protocol
