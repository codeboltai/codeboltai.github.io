---
sidebar_position: 5
title: Environment Creation And Management
description: This page is about how the server manages remote environments as real system objects.
---

import EnvironmentManagementFlow from '@site/src/components/diagrams/EnvironmentManagementFlow';

# Environment Creation And Management

This page is about how the **server** manages remote environments as real system objects.

It is based on the current logic in `packages/server/src/services/environmentsServices.ts` and `packages/server/src/controllers/environmentControllers.ts`.

<EnvironmentManagementFlow />

## Environments Are Persisted Objects

Remote environments are saved in `.codebolt/environments.json`.

That means creating an environment does more than launching a process. The server creates a durable record with:

- `id`
- `name`
- provider metadata
- config
- timestamps
- inherited agent capability flags from the provider

This is why the environment can later be listed, restarted, stopped, deleted, or reconnected.

## Create Flow

When `createEnvironment()` runs, the server:

1. loads environment storage
2. rejects duplicate names
3. creates the new environment record
4. writes it to `.codebolt/environments.json`
5. registers it in the lifecycle manager
6. immediately attempts to start the provider process

If provider startup fails, environment creation still succeeds. The environment remains saved, but its lifecycle state is updated to `error`.

## Provider Startup Flow

When `startEnvironmentProvider()` runs, the server:

1. checks whether a provider process is already running for that environment
2. sets lifecycle state to `starting`
3. opens an environment debug session
4. resolves the provider path
5. resolves the entry point from `remote.json` or `package.json`
6. merges provider config from YAML, installed-provider config, and environment config
7. spawns the provider child process
8. waits for `providerStartResponse`
9. transitions the environment to `running` once the provider connects successfully

So provider startup is a managed server workflow, not just a shell-out.

## Connection Registration Flow

When a provider WebSocket connects, `registerEnvironmentProviderConnection()`:

1. stores the active connection
2. associates it with the lifecycle manager
3. marks the environment `running`
4. creates a snapshot archive
5. creates a unified narrative bundle
6. resolves provider config and persisted `resourceId`
7. sends the `providerStart` message to the provider

That means the server does not just wait passively for a provider. It actively initializes it with:

- environment identity
- project context
- snapshot paths
- narrative bundle path
- merged config
- persisted resource information for recovery

## Agent Start Flow

When the server wants to start work in a remote environment, it calls `sendProviderAgentStartToEnvironment()`.

That flow:

1. creates or reuses a snapshot archive
2. creates a unified narrative bundle
3. updates active narrative context
4. resolves the provider socket for the environment
5. sends `providerAgentStart`
6. waits for the remote side to acknowledge agent startup

This is the handoff from environment management into actual remote agent execution.

## Reconnect And Recovery

On server startup, `initializeExistingEnvironments()` reloads saved environments and checks whether any have a persisted remote resource.

If they do, the server:

- registers the environment again
- marks it as a reconnect candidate
- attempts to restart the provider flow
- tries to reconnect to the existing remote resource rather than always creating a new one

This is one of the main reasons persisted `resourceId` matters.

The concrete `e2b` provider shows this clearly by reconnecting to an existing sandbox when possible and only creating a new one if recovery fails.

## Health Checks And Restart Policy

The lifecycle manager tracks:

- process handle
- connection handle
- last error
- restart count
- error count

It also runs periodic health checks and uses restart/error thresholds to decide whether an environment should be restarted or left in an error state.

So remote environments are managed as supervised resources, not fire-and-forget subprocesses.

## Delete Flow

When an environment is deleted, the server:

1. resolves the environment record
2. attempts to stop the provider process
3. unregisters the environment from the lifecycle manager
4. removes it from `.codebolt/environments.json`

This makes deletion a full cleanup path, not just record removal.

## Concrete Provider Example: E2B

The `e2b` provider demonstrates several management patterns that are important for remote environments:

- local metadata directory under `.codebolt/remote-envs/{environmentName}`
- reconnect via persisted sandbox `resourceId`
- optional fallback to creating a fresh sandbox
- upload of `.codebolt` config into the sandbox
- startup of Codebolt inside the sandbox before transport is used

That makes it a strong reference implementation when documenting environment creation and recovery.

## What This Means For Docs

When documenting remote environments, the important distinction is:

- **provider docs** explain how a provider behaves
- **environment management docs** explain how the server supervises, stores, restarts, and coordinates environments

Both are necessary. One without the other gives an incomplete mental model.

## See Also

- [Remote Environments](./01_overview.md)
- [Provider Architecture](./02_provider-architecture.md)
- [Execution Chaining](./03_execution-chaining.md)
- [Environment Lifecycle](./04_environment-lifecycle.md)
- [Communication Flow](./06_communication-flow.md)
