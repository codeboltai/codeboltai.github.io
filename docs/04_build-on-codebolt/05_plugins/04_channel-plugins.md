---
sidebar_position: 4
title: Channel Plugins
---

# Channel Plugins

Channel plugins connect external messaging systems to Codebolt.

Use this pattern when you want Codebolt to participate in:

- Telegram
- Slack
- Discord
- Teams
- WhatsApp
- any custom communication or workflow surface

This is the plugin pattern for **bringing prompts and replies across an external channel boundary**.

## Core SDK Pattern

```ts
// Register as a channel in the routing system
await plugin.gateway.registerChannel({
  name: 'My Channel',
  platform: 'telegram',
  agentId: 'default-agent',
  threadStrategy: 'per-user',
  autoConnect: true,
  environmentId: 'production'
});

// Route an incoming external message to an agent
await plugin.gateway.routeMessage({
  source: 'channel',
  sourceId: 'telegram-bot',
  threadStrategy: 'per-user',
  text: 'Hello from user',
  userId: 'user-123',
  externalThreadId: 'chat-456',
  replyTo: {
    channelId: 'telegram-bot',
    externalThreadId: 'chat-456',
    userId: 'user-123',
    pluginId: 'telegram-channel'
  },
  metadata: { platform: 'telegram' }
});

// Receive agent replies
plugin.gateway.onReply((reply) => {
  sendToTelegram(reply.channelId, reply.content);
});

// Handle proactive messages from app to external platform
plugin.gateway.onMessageToChannel((message) => {
  sendToTelegram(message.channelId, message.content);
});

await plugin.gateway.unregisterChannel();
```

## Thread Strategies

| Strategy | Behavior |
|---|---|
| `single` | All messages go to one thread |
| `per-user` | Each user gets their own thread |
| `per-conversation` | Each external conversation maps to a thread |
| `per-message` | Every message creates a new thread |
| `existing` | Route to an existing thread by ID |

## Typical Flow

1. the plugin registers a channel
2. the external platform sends a message to the plugin
3. the plugin calls `routeMessage()`
4. Codebolt maps the message into a thread and agent context
5. the agent replies
6. `onReply()` sends that response back to the external system

## Example: Telegram-Style Plugin

```ts
import plugin from '@codebolt/plugin-sdk';
import { Bot } from 'grammy';

let bot: Bot;

plugin.onStart(async () => {
  plugin.gateway.onReply(async (reply) => {
    await bot.api.sendMessage(reply.replyTo.externalThreadId, reply.content, {
      parse_mode: 'HTML'
    });
  });
});

async function connectBot(config: any) {
  bot = new Bot(config.botToken);

  await plugin.gateway.registerChannel({
    name: 'Telegram',
    platform: 'telegram',
    agentId: 'default-agent',
    threadStrategy: config.threadStrategy || 'per-user',
    autoConnect: true,
  });

  bot.on('message:text', async (gramCtx) => {
    await plugin.gateway.routeMessage({
      source: 'channel',
      sourceId: 'telegram-channel',
      threadStrategy: config.threadStrategy || 'per-user',
      text: gramCtx.message.text,
      userId: String(gramCtx.from.id),
      externalThreadId: String(gramCtx.chat.id),
      replyTo: {
        channelId: 'telegram-channel',
        externalThreadId: String(gramCtx.chat.id),
        userId: String(gramCtx.from.id),
        pluginId: 'telegram-channel'
      }
    });
  });

  bot.start({ drop_pending_updates: true });
}

plugin.onStop(async () => {
  if (bot) await bot.stop();
  await plugin.gateway.unregisterChannel();
});
```

## Manifest

```json
{
  "codebolt": {
    "plugin": {
      "type": "channel",
      "triggers": [{ "type": "manual" }],
      "ui": { "path": "./ui/default/index.html" }
    }
  }
}
```

## When To Use This Pattern

Use channel plugins when you need:

- an external message source to start agent work
- agent replies routed back to another platform
- thread-mapping logic across system boundaries
- proactive messages sent from Codebolt to another channel

## See Also

- [Plugins Overview](./01_overview.md)
- [Plugin SDK and Lifecycle](./02_sdk-and-lifecycle.md)
- [Major Functionalities](./03_functionalities.md)
- [Dynamic Panel Plugins](./05_dynamic-panel-plugins.md)
- [Packaging and Publishing](./99_packaging-and-publishing.md)
