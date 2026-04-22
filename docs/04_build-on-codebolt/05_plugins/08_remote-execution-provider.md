---
sidebar_position: 8
title: Execution Gateway
---

import RemoteExecutionProviderConcept from '@site/src/components/diagrams/RemoteExecutionProviderConcept';
import RemoteExecutionSequence from '@site/src/components/diagrams/RemoteExecutionSequence';

# Custom Remote Execution Provider

A custom remote execution provider is the component that lets Codebolt run an agent in some other runtime while keeping the local server in control of orchestration. In the current server architecture, this is broader than an execution-gateway plugin.

The important distinction is:

- An **execution gateway plugin** intercepts or observes requests.
- A **remote execution provider** is a managed environment backend. The server installs or discovers it, creates environment records for it, starts it as a child process, waits for it to register over WebSocket, then uses it for agent startup, file operations, diffs, workspace transfer, and shutdown.

## Architecture

<RemoteExecutionProviderConcept />

## Sequence: Registration, Proxying, and Notifications

<RemoteExecutionSequence />

Read the sequence in four phases:

- The remote execution plugin connects and takes the execution-gateway role by claiming and subscribing.
- A Codebolt surface sends the prompt, and the server chooses the environment and autospawns the agent.
- When the agent asks for an LLM call, the server reads proxy execution config, resolves that function as `proxy`, and forwards the request to the remote execution gateway as `executionGateway.request`.
- When some other action is handled locally by the server, the server reads proxy execution config, resolves that function as `local`, sends the result back to the agent, and emits `executionGateway.notification` to subscribed plugins.

The important details are:

- the **server remains the hub**
- the **agent is server-spawned**, not plugin-spawned
- the **server reads proxy execution config** to decide what stays local and what gets proxied
- **proxy requests and notifications are different message paths**

A claimed LLM request uses `request/reply`. A locally executed operation uses `notification`.

## The Core Concept

Codebolt separates **control** from **runtime**:

- The **server** remains the control plane. It stores environment metadata, decides when to start and stop providers, tracks health, and keeps the authoritative project state.
- The **provider** is the adapter. It knows how to create or attach to a remote runtime such as a container, VM, sandbox, or external host.
- The **remote runtime** is where the agent process and workspace actually live.

That means a provider is not just "run this command somewhere else." It is the long-lived bridge between the Codebolt server and a remote execution environment.

## Two Related Mechanisms

There are two surfaces that are easy to confuse.

| Surface | What it does | When to use it |
|---|---|---|
| **Execution gateway plugin** | Claims or subscribes to execution requests and notifications | When you want interception, proxying, mirroring, analytics, or a compatibility bridge |
| **Environment provider** | Manages full remote environments and exposes lifecycle + filesystem/project operations | When you want agents to truly run in another runtime under server supervision |

This page is in the Plugin System section because the gateway layer still matters, and the server also exposes a `/plugins` compatibility socket for provider-style bridges. But the actual remote execution model in the server is environment-based.

## What The Server Actually Manages

In the current server implementation, remote execution revolves around four kinds of state:

| State | Purpose |
|---|---|
| Local provider packages | Provider code discovered from project-local or installed provider directories |
| Installed provider records | Saved provider configuration and default-selection data |
| Environment records | Named environments that point at a provider plus per-environment config |
| Provider runtime state | Running process info, connection state, restart counters, logs, and persisted resource metadata |

In practice this means Codebolt keeps:

- provider packages under `.codebolt/providers/...`
- installed-provider metadata in `.codebolt/installed-providers.json`
- environment definitions in `.codebolt/environments.json`
- persisted provider state in `.codebolt/provider-states/...`
- provider logs in `.codebolt/providerlog.log`

## Provider Lifecycle

### 1. Provider discovery and configuration

The server discovers provider packages from local provider folders and installed provider records. Provider defaults can come from provider metadata, then get overridden by installed-provider config, then overridden again by environment-specific config.

That merge order matters because it gives you:

- provider-level defaults
- user- or project-level installed config
- per-environment overrides

### 2. Environment creation

When a user creates an environment, the server stores a new environment record and immediately registers it with the lifecycle manager. Creating the environment is not the same thing as the provider being ready; the server then tries to start the provider automatically.

### 3. Provider process startup

The server starts the provider as a **child process**. It resolves the provider entrypoint from the provider package, prepares merged configuration, and injects environment variables such as:

| Variable | Meaning |
|---|---|
| `SOCKET_PORT` | Port the provider should use to connect back to the server |
| `providerId` | Provider identity |
| `environmentId` | Environment instance identity |
| `environmentName` | Human-readable environment name |
| `IS_PROVIDER` | Marks the process as a provider |
| `IS_REMOTE_PROVIDER` | Marks it as a remote execution provider |
| `ENVIRONMENT_CONFIG` | JSON-serialized merged configuration |

At this point the process exists, but the environment is still only **starting**.

### 4. WebSocket registration and readiness handshake

