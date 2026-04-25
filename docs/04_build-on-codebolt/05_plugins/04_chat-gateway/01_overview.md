---
sidebar_position: 1
title: Chat Gateway Overview
description: The Chat Gateway is the server-side routing layer behind Codebolt's channel plugins
---

import ChatGatewayArchitecture from '@site/src/components/diagrams/ChatGatewayArchitecture';

# Chat Gateway

The Chat Gateway is the server-side routing layer behind Codebolt's `channel` plugins. It lets a plugin receive messages from an external surface, map them into stable Codebolt threads, run the right agent, and route replies back to the originating platform.

Use this when you want Codebolt to act through:

- Telegram, Slack, Discord, Teams, or WhatsApp
- a custom operator console or support inbox
- a branded AI character with stable cross-session memory
- any persistent message surface that should keep its own routing rules

<ChatGatewayArchitecture />

## What This Gateway Actually Does

A chat gateway plugin does not talk to agents directly. It connects to the server over the plugin WebSocket, and the server handles the heavy routing work:

1. the plugin registers a channel entry so it appears in routing rules
2. the plugin forwards external messages with `plugin.gateway.routeMessage(...)`
3. the server resolves a thread using the configured thread strategy
4. the server either spawns the target agent or queues work on an existing thread
5. the response router intercepts agent replies and returns them to the plugin
6. the plugin delivers the reply back to the external system

This gives you persistent conversations without reimplementing thread resolution, agent process management, or reply dispatch in every plugin.

## Gateway Versus Channel Plugin

These terms are related but not identical:

- **Chat Gateway**: the server routing system in `packages/server/src/gateway` and `packages/server/src/pluginLib/gatewayHandler.ts`
- **Channel plugin**: the plugin authoring pattern that uses `plugin.gateway` and declares `"type": "channel"` in `package.json`

The manifest type remains `channel`. The docs use **Chat Gateway** because the system is broader than just "bot connectors". The same routing model can support persistent AI characters and other long-lived conversational surfaces.

## What Makes It Persistent

Persistence comes from server-owned state, not from the plugin process alone:

- `.codebolt/channels.json` stores the registered channel configuration
- `.codebolt/gateway-thread-map.json` stores lookup-key to thread mappings
- the normal thread store keeps the actual conversation history and queued work

That means a plugin can disconnect and reconnect while the conversation identity still survives, as long as you keep the same routing inputs such as `sourceId`, `threadStrategy`, `userId`, or `externalThreadId`.

## Main Plugin SDK Surface

The plugin-side API is intentionally small:

```ts
await plugin.gateway.registerChannel({
  name: 'Telegram Support',
  platform: 'telegram',
  agentId: 'support-agent',
  threadStrategy: 'per-conversation',
});

await plugin.gateway.routeMessage({
  source: 'channel',
  sourceId: 'plugin-telegram-support',
  threadStrategy: 'per-conversation',
  agentId: 'support-agent',
  text: incoming.text,
  userId: incoming.userId,
  externalThreadId: incoming.chatId,
  replyTo: {
    channelId: 'telegram',
    externalThreadId: incoming.chatId,
    userId: incoming.userId,
  },
});

plugin.gateway.onReply(async (reply) => {
  await sendToPlatform(reply.externalThreadId, reply.text);
});

plugin.gateway.onMessageToChannel(async (message) => {
  await sendToPlatform(message.targetId, message.text);
});
```

## Good Fits

The chat gateway pattern is the right choice when you need:

- inbound messages from an external messaging system
- stable mapping from external identity to Codebolt thread identity
- agent replies returned over the same external channel
- proactive outbound messages from Codebolt to that channel
- long-lived personas or support agents that must stay coherent over time

## Page Guide

- [Routing and Persistence](./02_routing-and-persistence.md) explains the server flow, state files, and thread strategies
- [Custom Channel Plugins](./03_custom-channel-plugins.md) shows how to build a `channel` plugin correctly
- [Persistent Agent Characters](./04_persistent-agent-characters.md) explains how to use the gateway for branded or operator-facing personas

## See Also

- [Plugins Overview](../01_overview.md)
- [Plugin SDK and Lifecycle](../02_sdk-and-lifecycle.md)
- [Major Functionalities](../03_functionalities.md)
- [Dynamic Panel Plugins](../05_dynamic-panel-plugins.md)
- [Building Integrations: Gateway](../../10_building-integrations/02_chat-integrations/02_gateway.md)
