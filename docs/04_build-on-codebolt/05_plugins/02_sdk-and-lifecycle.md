---
sidebar_position: 2
title: Plugin SDK and Lifecycle
---

# Plugin SDK and Lifecycle

The main SDK for plugin authors is [`@codebolt/plugin-sdk`](D:/Codeboltapps/CodeBolt/packages/pluginSdk). It is not the same as the client SDK used for custom frontends. Plugins are server-side extensions that connect back to the application runtime.

## Core runtime model

The default export is a singleton `PluginClient`:

```ts
import plugin from '@codebolt/plugin-sdk';
```

That client is defined in [`src/core/PluginClient.ts`](D:/Codeboltapps/CodeBolt/packages/pluginSdk/src/core/PluginClient.ts). It combines:

- a plugin lifecycle API
- cliLib-style WebSocket modules such as `plugin.fs`, `plugin.git`, `plugin.dynamicPanel`, and `plugin.gateway`
- multiplexed socket subscriptions exposed under `plugin.sockets`
- HTTP APIs such as `plugin.chatApi`, `plugin.projectsApi`, `plugin.systemApi`, and `plugin.hooksApi`
- notification helpers under `plugin.notify`

## Lifecycle hooks

The core lifecycle entry points are:

- `plugin.onReady(handler)`
- `plugin.onStart(handler)`
- `plugin.onStop(handler)`
- `plugin.onRawMessage(handler)`

A minimal plugin looks like this:

```ts
import plugin from '@codebolt/plugin-sdk';

plugin.onStart(async (ctx) => {
  console.log(`Started plugin ${ctx.pluginId} in ${ctx.pluginDir}`);
});

plugin.onStop(async () => {
  console.log('Stopping plugin');
});
```

The `ctx` object passed to `onStart()` includes:

- `pluginId`
- `pluginDir`
- `manifest`

## Access patterns inside a plugin

The SDK gives you three practical ways to interact with the app.

### 1. WebSocket modules

These are direct runtime modules attached to the singleton client. The current `PluginClient` exposes modules including:

- `fs`
- `git`
- `terminal`
- `chat`
- `browser`
- `llm`
- `knowledge`
- `vectordb`
- `kvStore`
- `task`
- `thread`
- `todo`
- `job`
- `dynamicPanel`
- `environment`
- `mcp`
- `hook`
- `eventLog`
- `calendar`
- `mail`
- `codemap`
- `codebaseSearch`
- `debug`
- `cbstate`
- `memory`
- `project`
- `projectStructure`
- `gateway`
- `executionGateway`
- `llmProvider`

These are the main reason plugins are powerful: they can call into most of the server-owned subsystems.

### 2. HTTP APIs

`PluginClient` also exposes REST-style API wrappers such as:

- `chatApi`
- `tasksApi`
- `threadsApi`
- `projectsApi`
- `systemApi`
- `gitApi`
- `jobsApi`
- `knowledgeApi`
- `environmentsApi`
- `fileApi`
- `fileReadApi`
- `calendarApi`
- `mailApi`
- `kvStoreApi`
- `vectordbApi`
- `todosApi`
- `hooksApi`

Use these when you want stable CRUD-style app operations rather than lower-level socket messaging.

### 3. Multiplexed sockets

Under `plugin.sockets`, plugins can subscribe to real-time channels such as:

- `chat`
- `tasks`
- `jobs`
- `browser`
- `capability`
- `knowledge`
- `eventLog`
- `projectStructure`
- `backgroundAgent`
- `systemAlert`
- `editor`
- `lsp`

This is useful when your plugin needs ongoing event streams rather than request-response interactions.

## Relationship to the client SDK

[`@codebolt/client-sdk`](D:/Codeboltapps/CodeBolt/packages/clientsdk) is for building separate user interfaces that connect to Codebolt in server mode.

[`@codebolt/plugin-sdk`](D:/Codeboltapps/CodeBolt/packages/pluginSdk) is for building server extensions that run beside the application and extend its runtime.

That split matters:

- use the **client SDK** when you are building a standalone UI
- use the **plugin SDK** when you are extending the app itself

## Triggers and startup

Plugins are discovered from `package.json` manifests and can declare triggers. The real manifest type in server code currently supports trigger types:

- `startup`
- `event`
- `manual`

The built-in examples mostly use `startup`.

## See also

- [Plugins Overview](./01_overview.md)
- [Major functionalities available to plugins](./03_functionalities.md)
- [Packaging and publishing plugins](./05_packaging-and-publishing.md)
