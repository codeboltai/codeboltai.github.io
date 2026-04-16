---
sidebar_position: 5
title: Creating a Custom Provider
---

# Creating a Custom Provider

If you want Codebolt to run in a new environment type, you build a custom provider.

The goal is not just "make a sandbox." The goal is:

- create the environment
- start the remote runtime
- connect it back to Codebolt
- keep the lifecycle stable

## Start from the base package

The shared starting point is `@codebolt/provider`.

That package gives you `BaseProvider`, which already handles the common parts of:

- lifecycle wiring
- transport setup
- reconnect logic
- heartbeat flow
- message forwarding

That means your provider implementation should mainly focus on the parts unique to your target environment.

## What you usually implement

A custom provider normally needs to define:

- how the environment is created or attached
- how workspace paths are resolved
- how the remote runtime is started
- how diff / file operations are handled when provider-specific
- how teardown happens

In practice, this usually maps to overriding environment-specific hooks in a provider service class.

## A good authoring workflow

Use this order:

1. Pick the closest existing provider.
2. Read its `codeboltprovider.yaml`.
3. Read its service implementation.
4. Copy the lifecycle shape, not just the deployment commands.
5. Replace the environment-specific parts.

Good starting references from the current codebase:

- `codeboltjs/providers/e2b`
- `codeboltjs/providers/daytona-remote-provider`
- `codeboltjs/providers/dockerprovider`
- `codeboltjs/providers/gitWorkTreeProvider`

## What to decide early

Before you write code, decide:

- Is this a sandbox, container, worktree, remote server, or snapshot-backed environment?
- Does the remote runtime run a full Codebolt runtime or a thinner bridge?
- Which file operations are handled remotely vs through the main server?
- Is the environment ephemeral or reusable?
- How are diffs and mergeable changes produced?

These decisions shape the whole provider.

## Minimal provider checklist

- Provider manifest exists
- Provider extends the shared base
- Environment setup works
- Remote runtime can connect back
- Agent start can be forwarded
- Heartbeat works
- Stop / teardown works

If any one of those is missing, the provider is not production-ready.

## Suggested follow-up pages

This page is the entry point. After it, provider authors usually need:

- provider architecture
- environment lifecycle
- communication flow
- concrete provider examples

That is why this section is split instead of trying to explain everything here.

## See also

- [Provider Architecture](./02_provider-architecture.md)
- [Environment Lifecycle](./03_environment-lifecycle.md)
- [Communication Flow](./04_communication-flow.md)
- [Custom Remote Execution Provider](../05_plugins/08_remote-execution-provider.md)
