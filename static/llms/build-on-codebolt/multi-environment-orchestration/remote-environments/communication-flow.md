# Communication Flow

> The most important part of multi-environment orchestration is the communication boundary.

The most important part of multi-environment orchestration is the communication boundary.

If that boundary is unclear, everything else is confusing.

## The Core Path

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

## What The Runtime Exposes Today

In the current `codeboltjs` runtime, provider-oriented handlers include:

- `providerStart`
- `providerAgentStart`
- `providerStop`
- `providerReadFile`
- `providerWriteFile`
- `providerDeleteFile`
- `providerGetDiffFiles`

These are exposed through `Codebolt.ts` so provider processes can register handlers without building a custom protocol stack.

## Message Categories

The communication boundary usually carries three kinds of messages:

### 1. Lifecycle Messages

These start, stop, or recover the environment:

- start
- stop
- close signal
- registration / reconnect
- heartbeat

### 2. Agent Execution Messages

These tell the remote runtime to start or continue agent work.

The key one is `providerAgentStart`, which begins agent execution inside the environment.

### 3. Environment Operation Messages

These represent environment-specific operations such as:

- read file
- write file
- delete file
- get diff files

These are needed when some environment operations must be resolved by the provider rather than by the main server directly.

## Why WebSocket Is Central Here

The provider and remote runtime are long-lived participants.

That makes WebSocket the natural transport because it supports:

- bidirectional messaging
- event-style communication
- long-lived lifecycle control
- reconnect and keepalive behavior

This is much closer to a control channel than to a one-shot HTTP API.

## Message Payloads

### providerStart (Server To Provider)

Sent when the server starts a provider process. The provider uses this to set up the environment.

| Field | Description |
|---|---|
| `type` | `"providerStart"` |
| `environmentName` | Name of the environment |
| `providerId` | Provider identifier |
| `environmentId` | Environment identifier |
| `archivePath` | Path to project snapshot archive |
| `snapshotId` | Snapshot identifier |
| `narrativeBundlePath` | Path to narrative bundle |
| `resourceId` | Previously persisted resource ID for recovery |

Provider config is also merged into this message from YAML defaults and installed/environment config.

### providerStartResponse (Provider To Server)

Sent when the provider is ready. Resolves the server startup promise.

| Field | Description |
|---|---|
| `type` | `"providerStartResponse"` |
| `environmentId` | Environment identifier |
| `success` | Whether startup succeeded |
| `agentServerUrl` | WebSocket URL to the remote runtime |
| `workspacePath` | Workspace directory path in the remote environment |

### providerAgentStart (Server To Provider)

Sent when a user starts an agent thread in a remote environment.

| Field | Description |
|---|---|
| `type` | `"providerAgentStart"` |
| `userMessage` | The user's prompt envelope |
| `agentId` | Which agent to run |
| `projectPath` | Local project path |
| `threadId` | Thread identifier |
| `archivePath` | Project snapshot |
| `snapshotId` | Snapshot ID |
| `narrativeBundlePath` | Narrative bundle path |
| `narrativeContext` | Objective, agent run, and snapshot IDs |

### providerStop (Server To Provider)

Sent when the server stops the environment. The provider should tear down and exit.

### Heartbeat Messages

Providers send heartbeats to confirm they are alive and the environment remains healthy.

### File Operation Messages

| Message | Direction | Purpose |
|---|---|---|
| `providerReadFile` | Server to Provider | Read a file from the remote environment |
| `providerWriteFile` | Server to Provider | Write a file in the remote environment |
| `providerDeleteFile` | Server to Provider | Delete a file |
| `providerGetDiffFiles` | Server to Provider | Get file changes for diff/merge |

## How A Remote Agent Thread Starts

The complete flow when the server starts a remote run is:

1. the server resolves the environment
2. the server resolves and starts the provider process
3. the provider connects back over WebSocket
4. the server sends `providerStart`
5. the provider creates or reconnects the remote resource
6. the provider starts Codebolt or the remote runtime there
7. the provider returns `providerStartResponse`
8. the server sends `providerAgentStart`
9. the remote agent loop begins

## Ownership Across The Boundary

Even when execution is remote, ownership stays split:

- the **server** owns orchestration and system state
- the **provider** owns environment bridging
- the **remote runtime** owns local execution inside that environment

That ownership model is what prevents multi-environment Codebolt from turning into multiple disconnected systems.

## See Also

- [Remote Environments](./01_overview.md)
- [Environment Lifecycle](./04_environment-lifecycle.md)
- [Environment Creation And Management](./05_environment-creation-and-management.md)
- [Creating a Custom Provider](../03_creating-a-custom-provider.md)
