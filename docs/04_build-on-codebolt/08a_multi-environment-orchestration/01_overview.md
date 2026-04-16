---
sidebar_position: 1
title: Multi-Environment Orchestration
---

# Multi-Environment Orchestration

This section is about running Codebolt across **more than one execution environment**.

The question here is:

> How does Codebolt start, connect, and coordinate agent work when the agent loop runs in another environment?

That environment might be:

- an E2B sandbox
- a Daytona workspace
- a Docker container
- a Git worktree environment
- another remote Codebolt server
- a snapshot- or narrative-backed environment

## The core idea

Codebolt keeps the **server** as the control plane and system of record.

A provider is responsible for:

- setting up the remote environment
- starting the remote runtime or agent server
- registering the environment back with Codebolt
- forwarding provider lifecycle and filesystem-style requests
- keeping the remote environment alive with heartbeats

In practice, this means the system is split like this:

```text
local codebolt server
      │
      ├── starts / talks to provider
      │
      └── provider creates remote environment
                 │
                 └── remote runtime connects back over WebSocket
```

## Where the implementation lives

The builder-facing parts currently span a few repos/packages:

| Piece | Role |
|---|---|
| `packages/server` | Owns orchestration state, run state, tool execution, plugin lifecycle |
| `packages/codeboltjs` | Agent SDK and provider-facing protocol handlers |
| `codeboltjs/packages/provider` | Base utilities for building environment providers |
| `codeboltjs/providers/*` | Concrete providers such as `e2b`, `daytona-remote-provider`, `dockerprovider`, `gitWorkTreeProvider`, `remoteserverprovider` |

Representative provider implementations exist in:

- `D:\Codeboltapps\codeboltjs\providers\e2b`
- `D:\Codeboltapps\codeboltjs\providers\daytona-remote-provider`
- `D:\Codeboltapps\codeboltjs\providers\dockerprovider`
- `D:\Codeboltapps\codeboltjs\providers\gitWorkTreeProvider`
- `D:\Codeboltapps\codeboltjs\providers\remoteserverprovider`

## How communication works across environments

At a high level, communication looks like this:

1. The server chooses or invokes a provider for an environment.
2. The provider creates or attaches to the remote environment.
3. The provider starts the remote Codebolt runtime or agent server.
4. The remote side connects back over WebSocket.
5. Provider lifecycle messages and agent-start messages flow through that connection.
6. The remote agent loop runs there, while the server remains the authority for run state.

In the current `codeboltjs` runtime, provider-oriented handlers include events like:

- `providerStart`
- `providerAgentStart`
- `providerStop`
- `providerReadFile`
- `providerWriteFile`
- `providerDeleteFile`

Those handlers are exposed from `Codebolt.ts` so provider processes can participate in the protocol without inventing their own transport layer.

## What a custom provider is responsible for

A custom provider typically has to implement these responsibilities:

- resolve the project and workspace context
- set up the target environment
- start or attach to the remote runtime
- establish transport back to Codebolt
- respond to provider lifecycle events
- keep the environment healthy and report heartbeats
- tear the environment down cleanly

The shared base for this lives in `@codebolt/provider`, which exposes a `BaseProvider` abstraction for environment providers.

## What stays local vs what becomes remote

This is the most important thing to explain in the docs.

Usually:

- the **agent loop** runs remotely
- the **server** remains local or central
- **coordination state** still belongs to the server
- **event logs** still belong to the server

Depending on provider design, some environment-specific file operations may be handled through provider messages, while many normal Codebolt services still route through the main server.

So multi-environment is not "a second independent Codebolt." It is one Codebolt system with a remote execution boundary.

## What to document for provider authors

Provider docs should answer four practical questions:

1. How do I create and register the environment?
2. How does the remote runtime connect back?
3. Which messages must my provider handle?
4. What state is owned locally vs remotely?

Those four answers matter more than provider-specific deployment steps.

## Start here if you are building one

1. Read [Custom Remote Execution Provider](../05_plugins/08_remote-execution-provider.md).
2. Read [Creating a Custom Provider](./05_creating-a-custom-provider.md).
3. Read [Provider Architecture](./02_provider-architecture.md).
4. Read [Environment Lifecycle](./03_environment-lifecycle.md).
5. Read [Communication Flow](./04_communication-flow.md).
6. Read [Remote Execution](../11_remote-execution.md) for the user-facing model.

## Suggested documentation scope for this track

This section should cover:

- provider architecture
- provider lifecycle
- transport and communication flow
- environment registration and heartbeat
- remote agent startup
- cross-environment file / diff / merge flows

That keeps it clearly separate from multi-agent orchestration management.

## In this section

- [Provider Architecture](./02_provider-architecture.md)
- [Environment Lifecycle](./03_environment-lifecycle.md)
- [Communication Flow](./04_communication-flow.md)
- [Creating a Custom Provider](./05_creating-a-custom-provider.md)

## See also

- [Multi-Agent Orchestration Management](../08_multi-agent-orchestration/02_multi-agent-orchestration-management.md)
- [Provider Architecture](./02_provider-architecture.md)
- [Custom Remote Execution Provider](../05_plugins/08_remote-execution-provider.md)
- [Remote Execution](../11_remote-execution.md)
- [Architecture for Builders](../02_architecture-for-builders.md)