After booting, the provider connects back to the server over the Codebolt WebSocket channel and sends a provider-start response. Only then does the server mark the environment as **running**.

This handshake is the critical boundary:

- spawning the child process means "the provider executable launched"
- receiving `providerStartResponse` means "the provider is ready to serve remote work"

### 5. Agent startup in the remote environment

When work is routed into that environment, the server sends a provider-agent-start message. Before doing that, it can prepare narrative and workspace artifacts such as snapshot archives and unified bundles so the remote runtime starts with the correct project context.

The provider then does whatever its backend requires:

- create a sandbox
- start a container
- attach to a VM
- copy project state
- launch the agent server remotely

### 6. Ongoing remote operations

Once connected, the provider becomes the server's adapter for remote environment operations. This is not limited to agent startup.

Typical provider RPC responsibilities include:

- start or stop the remote environment
- return diff files
- read and write files
- return the full project
- merge patches
- list tree children
- create, rename, and delete files or folders

This is why a provider is a backend, not just a proxy.

### 7. Health, heartbeat, and restart

The server monitors environment health and can persist provider state for reconnect or restart logic. If a provider disconnects or a remote resource still exists, the server can attempt recovery and re-registration instead of assuming the environment is gone forever.

### 8. Graceful stop

Stopping an environment is also structured:

1. The server sends a provider stop request.
2. It waits for the provider's stop response when possible.
3. If needed, it terminates the child process.
4. It updates lifecycle state and clears process/connection tracking.

## What The Provider Is Responsible For

A custom provider should own the runtime-specific parts:

- create or attach to the remote environment
- start the agent server there
- move project state into that runtime when needed
- translate file operations into the backend's filesystem or API model
- report readiness, operation results, and stop acknowledgements
- handle backend-specific health checks and cleanup

If you are building a provider, think of it as a **backend adapter** for a target execution system, not as a thin message forwarder.

## What The Server Still Owns

Even with remote execution enabled, the server still owns the orchestration side:

- environment creation and identity
- provider installation and selection
- process supervision
- lifecycle state transitions
- restart policy
- logging and debug surfaces
- routing work into the selected environment

This is the design intent: remote execution should move the runtime, not replace the platform's control plane.

## Where Plugins Still Fit

Plugins still matter in three places:

### Execution gateway interception

An execution plugin can claim the gateway and decide whether requests should be proxied elsewhere. That is useful for:

- execution mirroring
- request interception
- custom routing policies
- compatibility with older remote-execution patterns

### Notifications

A subscribed plugin can observe execution without replacing it. That is useful for:

- analytics
- audit trails
- cloud visibility
- synchronization with external systems

### Compatibility bridge for external providers

The server also exposes a plugin-style bridge for external provider processes. This is useful when a provider or remote host wants plugin-compatible request forwarding without running as a normal in-process plugin.

## When To Build Which

| Goal | Build |
|---|---|
| Replace or observe some execution requests | Execution gateway plugin |
| Run full agents in containers, VMs, sandboxes, or remote hosts | Custom environment provider |
| Need remote file/project operations and environment lifecycle | Custom environment provider |
| Need logging, mirroring, or policy hooks on top of execution | Plugin, sometimes alongside a provider |

## Minimal Provider Shape

At the SDK level, a provider typically registers lifecycle and file handlers, not just a single `onRequest` proxy callback:

```ts
import codebolt from '@codebolt/codeboltjs';
import { MyProvider } from './MyProvider';

const provider = new MyProvider();
const handlers = provider.getEventHandlers();

codebolt.onProviderStart(handlers.onProviderStart);
codebolt.onProviderAgentStart(handlers.onProviderAgentStart);
codebolt.onProviderStop(handlers.onProviderStop);
codebolt.onGetDiffFiles(handlers.onGetDiffFiles);

codebolt.onReadFile(provider.onReadFile.bind(provider));
codebolt.onWriteFile(provider.onWriteFile.bind(provider));
codebolt.onGetFullProject(provider.onGetFullProject.bind(provider));
codebolt.onGetTreeChildren(provider.onGetProject.bind(provider));
```

That shape reflects the real concept: a provider handles environment lifecycle plus remote workspace operations.

## Design Guidance

- Prefer providers when the remote side has its own filesystem, process model, or resource lifecycle.
- Keep provider startup idempotent. The server may reconnect or restart around persisted remote resources.
- Treat readiness as a handshake, not just "process started."
- Make file and project operations explicit; hidden side channels create drift between local control state and remote runtime state.
- Use execution plugins for interception and observation, not as the only explanation of remote execution.

## See Also

- [Gateway, Execution, and LLM Provider Patterns](./04_major-patterns.md)
- [Custom Execution Backends](../06_extending-codebolt/06_execution-backends.md)
- [Build Your First Execution Backend](../06_extending-codebolt/07_build-your-first-execution-backend.md)
- [Remote Execution](../11_agent-infrastructure/09_remote-execution.md)
- [Packaging and Publishing Plugins](./99_packaging-and-publishing.md)
