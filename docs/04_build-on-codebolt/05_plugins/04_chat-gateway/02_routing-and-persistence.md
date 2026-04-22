---
sidebar_position: 2
title: Routing and Persistence
---

# Routing and Persistence

The core value of the chat gateway is that the plugin only forwards messages. The server owns thread identity, agent lifecycle, reply dispatch, and persistence.

## Server Flow

When a channel plugin calls `plugin.gateway.routeMessage(...)`, the server runs this path:

1. `gatewayHandler.handleRoute()` normalizes the incoming payload into a `GatewayMessage`
2. the handler injects `replyTo.pluginId` from the connected plugin session
3. `RoutingGateway.route()` resolves the target thread and agent
4. if an agent is already active or stopping on that thread, the message is queued as a pending step
5. otherwise the server creates an active step, starts the agent, and forwards the message into the normal agent pipeline
6. `ResponseRouter` watches gateway-managed threads and turns agent output back into `gateway.reply`

This is why chat gateway plugins stay small. The plugin handles platform IO. The server handles conversation orchestration.

## The Two Persistent Files

The gateway relies on two project-level files under `.codebolt`:

| File | What it stores |
|---|---|
| `channels.json` | registered channel metadata such as `name`, `platform`, `agentId`, `threadStrategy`, status, and optional `environmentId` |
| `gateway-thread-map.json` | lookup-key to real Codebolt thread ID mappings used to keep external conversations stable |

The actual chat history is not stored in these files. It remains in the normal thread store. The gateway only keeps the extra routing state that lets it reconnect external conversations to those threads.

## Thread Strategy Is The Routing Contract

The `threadStrategy` field controls how the gateway generates a stable lookup key before it resolves a real thread ID.

| Strategy | Key shape | Best use |
|---|---|---|
| `single` | `sourceId` | one shared persona or one shared operator inbox |
| `per-user` | `sourceId + userId` | one persistent assistant per external user |
| `per-conversation` | `sourceId + externalThreadId` | one thread per room, ticket, or chat |
| `per-message` | random per message | stateless routing where each message starts fresh |
| `existing` | explicit `threadId` | bind the gateway to a specific curated thread |

Important consequence:

- changing `sourceId` changes the lookup key
- changing the thread strategy changes the lookup key
- changing the external identity fields used by that strategy changes the lookup key

If you want persistence, those inputs must stay stable.

## Message Shape

The server-side normalized message is:

```ts
interface GatewayMessage {
  source: 'channel' | 'hook' | 'webhook' | 'calendar';
  sourceId: string;
  threadStrategy: 'single' | 'per-user' | 'per-conversation' | 'per-message' | 'existing';
  threadId?: string;
  agentId?: string;
  environmentId?: string;
  text: string;
  userId?: string;
  externalThreadId?: string;
  metadata?: Record<string, any>;
  replyTo?: {
    channelId: string;
    externalThreadId?: string;
    userId?: string;
    pluginId?: string;
  };
  timestamp?: string;
}
```

The most important fields for persistence are `sourceId`, `threadStrategy`, and the strategy-specific identity fields.

## Reply Path Versus Proactive Path

There are two separate outbound flows:

| Flow | Trigger | Delivered to plugin as |
|---|---|---|
| reply path | an agent responds on a gateway-managed thread | `gateway.reply` |
| proactive path | the application wants to push a fresh outbound message | `gateway.messageToChannel` |

Use `plugin.gateway.onReply(...)` for conversational replies. Use `plugin.gateway.onMessageToChannel(...)` when the platform should receive a new message that did not originate from the current inbound turn.

## Busy Threads And Queued Work

The gateway does not blindly spawn a new agent process on every inbound message.

- if the target thread already has a running or starting agent, the gateway can route work to that existing process
- if the thread is stopping or otherwise busy, the message is written as a pending step and picked up after the current work finishes

This matters for persistent characters because it prevents overlapping work from corrupting the thread flow.

## Response Listener Lifetime

`ResponseRouter` keeps listeners with a default TTL of 30 minutes and automatically tracks gateway-managed threads. When the agent stops, cleanup is delayed briefly so follow-up steps on the same thread can continue without losing the route back to the external platform.

That gives the system a middle ground:

- replies are routed predictably while the conversation is active
- old listeners do not accumulate forever

## Design Guidelines

Use these rules when you want stable behavior:

- keep `sourceId` constant for a logical channel or character
- choose `per-user` for direct assistants and `per-conversation` for group or room semantics
- use `existing` only when you intentionally want to pin an integration to a known thread
- store external credentials and operator settings in `plugin.kvStore`, not in the routing files
- let the server own reply routing instead of trying to persist your own message-to-thread map in the plugin

## See Also

- [Chat Gateway Overview](./01_overview.md)
- [Custom Channel Plugins](./03_custom-channel-plugins.md)
- [Persistent Agent Characters](./04_persistent-agent-characters.md)
