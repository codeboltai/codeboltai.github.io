---
sidebar_position: 3
title: Environment Lifecycle
---

# Environment Lifecycle

Every remote or alternate environment in Codebolt follows a lifecycle.

This lifecycle is what lets the server treat different providers consistently.

## The lifecycle phases

At a high level:

1. **Initialize**
2. **Resolve context**
3. **Setup environment**
4. **Start remote runtime**
5. **Connect transport**
6. **Run agents**
7. **Heartbeat and recover**
8. **Stop and teardown**

## What this looks like in the provider base

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

## Phase 2: Resolve project and workspace context

Before the environment can run, the provider has to know:

- which project it represents
- which workspace path to expose
- which remote directory or resource maps to that workspace

This is especially important for worktree and snapshot-based providers.

## Phase 3: Setup environment

This is the environment-specific step.

Examples:

- create a sandbox
- create a Docker container
- create a Git worktree
- attach to a remote server
- restore a snapshot-backed workspace

This is the point where provider implementations differ most.

## Phase 4: Start the remote runtime

After the environment exists, the provider starts the remote runtime or agent server inside it.

That runtime is what will eventually connect back to Codebolt and receive agent-start messages.

## Phase 5: Connect transport

The remote side then establishes transport back to Codebolt, typically via WebSocket.

At that point:

- the provider is registered
- the environment becomes addressable
- the server can begin forwarding work

## Phase 6: Run agents

Once connected, agent-start and raw provider messages can flow through the transport.

This is the steady-state execution phase.

## Phase 7: Heartbeat and recovery

Long-lived environments need health checks.

The provider base already models:

- reconnect attempts
- environment heartbeat
- transport keepalive

This matters because remote environments are failure-prone compared with local runs.

## Phase 8: Stop and teardown

When a run or environment ends, the provider should:

- stop forwarding messages
- disconnect transport
- stop the remote runtime
- release the environment resource cleanly

For some providers this means deleting a sandbox or container. For others it means preserving state for later merge or reuse.

## Why lifecycle docs matter

Without a clear lifecycle model, provider docs collapse into deployment instructions.

That is not enough. Provider authors need to know:

- which phase they are implementing
- what must happen before the next phase
- what the server expects at each boundary

## See also

- [Provider Architecture](./02_provider-architecture.md)
- [Communication Flow](./04_communication-flow.md)
- [Creating a Custom Provider](./05_creating-a-custom-provider.md)
