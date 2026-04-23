---
sidebar_position: 5
title: Building a Channel Plugin
---

# Building a Channel Plugin

If your platform isn't covered by an existing plugin, you can build your own channel plugin. A channel plugin is a Node.js process that connects to your platform, bridges messages to the Codebolt Routing Gateway via WebSocket, and forwards agent replies back to the platform.

## How a plugin connects

Every plugin connects to Codebolt over WebSocket at `/plugin?pluginId=<your-plugin-id>`. Once connected, it registers itself as a channel and begins routing messages.

## Step 1 — Register as a channel

On connect, send a `gateway.registerChannel` message:

```json
{
  "type": "gateway.registerChannel",
  "requestId": "req-001",
  "data": {
    "name": "My Custom Bot",
    "platform": "custom",
    "agentId": "agent-uuid",
    "threadStrategy": "per-user",
    "autoConnect": true
  }
}
```

Codebolt responds with the assigned `channelId`:

```json
{
  "type": "gatewayRegisterChannelResponse",
  "requestId": "req-001",
  "data": { "channelId": "channel-uuid" }
}
```

## Step 2 — Forward incoming messages

When a user sends a message on your platform, forward it to the gateway:

```json
{
  "type": "gateway.route",
  "requestId": "req-002",
  "data": {
    "source": "channel",
    "sourceId": "channel-uuid",
    "agentId": "agent-uuid",
    "threadStrategy": "per-user",
    "userId": "platform-user-id",
    "externalThreadId": "platform-chat-id",
    "text": "The user's message text",
    "metadata": { "platform": "my-platform", "senderName": "Alice" },
    "replyTo": {
      "channelId": "channel-uuid",
      "externalThreadId": "platform-chat-id",
      "userId": "platform-user-id"
    }
  }
}
```

The gateway responds confirming the action taken:

```json
{
  "type": "gatewayRouteResponse",
  "requestId": "req-002",
  "data": { "action": "spawned-new", "threadId": "thread-uuid", "agentId": "agent-uuid" }
}
```

## Step 3 — Receive agent replies

When the agent replies, Codebolt sends a `gateway.reply` message to your plugin:

```json
{
  "type": "gateway.reply",
  "data": {
    "text": "The agent's response text",
    "externalThreadId": "platform-chat-id"
  }
}
```

Use `externalThreadId` to route the reply to the correct chat or channel on your platform.

## Step 4 — Send proactive messages

To have Codebolt push a message to a user without a prior incoming message, the gateway sends:

```json
{
  "type": "gateway.messageToChannel",
  "data": {
    "targetId": "platform-user-id",
    "text": "Notification text",
    "metadata": {}
  }
}
```

Handle this in your plugin and deliver it to the appropriate user.

## Step 5 — Unregister on disconnect

When your plugin is stopping, send:

```json
{
  "type": "gateway.unregisterChannel",
  "requestId": "req-999"
}
```

## Minimal plugin skeleton

```js
import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:12345/plugin?pluginId=my-plugin');
let channelId;

ws.on('open', () => {
  ws.send(JSON.stringify({
    type: 'gateway.registerChannel',
    requestId: 'reg-1',
    data: {
      name: 'My Bot', platform: 'custom',
      agentId: 'your-agent-id', threadStrategy: 'per-user', autoConnect: true,
    },
  }));
});

ws.on('message', (raw) => {
  const msg = JSON.parse(raw);

  if (msg.type === 'gatewayRegisterChannelResponse') {
    channelId = msg.data.channelId;
    console.log('Registered as channel:', channelId);
  }

  if (msg.type === 'gateway.reply') {
    const { text, externalThreadId } = msg.data;
    // Send `text` back to the user in `externalThreadId` on your platform
    sendToPlatform(externalThreadId, text);
  }
});

// Call this when your platform receives a message
function onPlatformMessage({ userId, chatId, text }) {
  ws.send(JSON.stringify({
    type: 'gateway.route',
    requestId: `msg-${Date.now()}`,
    data: {
      source: 'channel', sourceId: channelId,
      agentId: 'your-agent-id', threadStrategy: 'per-user',
      userId, externalThreadId: chatId, text,
      replyTo: { channelId, externalThreadId: chatId, userId },
    },
  }));
}
```

## Plugin manifest

Include a `manifest.json` in your plugin directory:

```json
{
  "pluginId": "my-custom-bot",
  "name": "My Custom Bot",
  "version": "1.0.0",
  "platform": "custom",
  "entryPoint": "dist/plugin.js"
}
```

Install the plugin via **System Settings → Plugins → Install from folder**.
