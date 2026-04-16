---
sidebar_position: 2
title: Provider Architecture
---

# Provider Architecture

Multi-environment orchestration in Codebolt is built around **providers**.

A provider is the boundary object between:

- the main Codebolt server
- a target execution environment
- the remote runtime that will run the agent loop

## The three pieces

At a high level, the architecture has three layers:

| Layer | Responsibility |
|---|---|
| **Server** | Chooses providers, owns run state, orchestration state, event log, and overall control |
| **Provider** | Creates or attaches to an environment and bridges it back to Codebolt |
| **Remote runtime** | Runs the agent loop inside that environment |

## Where the code lives

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

Concrete providers then override environment-specific hooks.

## What the base provider gives you

From `codeboltjs/packages/provider`, `BaseProvider` already handles the common mechanics:

- `onProviderStart()`
- `onProviderAgentStart()`
- `onProviderStop()`
- `onRawMessage()`
- `ensureTransportConnection()`
- `sendToAgentServer()`
- environment heartbeat and reconnect behavior

That means provider authors usually should not invent lifecycle logic from scratch. They should extend the base and focus on:

- how to create the environment
- how to start the remote runtime
- how to map environment-specific resources into Codebolt concepts

## Common provider shapes

Current providers in the codebase show a few recurring shapes:

- **Sandbox providers** — e.g. `e2b`, `daytona-remote-provider`
- **Container providers** — e.g. `dockerprovider`
- **Filesystem/worktree providers** — e.g. `gitWorkTreeProvider`, `agentfs-provider`
- **Remote server providers** — e.g. `remoteserverprovider`
- **Snapshot-backed providers** — e.g. `narrative-snapshot-provider`

These are different environment strategies, but they all fit the same provider lifecycle.

## Provider manifest

Providers also declare metadata in files such as `codeboltprovider.yaml`.

That is where a provider typically defines:

- name and unique id
- runtime
- entrypoint
- config defaults

This is the provider-side equivalent of a manifest: it tells Codebolt what the provider is and how to start it.

## What the provider should not own

A provider should not become a second control plane.

In the intended model:

- the provider owns environment setup and bridging
- the server owns orchestration and system state
- the remote runtime owns agent execution inside that environment

That separation is what keeps multi-environment execution understandable.

## See also

- [Environment Lifecycle](./03_environment-lifecycle.md)
- [Communication Flow](./04_communication-flow.md)
- [Creating a Custom Provider](./05_creating-a-custom-provider.md)
- [Custom Remote Execution Provider](../05_plugins/08_remote-execution-provider.md)
