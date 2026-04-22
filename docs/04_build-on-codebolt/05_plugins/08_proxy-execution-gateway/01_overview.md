---
sidebar_position: 1
title: Proxy Execution Gateway
---

import RemoteExecutionSequence from '@site/src/components/diagrams/RemoteExecutionSequence';

# Proxy Execution Gateway

The Proxy Execution Gateway is the plugin-side deferred execution mechanism in Codebolt. It works together with **proxy execution config** to let the server decide, per function, whether a request should be handled locally or proxied elsewhere.

## What The Gateway Is

The server receives messages from an agent, reads proxy execution config, and decides one of two things:

- **local**: handle the function inside the current platform
- **proxy**: forward the function to the claiming gateway connection

This is useful when a platform does not have a capability itself. For example:

- a platform cannot perform certain filesystem operations locally
- a platform cannot make an LLM call directly
- a platform wants to defer selected work to another platform with richer capabilities

In that model, the gateway is the routing and delegation mechanism.

This is why the gateway should be thought of as **capability routing**, not as the remote environment itself.

## Proxy Execution Config

The server-side decision comes from proxy execution config in `.codebolt/proxyExecution.json`.

That config is loaded and resolved in:

- `packages/server/src/stores/proxyExecutionConfigStore.ts`
- `packages/server/src/cliLib/index.ts`

The important behavior is:

- rules can be set per message type or per `type:action`
- the server resolves `proxy` or `local`
- only then does it decide whether to call `executionGateway.request` or execute locally

That means proxying is **granular**. You can proxy only the capabilities the current platform lacks, while leaving everything else local.

Examples:

- keep filesystem local, proxy only `Inference`
- keep LLM local, proxy only selected `FSEvent:*` operations
- proxy a narrow subset such as `BrowserEvent:screenshot`
- route one platform's missing capabilities into another platform with richer APIs

## Sequence: Registration, Proxying, And Notifications

<RemoteExecutionSequence />

Read the sequence in four phases:

- The gateway connection claims execution handling and subscribes to notifications.
- A Codebolt surface sends the prompt, and the server chooses the environment and autospawns the agent.
- When the agent asks for an LLM call, the server reads proxy execution config, resolves that function as `proxy`, and forwards the request as `executionGateway.request`.
- When some other action is handled locally by the server, the server reads proxy execution config, resolves that function as `local`, sends the result back to the agent, and emits `executionGateway.notification` to subscribers.

The important details are:

- the **server remains the hub**
- the **agent is server-spawned**
- the **server reads proxy execution config** to decide what stays local and what gets proxied
- **proxy requests and notifications are different message paths**

A claimed LLM request uses `request/reply`. A locally executed operation uses `notification`.

## Claim, Reply, And Subscribe

The gateway has two main modes:

| Mode | What it does |
|---|---|
| `claim()` | Take ownership of proxied execution requests |
| `subscribe()` | Observe execution notifications after local handling |

The core request flow is:

1. server resolves a function as `proxy`
2. server sends `executionGateway.request`
3. gateway handler processes or forwards the request
4. gateway handler sends `executionGateway.reply`
5. server returns the result to the agent

The local-notification flow is:

1. server resolves a function as `local`
2. server handles it inside the current platform
3. server sends the result back to the agent
4. server broadcasts `executionGateway.notification` to subscribers

## What It Enables

The gateway is useful for:

- deferred execution on platforms missing some capabilities
- LLM delegation to another platform
- filesystem delegation to another platform
- cross-platform chaining
- mirroring, audit, analytics, and cloud visibility

This is why it is better thought of as **execution routing infrastructure**, not as the provider itself.

## Remote Environments And Chaining

This page intentionally stays focused on the gateway itself.

If you want to understand:

- how remote environments are created and tracked
- how providers host the remote runtime
- how gateway proxying and remote environments combine into execution chaining

read the multi-environment docs instead:

- [Remote Environments](../../08a_multi-environment-orchestration/02_remote-environments/01_overview.md)
- [Provider Architecture](../../08a_multi-environment-orchestration/02_remote-environments/02_provider-architecture.md)
- [Execution Chaining](../../08a_multi-environment-orchestration/02_remote-environments/03_execution-chaining.md)

## See Also

- [Direct Plugin Socket Interface](./plugins-socket-interface.md)
- [Gateway, Execution, and LLM Provider Patterns](../04_major-patterns.md)
- [Remote Environments](../../08a_multi-environment-orchestration/02_remote-environments/01_overview.md)
- [Execution Chaining](../../08a_multi-environment-orchestration/02_remote-environments/03_execution-chaining.md)
- [Creating a Custom Provider](../../08a_multi-environment-orchestration/03_creating-a-custom-provider.md)
