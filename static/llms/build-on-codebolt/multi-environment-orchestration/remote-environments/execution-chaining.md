# Execution Chaining

> Where does the agent loop run?

Execution chaining is the model where Codebolt combines:

- a **remote environment/provider boundary**
- a **server-centered orchestration model**
- optional **capability proxying** through the Proxy Execution Gateway

This is where multi-platform execution starts to become more than "run the agent somewhere else".

## The Core Idea

The provider answers:

> Where does the agent loop run?

The Proxy Execution Gateway answers:

> Which capability calls should stay local, and which should be deferred somewhere else?

When you combine those two, you get chaining.

## Not Necessarily Another Codebolt Instance

Remote execution does not have to mean “spin up another full Codebolt app somewhere else”.

The remote side only needs to satisfy the interfaces required by the provider/runtime boundary for that setup.

In practice, many current providers do run Codebolt remotely because it already speaks the right lifecycle and transport model. But that is an implementation choice, not the only valid shape.

## The Chaining Model

At a high level:

1. the server selects a remote environment
2. the provider creates or reconnects the remote runtime
3. the remote agent loop starts there
4. the agent sends capability requests back through the server
5. some capabilities execute locally to the server or remote runtime
6. some capabilities are proxied through `proxyExecution.json`
7. proxied work can be handled by another platform, gateway connection, or backend

So execution can cross more than one boundary while the server remains the hub.

## Why This Matters

Without chaining, remote execution only changes **where the agent runs**.

With chaining, Codebolt can also change **where specific capabilities execute**.

That is important when:

- the remote environment lacks direct LLM access
- the remote environment should not access the local filesystem directly
- one environment is good at execution, while another is good at LLM/tool access
- you want cloud or external systems to observe or mirror execution

## Server-Centered Chaining

The key design point is that the server still stays central.

The chain is not:

- UI directly to provider
- provider directly to external backend
- external backend directly to agent

The chain is:

- the **server** remains the authority
- the **provider** hosts the runtime boundary
- the **gateway** selectively proxies capability calls

That keeps state, event ownership, and orchestration understandable.

## E2B Example

The `e2b` provider makes this concrete.

Its startup flow uploads project-level config such as:

- `.codebolt/proxyExecution.json`
- `.codebolt/projectState.json`
- `.codebolt/gateway-thread-map.json`

and also uploads global `settings.json` into the sandbox.

That matters because the remote runtime can then participate in a capability-routing model where some operations still proxy back through the gateway instead of executing entirely inside the sandbox.

So in that pattern:

- the sandbox hosts the agent loop
- the server stays central
- the gateway decides which capability calls should be routed elsewhere

## Connection To Proxy Execution Gateway

Execution chaining is where the gateway fits naturally into remote environments.

The split is:

- the **provider** gives the server a place to run the agent loop remotely
- the **gateway** gives the server a way to defer selected capabilities somewhere else

That means a remote environment can:

- run the loop remotely
- still proxy `Inference`
- still proxy selected filesystem or browser capabilities
- mirror or audit locally handled work through notifications

## Chaining Across Multiple Platforms

Once you think in this model, Codebolt is not limited to one remote platform.

A chained system can look like:

- UI on one platform
- server on another
- remote agent runtime in a provider-managed environment
- LLM or filesystem work proxied to another platform or service

This is why the gateway docs and the remote-environment docs should be separate: they describe different layers of the same chained system.

## What This Page Is Not

This page is not the gateway protocol reference.

For gateway-specific details such as:

- `executionGateway.request`
- `executionGateway.reply`
- `executionGateway.notification`
- `/plugins` direct-connect transport

see [Proxy Execution Gateway](../../05_plugins/08_proxy-execution-gateway/01_overview.md).

## See Also

- [Remote Environments](./01_overview.md)
- [Provider Architecture](./02_provider-architecture.md)
- [Environment Creation And Management](./05_environment-creation-and-management.md)
- [Proxy Execution Gateway](../../05_plugins/08_proxy-execution-gateway/01_overview.md)
- [Direct Plugin Socket Interface](../../05_plugins/08_proxy-execution-gateway/plugins-socket-interface.md)
