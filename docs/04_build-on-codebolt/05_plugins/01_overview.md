---
sidebar_position: 1
title: Plugins Overview
---

# Plugins Overview

Plugins extend the **Codebolt application itself**. They run as child processes alongside [`packages/server`](D:/Codeboltapps/CodeBolt/packages/server), connect back over the plugin WebSocket, and use [`@codebolt/plugin-sdk`](D:/Codeboltapps/CodeBolt/packages/pluginSdk) to access server functionality.

This is different from agent extensions:

- **Agent extensions** such as capabilities, skills, MCP tools, and action blocks extend what an agent can do inside the agent loop.
- **Plugins** extend the application runtime around the agent system. They can register providers, bridge external systems, open UI panels, react to app events, and call server APIs.

## What a plugin really is

At runtime, the server discovers plugin packages, starts them as separate processes, and sends a `pluginStartMessage` with context such as `pluginId`, `pluginDir`, and the parsed manifest. Inside the plugin, you typically write code like this:

```ts
import plugin from '@codebolt/plugin-sdk';

plugin.onStart(async (ctx) => {
  console.log(`Plugin started: ${ctx.pluginId}`);
});

plugin.onStop(async () => {
  console.log('Plugin stopping');
});
```

The SDK exposes three main integration surfaces:

- **Plugin lifecycle** via `plugin.onStart()` and `plugin.onStop()`.
- **WebSocket modules** that talk to the server using the same low-level protocol used by the app runtime.
- **HTTP APIs and multiplexed sockets** for higher-level app operations and event subscriptions.

## Where plugins fit

Use a plugin when you need to:

- connect Codebolt to an external system such as Telegram, Slack, Discord, or a cloud gateway
- register a custom LLM provider
- proxy or replace execution through the execution gateway
- open custom UI panels inside the existing app
- manage hooks, events, memory, files, jobs, chat, or other server-owned resources
- package application-level integrations that should start with the server

Do not use a plugin when you only need to add agent-side behavior such as a skill, capability, MCP tool, or action block. Those belong in [Agent Extensions](../03_agent-extensions/01_overview.md).

## How plugins are loaded

The server-side plugin service scans plugin directories, reads `package.json`, and looks for a `codebolt.plugin` block. Valid plugins are started as child processes and connect back to the server.

The runtime model in [`pluginService.ts`](D:/Codeboltapps/CodeBolt/packages/server/src/services/pluginService.ts) is:

1. discover plugins from bundled, global, and project plugin directories
2. read `package.json` and validate the `codebolt.plugin` manifest
3. auto-start plugins based on configured triggers such as `startup`
4. launch the plugin as a child process
5. let the plugin connect back over the `/plugin` WebSocket and use the SDK

## Real plugin types in the current codebase

The built-in examples show the main shapes supported today:

- **Channel / gateway plugin**: [`cloud-plugin`](D:/Codeboltapps/CodeBolt/packages/plugins/cloud-plugin)
- **Execution plugin**: [`remote-execution-plugin`](D:/Codeboltapps/CodeBolt/packages/plugins/remote-execution-plugin) and [`test-execution-plugin`](D:/Codeboltapps/CodeBolt/packages/plugins/test-execution-plugin)
- **LLM provider plugin**: [`custom-llm-plugin`](D:/Codeboltapps/CodeBolt/packages/plugins/custom-llm-plugin) and [`codex-plugin`](D:/Codeboltapps/CodeBolt/packages/plugins/codex-plugin)

Those examples are more representative of the real plugin system than the older hook-centric docs that previously sat in this section.

## Plugin manifest shape

A plugin is a normal package with a `package.json` that includes `codebolt.plugin` metadata:

```json
{
  "name": "@codebolt/custom-llm-plugin",
  "version": "1.0.0",
  "main": "dist/index.js",
  "codebolt": {
    "plugin": {
      "type": "llmProvider",
      "triggers": [
        { "type": "startup" }
      ]
    }
  }
}
```

Current examples in the repo use plugin types such as:

- `channel`
- `execution`
- `llmProvider`

and optional gateway metadata such as:

- `threadStrategy`
- `supportsDirectMessages`
- `claimsExecutionGateway`

## Main pages in this section

- [Plugin SDK and lifecycle](./02_sdk-and-lifecycle.md)
- [Major functionalities available to plugins](./03_functionalities.md)
- [Gateway, execution, and LLM provider patterns](./04_major-patterns.md)
- [Packaging and publishing plugins](./05_packaging-and-publishing.md)
- [Custom LLM Provider](./06_llm-provider.md)
- [Custom Embedding Provider](./07_embedding-provider.md)
- [Custom Remote Execution Provider](./08_remote-execution-provider.md)

## See also

- [Custom UIs](../04_custom-uis/01_overview.md)
- [Dynamic Panels](../04_custom-uis/05_dynamic-panels.md)
- [Agent Extensions](../03_agent-extensions/01_overview.md)
