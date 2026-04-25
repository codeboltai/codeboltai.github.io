---
sidebar_position: 4
title: Persistent Agent Characters
description: The chat gateway is not only for platform connectors
---

# Persistent Agent Characters

The chat gateway is not only for platform connectors. It is also a clean way to build persistent AI characters that keep their own conversational identity over time.

## The Core Idea

A persistent character is just a stable routing contract:

- fixed or intentionally selected `agentId`
- stable `sourceId`
- deliberate `threadStrategy`
- consistent external identity fields such as `userId` or `externalThreadId`

If those stay stable, the server keeps reconnecting new inbound messages to the same Codebolt thread identity. That is what gives the character continuity.

## Character Patterns

| Pattern | How to model it |
|---|---|
| one character for everyone | fixed `sourceId` with `threadStrategy: 'single'` |
| one private character per user | fixed `sourceId` with `threadStrategy: 'per-user'` |
| one character per room or group | fixed `sourceId` with `threadStrategy: 'per-conversation'` |
| one curated persona bound to a specific thread | `threadStrategy: 'existing'` with explicit `threadId` |

These are routing choices, not separate products. The same gateway supports all of them.

## Examples

### Shared public character

Use when one persona should answer on behalf of a single public channel or community bot.

```ts
await plugin.gateway.routeMessage({
  source: 'channel',
  sourceId: 'character-release-notes-bot',
  threadStrategy: 'single',
  agentId: 'release-notes-agent',
  text: incoming.text,
  replyTo: {
    channelId: 'release-notes',
    externalThreadId: incoming.threadId,
  },
});
```

Every inbound message maps into the same underlying Codebolt thread.

### Personal character per operator or customer

Use when each person should have their own persistent relationship with the same character.

```ts
await plugin.gateway.routeMessage({
  source: 'channel',
  sourceId: 'character-support-bot',
  threadStrategy: 'per-user',
  agentId: 'support-agent',
  text: incoming.text,
  userId: incoming.userId,
  externalThreadId: incoming.threadId,
  replyTo: {
    channelId: 'support-bot',
    externalThreadId: incoming.threadId,
    userId: incoming.userId,
  },
});
```

Now each user gets a stable thread while still talking to the same logical character.

## Where The Character's Continuity Lives

The character does not stay coherent because the plugin stays alive forever. It stays coherent because the server persists the routing contract:

- the lookup key created from `sourceId` and thread strategy
- the lookup-key to thread mapping in `.codebolt/gateway-thread-map.json`
- the actual thread and step history in the normal thread system

That is why this model survives plugin reconnects better than trying to hold all state inside the bot runtime.

## Proactive Character Messages

Characters do not have to be purely reactive. The application can also send fresh outbound messages through the plugin with `gateway.messageToChannel`, which the plugin receives through `plugin.gateway.onMessageToChannel(...)`.

This is useful for:

- reminders and follow-ups
- long-running task completion notices
- agent-initiated outreach to a known channel or user
- persona-driven notifications inside a branded integration

## Character Design Guidance

Use these rules if you want the character to feel consistent:

- keep the same `agentId` unless you intentionally want to swap personas
- keep `sourceId` semantically tied to the character, not to a transient session
- choose the thread strategy based on the memory boundary you want
- keep external identity fields normalized so the same user or room does not appear under multiple IDs
- use `existing` only when you need a handpicked thread as the character's long-term home

## This Does Not Require Another Codebolt Instance

The chat gateway is about message routing. A persistent character can live on top of:

- a Telegram or Slack plugin
- a custom web chat shell
- a support platform connector
- another message source that speaks the plugin gateway interface

It does not require another full Codebolt deployment. The important part is that the external surface forwards messages into the gateway with a stable routing identity.

## See Also

- [Chat Gateway Overview](./01_overview.md)
- [Routing and Persistence](./02_routing-and-persistence.md)
- [Custom Channel Plugins](./03_custom-channel-plugins.md)
