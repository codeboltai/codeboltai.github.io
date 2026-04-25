---
sidebar_position: 4
title: Environment Lifecycle
description: Every remote or alternate environment in Codebolt follows a lifecycle.
---

# Environment Lifecycle

Every remote or alternate environment in Codebolt follows a lifecycle.

This lifecycle is what lets the server treat different providers consistently.

## The Lifecycle Phases

At a high level:

1. **Initialize**
2. **Resolve context**
3. **Setup environment**
4. **Start remote runtime**
5. **Connect transport**
6. **Run agents**
7. **Heartbeat and recover**
8. **Stop and teardown**

## What This Looks Like In The Provider Base

In `BaseProvider`, the lifecycle is organized around methods like:

- `onProviderStart()`
- `onProviderAgentStart()`
- `onProviderStop()`
- `ensureTransportConnection()`
- `onCloseSignal()`

The shared lifecycle does the orchestration. Concrete providers fill in the environment-specific parts.

## Phase 1: Initialize

The provider receives init variables such as environment identity and project context.

This is where it records:

- environment name
- project path
- workspace path
- provider config

## Phase 2: Resolve Project And Workspace Context

Before the environment can run, the provider has to know:

- which project it represents
- which workspace path to expose
- which remote directory or resource maps to that workspace

This is especially important for worktree and snapshot-based providers.

## Phase 3: Setup Environment

This is the environment-specific step.

Examples:

- create a sandbox
- create a Docker container
- create a Git worktree
- attach to a remote server
- restore a snapshot-backed workspace

This is the point where provider implementations differ most.

## Phase 4: Start The Remote Runtime

After the environment exists, the provider starts the remote runtime or agent server inside it.

That runtime is what will eventually connect back to Codebolt and receive agent-start messages.

## Phase 5: Connect Transport

The remote side then establishes transport back to Codebolt, typically via WebSocket.

At that point:

- the provider is registered
- the environment becomes addressable
- the server can begin forwarding work

## Phase 6: Run Agents

Once connected, agent-start and raw provider messages can flow through the transport.

This is the steady-state execution phase.

## Phase 7: Heartbeat And Recovery

Long-lived environments need health checks.

The provider base already models:

- reconnect attempts
- environment heartbeat
- transport keepalive

This matters because remote environments are failure-prone compared with local runs.

## Phase 8: Stop And Teardown

When a run or environment ends, the provider should:

- stop forwarding messages
- disconnect transport
- stop the remote runtime
- release the environment resource cleanly

For some providers this means deleting a sandbox or container. For others it means preserving state for later merge or reuse.

## Environment States

The server tracks each environment through these states:

| State | Meaning |
|---|---|
| `created` | Just registered, not yet started |
| `starting` | Provider startup in progress |
| `running` | Provider active and connected |
| `stopping` | Shutdown in progress |
| `stopped` | Not running |
| `error` | Provider error occurred |
| `restarting` | Auto-restart attempt |
| `unconnectable` | Cannot reconnect to remote |
| `disconnected` | Temporary disconnection |
| `not_available` | Resource unavailable |
| `archived` | Removed from active use |

## Health Monitoring

The server runs lifecycle health checks on a fixed interval.

At a minimum, that monitoring verifies:

1. whether the provider process is alive
2. whether the WebSocket connection is still open
3. whether error and restart thresholds have been exceeded

The provider side also sends heartbeats:

- **Provider heartbeat** — confirms the provider process is alive
- **Environment heartbeat** — confirms the specific environment is healthy

## Why Lifecycle Docs Matter

Without a clear lifecycle model, provider docs collapse into deployment instructions.

That is not enough. Provider authors need to know:

- which phase they are implementing
- what must happen before the next phase
- what the server expects at each boundary

## See Also

- [Remote Environments](./01_overview.md)
- [Provider Architecture](./02_provider-architecture.md)
- [Environment Creation And Management](./05_environment-creation-and-management.md)
- [Communication Flow](./06_communication-flow.md)
- [Creating a Custom Provider](../03_creating-a-custom-provider.md)
