---
sidebar_position: 4
title: Gateway, Execution, and LLM Providers
---

# Gateway, Execution, and LLM Providers

Three plugin patterns matter most in the current codebase because they extend core application behavior rather than just calling utility APIs.

## 1. Gateway plugins

Gateway plugins connect external messaging systems to Codebolt. They are how you build integrations such as Telegram, Slack, Discord, Teams, WhatsApp, or your own cloud chat bridge.

The gateway SDK lives in [`gateway.ts`](D:/Codeboltapps/CodeBolt/packages/pluginSdk/src/modules/gateway.ts) and exposes methods including:

- `routeMessage()`
- `onReply()`
- `registerChannel()`
- `unregisterChannel()`
- `onMessageToChannel()`

This allows a plugin to:

- receive messages from an external platform
- route those messages into Codebolt threads and agents
- receive agent replies back from the server
- send proactive messages from Codebolt out to the external channel

The clearest example is [`cloud-plugin`](D:/Codeboltapps/CodeBolt/packages/plugins/cloud-plugin), which forwards external user messages into Codebolt and mirrors app activity back to a cloud system.

## 2. Execution gateway plugins

Execution gateway plugins take ownership of execution requests or observe execution notifications.

The SDK in [`executionGateway.ts`](D:/Codeboltapps/CodeBolt/packages/pluginSdk/src/modules/executionGateway.ts) exposes:

- `claim()`
- `relinquish()`
- `onRequest()`
- `sendReply()`
- `subscribe()`
- `onNotification()`

This enables patterns such as:

- remote execution providers
- sandbox bridges
- delegated tool execution
- instrumentation of local execution traffic

The repo examples are:

- [`remote-execution-plugin`](D:/Codeboltapps/CodeBolt/packages/plugins/remote-execution-plugin)
- [`test-execution-plugin`](D:/Codeboltapps/CodeBolt/packages/plugins/test-execution-plugin)

A typical execution plugin flow is:

1. claim the execution gateway
2. listen for proxied execution requests
3. handle or forward those requests elsewhere
4. send a correctly shaped response back to the server

## 3. Custom LLM provider plugins

Plugins can register themselves as user-selectable LLM providers. The SDK in [`llmProvider.ts`](D:/Codeboltapps/CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts) exposes:

- `register()`
- `unregister()`
- `onCompletionRequest()`
- `onStreamRequest()`
- `onLoginRequest()`
- `sendChunk()`
- `sendReply()`
- `sendError()`

This lets a plugin:

- appear in the provider list in the app
- define its own model catalog
- request API keys or provider config fields from users
- handle normal and streaming completions
- implement OAuth or login flows where needed

Examples in the repo:

- [`custom-llm-plugin`](D:/Codeboltapps/CodeBolt/packages/plugins/custom-llm-plugin)
- [`codex-plugin`](D:/Codeboltapps/CodeBolt/packages/plugins/codex-plugin)

## Dynamic panels from plugins

While not in the same category as gateway or execution ownership, plugin-driven dynamic panels are another important application-extension pattern. Plugins can open and control panels inside the app using [`dynamicPanel.ts`](D:/Codeboltapps/CodeBolt/packages/pluginSdk/src/modules/dynamicPanel.ts).

That is the right path when your plugin needs both backend logic and an embedded app UI.

## Manifest examples

The current built-in plugin manifests show the main runtime categories:

### Channel plugin

```json
{
  "codebolt": {
    "plugin": {
      "type": "channel",
      "gateway": {
        "threadStrategy": "per-user",
        "supportsDirectMessages": true
      },
      "triggers": [{ "type": "startup" }]
    }
  }
}
```

### Execution plugin

```json
{
  "codebolt": {
    "plugin": {
      "type": "execution",
      "gateway": {
        "claimsExecutionGateway": true
      },
      "triggers": [{ "type": "startup" }]
    }
  }
}
```

### LLM provider plugin

```json
{
  "codebolt": {
    "plugin": {
      "type": "llmProvider",
      "triggers": [{ "type": "startup" }]
    }
  }
}
```

## When to choose each pattern

- Build a **gateway plugin** when you are connecting Codebolt to an external communication system.
- Build an **execution plugin** when execution should be intercepted, delegated, or proxied.
- Build an **LLM provider plugin** when you want a new provider to appear inside the app.
- Build a **dynamic-panel plugin** when you need custom UI inside the existing application.

## See also

- [Major plugin functionalities](./03_hook-examples.md)
- [Packaging and publishing plugins](./05_capability-download-flow.md)
- [Dynamic Panels](../04_custom-uis/05_dynamic-panels.md)
