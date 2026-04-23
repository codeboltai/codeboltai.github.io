---
sidebar_position: 3
title: Chat Platforms
---

# Chat Platform Integrations

Codebolt can connect agents to external chat platforms — Telegram, Slack, Discord, Microsoft Teams, and WhatsApp — through **channel plugins**. Each plugin bridges the platform's own SDK to the Codebolt Routing Gateway, so messages from users on any platform reach your agent and replies go back automatically.

## How it works

A channel plugin is a separate process that:

1. Connects to the chat platform using the platform's SDK or API
2. Receives user messages and forwards them to Codebolt via `gateway.route`
3. Listens for `gateway.reply` messages from Codebolt and sends them back to the user

```
User sends message on Telegram
        │
        ▼
Telegram Bot SDK (grammy)
        │  gateway.route over WebSocket
        ▼
Codebolt Routing Gateway
        │
        ▼
Agent processes and replies
        │  gateway.reply over WebSocket
        ▼
Telegram Bot SDK sends reply to user
```

## Supported platforms

| Platform | SDK | Connection type |
|---|---|---|
| **Telegram** | `grammy` | Long polling or webhook |
| **Slack** | `@slack/bolt` | Socket Mode |
| **Discord** | `discord.js` | WebSocket (gateway) |
| **Microsoft Teams** | `botbuilder` | Webhook or WebSocket |
| **WhatsApp** | `@whiskeysockets/baileys` | WebSocket |

## Configuring a channel

Each channel plugin stores its configuration in `.codebolt/channels.json`:

```json
{
  "id": "my-telegram-bot",
  "name": "Support Bot",
  "platform": "telegram",
  "agentId": "agent-uuid",
  "threadStrategy": "per-user",
  "autoConnect": true,
  "credentials": {
    "botToken": "123456:ABC-..."
  }
}
```

### Platform credentials

**Telegram**
```json
{ "botToken": "your-bot-token", "webhookUrl": "optional", "webhookSecret": "optional" }
```
Create a bot via [@BotFather](https://t.me/botfather) on Telegram to obtain a token.

**Slack**
```json
{ "appToken": "xapp-...", "botToken": "xoxb-..." }
```
Create a Slack App with Socket Mode enabled. The `appToken` is a connections-level token; the `botToken` is the bot OAuth token.

**Discord**
```json
{ "botToken": "your-bot-token" }
```
Create an application in the [Discord Developer Portal](https://discord.com/developers) and enable the Message Content Intent.

**Microsoft Teams**
```json
{ "appId": "your-app-id", "appPassword": "your-app-password", "tenantId": "optional" }
```
Register a bot in [Azure Bot Service](https://portal.azure.com) and link it to your Teams app.

**WhatsApp**
```json
{ "authDir": "./.codebolt/whatsapp-auth" }
```
On first connection, a QR code is displayed — scan it with the WhatsApp mobile app to link the session. Auth state is persisted so the connection survives restarts.

## Thread strategies for chat platforms

| Platform scenario | Recommended strategy |
|---|---|
| Personal assistant bot (one user) | `single` |
| Multi-user support bot | `per-user` |
| One agent per Slack channel / Telegram chat | `per-conversation` |
| Stateless Q&A bot | `per-message` |

## Managing channel plugins

Installed channel plugins appear in **System Settings → Plugins**. Each plugin shows its connection status (`connected`, `disconnected`, `error`). Start and stop plugins from the Plugins panel.

The **Routing Gateway → Routing Rules tab** shows all active channels alongside webhooks, so you can see every integration at a glance.

## Proactive messages

To have an agent send a message to a platform user *without* a user initiating it, use:

```
POST /gateway/channels/{channelId}/send
{ "targetId": "telegram-user-id", "text": "Your task is complete." }
```

Useful for sending scheduled reports, alerts, or completing a long-running task that started from a webhook.
