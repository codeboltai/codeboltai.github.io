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

## What should be documented next

A good next-level provider doc should describe:

- which messages are required
- what payload each one carries
- which side initiates each message
- which side is authoritative for success/failure

That would turn this page from architecture into protocol guidance.

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
