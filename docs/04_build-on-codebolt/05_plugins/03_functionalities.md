---
sidebar_position: 3
title: Major Plugin Functionalities
---

# Major Plugin Functionalities

Plugins have access to a large part of the Codebolt runtime through [`PluginClient`](D:/Codeboltapps/CodeBolt/packages/pluginSdk/src/core/PluginClient.ts). This page groups the major areas a plugin can work with.

## Files, terminal, git, and project context

Plugins can work with the local workspace and execution environment using modules such as:

- `plugin.fs`
- `plugin.terminal`
- `plugin.git`
- `plugin.project`
- `plugin.projectStructure`
- `plugin.codebaseSearch`
- `plugin.codemap`
- `plugin.environment`

This lets a plugin inspect files, run commands, search the repo, understand project structure, and coordinate with environments.

## Chat, tasks, threads, and jobs

Plugins can participate in the live application flow using:

- `plugin.chat`
- `plugin.task`
- `plugin.thread`
- `plugin.todo`
- `plugin.job`
- `plugin.chatApi`
- `plugin.tasksApi`
- `plugin.threadsApi`
- `plugin.jobsApi`

This is useful when a plugin needs to create or observe work in the same runtime the app and agents already use.

## Knowledge, memory, and state

Plugins can read and write application state through:

- `plugin.knowledge`
- `plugin.vectordb`
- `plugin.kvStore`
- `plugin.memory`
- `plugin.cbstate`
- `plugin.knowledgeApi`
- `plugin.kvStoreApi`
- `plugin.vectordbApi`

That makes plugins suitable for integrations that need persistence, retrieval, or background memory storage.

## Dynamic UI inside the app

Plugins can render custom surfaces inside existing Codebolt UIs using:

- `plugin.dynamicPanel.open()`
- `plugin.dynamicPanel.update()`
- `plugin.dynamicPanel.close()`
- `plugin.dynamicPanel.send()`
- `plugin.dynamicPanel.list()`
- `plugin.dynamicPanel.onMessage()`

Use this when your plugin needs an in-app panel rather than a separate standalone frontend. For the UI side of that model, see [Dynamic Panels](../04_custom-uis/05_dynamic-panels.md).

## Browser, calendar, mail, and external app-facing services

The plugin SDK exposes modules for application-level service integrations:

- `plugin.browser`
- `plugin.calendar`
- `plugin.mail`
- `plugin.eventLog`
- `plugin.notify`

These are useful when building integrations that react to communication, scheduling, browser state, or application events.

## MCP and hook management

Plugins can also work with extension infrastructure itself:

- `plugin.mcp` for listing, configuring, and executing MCP tools and servers through the server
- `plugin.hook` and `plugin.hooksApi` for managing hooks through the application

This is part of why plugins sit at the application layer rather than only the agent layer.

## Real-time subscriptions

Under `plugin.sockets`, plugins can subscribe to push-based channels such as:

- chat events
- jobs and tasks
- knowledge events
- event logs
- project structure updates
- editor and LSP channels
- system alerts

Use socket subscriptions when your plugin needs to stay attached to a live stream of app events.

## Practical examples from the repo

The current built-in plugins show how these capabilities are used in practice:

- [`cloud-plugin`](D:/Codeboltapps/CodeBolt/packages/plugins/cloud-plugin) subscribes to execution notifications and forwards chat and execution events to a cloud connection.
- [`remote-execution-plugin`](D:/Codeboltapps/CodeBolt/packages/plugins/remote-execution-plugin) claims the execution gateway and forwards requests to a remote provider.
- [`custom-llm-plugin`](D:/Codeboltapps/CodeBolt/packages/plugins/custom-llm-plugin) registers a custom LLM provider and answers completion requests.

## Choosing the right surface

A useful rule is:

- use a **module** when you want runtime operations tied closely to the server message bus
- use an **HTTP API** when you want CRUD-style app operations
- use **sockets** when you want live subscriptions
- use **dynamic panels** when you need UI inside the existing app
- use **gateway / execution / llm provider modules** when you are extending core application behavior

## See also

- [Plugin SDK and lifecycle](./02_hook-types.md)
- [Gateway, execution, and LLM provider patterns](./04_capabilities-overview.md)
