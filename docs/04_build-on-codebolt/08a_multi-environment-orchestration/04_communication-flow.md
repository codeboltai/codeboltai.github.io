---
sidebar_position: 4
title: Communication Flow
---

# Communication Flow

The most important part of multi-environment orchestration is the communication boundary.

If that boundary is unclear, everything else is confusing.

## The core path

At a high level:

```text
Codebolt server
   │
   ├── invokes provider
   │
   ├── provider creates environment
   │
   ├── provider starts remote runtime
   │
   └── remote runtime connects back over WebSocket
          │
          ├── lifecycle messages
          ├── agent-start messages
          └── file / diff / provider messages
```

## What the runtime exposes today

In the current `codeboltjs` runtime, provider-oriented handlers include:

- `providerStart`
- `providerAgentStart`
- `providerStop`
- `providerReadFile`
- `providerWriteFile`
- `providerDeleteFile`
- `providerGetDiffFiles`

These are exposed through `Codebolt.ts` so provider processes can register handlers without building a custom protocol stack.

## Message categories

The communication boundary usually carries three kinds of messages:

### 1. Lifecycle messages

These start, stop, or recover the environment:

- start
- stop
- close signal
- registration / reconnect
- heartbeat

### 2. Agent execution messages

These tell the remote runtime to start or continue agent work.

The key one is `providerAgentStart`, which begins agent execution inside the environment.

### 3. Environment operation messages

These represent environment-specific operations such as:

- read file
- write file
- delete file
- get diff files

These are needed when some environment operations must be resolved by the provider rather than by the main server directly.

## Why WebSocket is central here

The provider and remote runtime are long-lived participants.

That makes WebSocket the natural transport because it supports:

- bidirectional messaging
- event-style communication
- long-lived lifecycle control
- reconnect and keepalive behavior

This is much closer to a control channel than to a one-shot HTTP API.

## Message payloads

### providerStart (Server to Provider)

Sent when the server starts a provider process. The provider uses this to set up the environment.

| Field | Description |
|---|---|
| `type` | `"providerStart"` |
| `environmentName` | Name of the environment |
| `providerId` | Provider identifier |
| `environmentId` | Environment identifier |
| `archivePath` | Path to project snapshot archive |
| `snapshotId` | Snapshot identifier |
| `narrativeBundlePath` | Path to narrative bundle (git + SQLite state) |
| `config` | Merged provider configuration (YAML defaults + installed config + environment config) |
| `resourceId` | Previously persisted resource ID (for recovery) |

### providerStartResponse (Provider to Server)

Sent when the provider is ready. Resolves the server's startup promise.

| Field | Description |
|---|---|
| `type` | `"providerStartResponse"` |
| `environmentId` | Environment identifier |
| `success` | Whether startup succeeded |
| `agentServerUrl` | WebSocket URL to the agent server in the remote environment |
| `workspacePath` | Workspace directory path in the remote environment |

### providerAgentStart (Server to Provider)

Sent when a user starts an agent thread in a remote environment.

| Field | Description |
|---|---|
| `type` | `"providerAgentStart"` |
| `userMessage` | The user's prompt text |
| `agentId` | Which agent to run |
| `projectPath` | Local project path |
| `threadId` | Thread identifier |
| `archivePath` | Project snapshot |
| `snapshotId` | Snapshot ID |
| `narrativeBundlePath` | Narrative bundle path |
| `narrativeContext` | Objective, agent run, and snapshot IDs |

### providerStop (Server to Provider)

Sent when the server stops the environment. The provider should tear down and exit.

### Heartbeat messages

Providers send heartbeats to confirm they're alive:

| Field | Description |
|---|---|
| `type` | `"sendProviderHeartbeat"` or `"sendEnvironmentHeartbeat"` |
| `status` | `"healthy"` / `"warning"` / `"error"` |
| `connectedEnvironments` | List of environment IDs this provider serves |
| `uptime` | Seconds since provider started |

### File operation messages

| Message | Direction | Purpose |
|---|---|---|
| `providerReadFile` | Server to Provider | Read a file from the remote environment |
| `providerWriteFile` | Server to Provider | Write a file in the remote environment |
| `providerDeleteFile` | Server to Provider | Delete a file |
| `providerGetDiffFiles` | Server to Provider | Get file changes for diff/merge |

## How a remote agent thread starts

The complete flow when a user sends a message with `remoteEnv: true`:

```
1. User sends message in chat (with Remote checkbox enabled)
2. Server creates a thread
3. Server resolves the provider (from available local/installed providers)
4. Server creates an environment (persisted to .codebolt/environments.json)
5. Server spawns the provider as a child process with env vars
6. Provider connects back via WebSocket with providerId + environmentId
7. Server sends providerStart message (with snapshot + config)
8. Provider calls setupEnvironment() → creates sandbox/container
9. Provider calls ensureAgentServer() → starts CodeBolt remotely
10. Provider connects WebSocket transport to remote agent server
11. Provider sends providerStartResponse back to server
12. Server sends providerAgentStart message (with user prompt + agent ID)
13. Agent runs in the remote environment
14. Provider bridges messages bidirectionally
15. On completion, providerAgentStartResponse sent back
16. Server records narrative events and updates thread
```

## Ownership across the boundary

Even when execution is remote, ownership stays split:

- the **server** owns orchestration and system state
- the **provider** owns environment bridging
- the **remote runtime** owns local execution inside that environment

That ownership model is what prevents multi-environment Codebolt from turning into multiple disconnected systems.

## See also

- [Environment Lifecycle](./03_environment-lifecycle.md)
- [Creating a Custom Provider](./05_creating-a-custom-provider.md)
- [Remote Execution](../11_remote-execution.md)
