---
sidebar_position: 2
title: Chat Integrations
---

# Chat Integrations

Connect Codebolt to Telegram, Discord, Slack, or any other chat platform. Users send messages on their platform; Codebolt runs the agent; replies come back to the same chat.

## Architecture

```
User → Telegram/Discord/Slack
         ↓ webhook / bot API
    [Your integration bot]   ← clientsdk custom client
         ↓ WebSocket
    Codebolt server → agent run → response
         ↓
    [Your integration bot] → reply → platform
```

The integration is a **custom client** built on `clientsdk`. It translates the platform's events into Codebolt task starts, and routes agent output back as platform messages.

## Minimal Telegram example

```ts
import { CodeboltClient } from '@codebolt/clientsdk';
import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.TELEGRAM_TOKEN!);
const codebolt = new CodeboltClient({ serverUrl: process.env.CODEBOLT_URL! });

bot.on('text', async (ctx) => {
  const run = await codebolt.agents.start('default', {
    task: ctx.message.text,
    sessionId: `tg-${ctx.chat.id}`,
  });

  for await (const event of run.events()) {
    if (event.type === 'agent_message') {
      await ctx.reply(event.content);
    }
  }
});

bot.launch();
```

## Handling threads and sessions

Map platform threads/DMs to Codebolt session IDs so agents retain memory across messages:

```ts
const sessionId = `tg-${ctx.chat.id}`;  // one session per chat
// For threads: `tg-${ctx.chat.id}-${ctx.message.thread_id}`
```

## Slash commands on the platform

Register platform slash commands that map to Codebolt agent starts or custom commands:

```ts
bot.command('deploy', async (ctx) => {
  const [, env] = ctx.message.text.split(' ');
  await codebolt.agents.start('deploy-agent', { task: `deploy to ${env}` });
  await ctx.reply(`Deploying to ${env}…`);
});
```

## See also

- [Custom UIs — clientsdk](../04_custom-uis/01_overview.md)
- [IDE Integration](./05_ide-integration.md) — same clientsdk pattern, different surface
