# Remote Environments

> In Codebolt, a remote environment is a server-managed execution target.

In Codebolt, a **remote environment** is a server-managed execution target.

It is not just "some sandbox" or "some container". It is a persisted environment record that the server can:

- create
- register
- start
- reconnect
- health-check
- stop
- delete

This is the core object that makes multi-environment orchestration possible.

## Important Clarification

A remote environment does **not** have to be another full Codebolt instance.

In practice, current providers often do start Codebolt or a Codebolt-compatible runtime remotely because it is a convenient way to satisfy the lifecycle and transport contract.

But conceptually the remote side can be:

- a Codebolt runtime
- a custom runtime that implements the expected provider-facing interfaces
- a platform-specific adapter that can host the agent loop and respond to the required provider messages

So the important boundary is the **provider/runtime interface**, not the brand name of the remote process.

## What An Environment Represents

A remote environment combines three things:

| Piece | Role |
|---|---|
| **Environment record** | Persisted metadata such as name, provider, config, and timestamps |
| **Provider process** | The bridge process the server starts to manage that environment |
| **Remote runtime** | The actual sandbox, workspace, container, or remote host where the agent loop runs |

The server owns the environment as a first-class object, not as an ad hoc process.

## Where The Server Manages It

The main server-side environment logic lives in:

- `packages/server/src/services/environmentsServices.ts`
- `packages/server/src/controllers/environmentControllers.ts`

That code is responsible for:

- persisting environments
- tracking lifecycle state
- spawning provider processes
- tracking provider WebSocket connections
- sending `providerStart` and `providerAgentStart`
- stopping, restarting, and reconnecting environments

## Persisted Environment Records

Environment records are stored in `.codebolt/environments.json`.

When the server creates an environment, it:

1. validates uniqueness by environment name
2. writes a new environment record with `id`, `createdAt`, and `updatedAt`
3. inherits agent capability metadata from the chosen provider
4. registers the environment in the lifecycle manager
5. automatically tries to start the provider process

So an environment is durable server state, not just an in-memory runtime.

## The Lifecycle Manager

The server maintains a lifecycle manager for all known environments.

Each tracked instance keeps:

- the environment record
- current state
- provider process handle
- active connection
- start time
- last health check
- restart counts and error counts
- metadata

This lets the server reason about environments consistently across different provider implementations.

## Environment States

The server tracks environments with these states:

| State | Meaning |
|---|---|
| `created` | Registered but not yet started |
| `starting` | Provider startup in progress |
| `running` | Provider active and connected |
| `stopping` | Shutdown in progress |
| `stopped` | Not running |
| `error` | Startup or runtime failure |
| `restarting` | Restart flow in progress |
| `unconnectable` | Remote resource cannot be reached |
| `disconnected` | Expected runtime is temporarily disconnected |
| `not_available` | Underlying resource is unavailable |
| `archived` | No longer active |

## What Happens On Server Startup

The server calls `initializeExistingEnvironments()` during startup.

That flow:

1. loads saved environments from storage
2. registers them with the lifecycle manager
3. checks provider state for persisted remote resource IDs
4. marks reconnect candidates
5. attempts auto-reconnect for environments that still appear recoverable
6. runs an initial health check after startup settles

This is why remote environments can survive server restarts more cleanly than a one-shot process model.

## What Concrete Providers Do

Concrete providers implement the environment-specific parts.

For example:

- `e2b` creates or reconnects to a sandbox
- `daytona-remote-provider` creates or reconnects to a Daytona workspace
- `dockerprovider` manages a container
- `remoteserverprovider` attaches to a remote server

The provider decides how the remote resource is created. The server decides how the environment is tracked and orchestrated.

## E2B As A Concrete Example

The `e2b` provider shows the pattern clearly:

- it extends `BaseProvider`
- it creates or reconnects to a sandbox using a persisted `resourceId`
- it stores local metadata under `.codebolt/remote-envs/{environmentName}`
- it starts Codebolt inside the sandbox
- it reconnects transport back to the server
- it uploads `.codebolt/proxyExecution.json` and related config so capability proxying can work across the boundary

So the provider supplies the remote runtime mechanics, while the server keeps the authoritative environment lifecycle.

## In This Section

- [Provider Architecture](./02_provider-architecture.md)
- [Execution Chaining](./03_execution-chaining.md)
- [Environment Lifecycle](./04_environment-lifecycle.md)
- [Environment Creation And Management](./05_environment-creation-and-management.md)
- [Communication Flow](./06_communication-flow.md)

## See Also

- [Creating a Custom Provider](../03_creating-a-custom-provider.md)
- [Proxy Execution Gateway](../../05_plugins/08_proxy-execution-gateway/01_overview.md)
