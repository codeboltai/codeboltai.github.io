---
sidebar_position: 2
title: Provider Architecture
---

import RemoteExecutionProviderConcept from '@site/src/components/diagrams/RemoteExecutionProviderConcept';

# Provider Architecture

Multi-environment orchestration in Codebolt is built around **providers**.

<RemoteExecutionProviderConcept />

A provider is the boundary object between:

- the main Codebolt server
- a target execution environment
- the remote runtime that will run the agent loop

## The Three Pieces

At a high level, the architecture has three layers:

| Layer | Responsibility |
|---|---|
| **Server** | Chooses providers, owns run state, orchestration state, event log, environment state, and overall control |
| **Provider** | Creates or attaches to an environment and bridges it back to Codebolt |
| **Remote runtime** | Runs the agent loop inside that environment |

## Where The Code Lives

The main pieces currently live in:

- `packages/server`
- `packages/codeboltjs`
- `codeboltjs/packages/provider`
- `codeboltjs/providers/*`

The shared provider base is `@codebolt/provider`, which exposes `BaseProvider`.

That base consolidates:

- lifecycle entry points
- WebSocket transport setup
- reconnect logic
- heartbeat management
- message forwarding
- provider state tracking
- persisted resource ID helpers

Concrete providers then override environment-specific hooks.

## What The Base Provider Gives You

From `codeboltjs/packages/provider`, `BaseProvider` already handles the common mechanics:

- `onProviderStart()`
- `onProviderAgentStart()`
- `onProviderStop()`
- `onRawMessage()`
- `ensureTransportConnection()`
- `sendToAgentServer()`
- queued messages before transport is ready
- reconnect with exponential backoff
- provider and environment heartbeats

That means provider authors usually should not invent lifecycle logic from scratch. They should extend the base and focus on:

- how to create or reconnect the environment
- how to start the remote runtime
- how to map environment-specific resources into Codebolt concepts

## Common Provider Shapes

Current providers in the codebase show a few recurring shapes:

- **Sandbox providers** — `e2b`, `daytona-remote-provider`
- **Container providers** — `dockerprovider`
- **Filesystem/worktree providers** — `gitWorkTreeProvider`, `agentfs-provider`
- **Remote server providers** — `remoteserverprovider`
- **Snapshot-backed providers** — `narrative-snapshot-provider`

These are different environment strategies, but they all fit the same provider lifecycle.

## Provider Manifest And Config

Providers declare metadata in files such as `codeboltprovider.yaml` and `providers.yaml`.

That is where a provider typically defines:

- name and unique id
- runtime
- entrypoint
- config defaults

On the server side, provider configuration is merged from:

1. provider defaults from `providers.yaml`
2. installed provider config
3. environment-specific config

That merged config is then passed into `providerStart`.

## What The Provider Should Not Own

A provider should not become a second control plane.

In the intended model:

- the provider owns environment setup and bridging
- the server owns orchestration, environment state, and system state
- the remote runtime owns agent execution inside that environment

That separation is what keeps multi-environment execution understandable.

## E2B As A Good Reference Model

The `e2b` provider is a useful example because it shows the full architecture:

- `onProviderStart()` creates or reconnects a sandbox
- `ensureAgentServer()` starts Codebolt in the sandbox
- transport reconnects back to the server
- the provider persists and reuses `resourceId`
- heartbeat and reconnect are handled through the shared base

It is a good reference when you want to understand what "provider architecture" means in a real implementation.

## A Provider Is An Adapter, Not A Product Name

The important architectural point is that a provider is an adapter around the required lifecycle and transport interfaces.

That means the remote side does not have to be "another Codebolt app" as a conceptual requirement.

It can be:

- a Codebolt-based remote runtime
- a custom runtime that satisfies the expected lifecycle and transport contract
- a platform-specific adapter that knows how to host the loop and respond to provider messages

## See Also

- [Remote Environments](./01_overview.md)
- [Execution Chaining](./03_execution-chaining.md)
- [Environment Lifecycle](./04_environment-lifecycle.md)
- [Environment Creation And Management](./05_environment-creation-and-management.md)
- [Communication Flow](./06_communication-flow.md)
- [Creating a Custom Provider](../03_creating-a-custom-provider.md)
