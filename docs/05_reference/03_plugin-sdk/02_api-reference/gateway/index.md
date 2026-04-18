---
title: Gateway API
---

# Gateway API

The `gateway` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`offMessageToChannel`](./offMessageToChannel) | Remove a previously registered messageToChannel callback. |
| [`offReply`](./offReply) | Remove a previously registered reply callback. |
| [`onMessageToChannel`](./onMessageToChannel) | Register a callback for proactive messages from the application. |
| [`onReply`](./onReply) | Register a callback for agent replies. |
| [`registerChannel`](./registerChannel) | Register this plugin as a channel in the ChannelStore so it appears |
| [`routeMessage`](./routeMessage) | Route an incoming platform message to the RoutingGateway. |
| [`unregisterChannel`](./unregisterChannel) | Unregister this plugin's channel from the ChannelStore. |

## Methods

---

### `offMessageToChannel`

```typescript
plugin.gateway.offMessageToChannel(callback: Function): void
```

Remove a previously registered messageToChannel callback.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes |  |

**Returns:** `void`

[Full reference →](./offMessageToChannel)

---

### `offReply`

```typescript
plugin.gateway.offReply(callback: Function): void
```

Remove a previously registered reply callback.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes |  |

**Returns:** `void`

[Full reference →](./offReply)

---

### `onMessageToChannel`

```typescript
plugin.gateway.onMessageToChannel(callback: Function): void
```

Register a callback for proactive messages from the application.
When the server wants to send a notification/message to a platform user,
it pushes a gateway.messageToChannel event which triggers this callback.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes | Called with targetId, text, and optional metadata |

**Returns:** `void`

[Full reference →](./onMessageToChannel)

---

### `onReply`

```typescript
plugin.gateway.onReply(callback: Function): void
```

Register a callback for agent replies.
When an agent sends a response on a gateway-managed thread,
the server pushes a gateway.reply message which triggers this callback.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes | Called with the reply text and externalThreadId |

**Returns:** `void`

[Full reference →](./onReply)

---

### `registerChannel`

```typescript
plugin.gateway.registerChannel(request: RegisterChannelRequest): Promise<RegisterChannelResponse>
```

Register this plugin as a channel in the ChannelStore so it appears
in the Routing Rules view. Should be called once during plugin startup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `request` | `RegisterChannelRequest` | Yes | Channel registration details |

**Returns:** `Promise<RegisterChannelResponse>` — Promise resolving to the assigned channelId

[Full reference →](./registerChannel)

---

### `routeMessage`

```typescript
plugin.gateway.routeMessage(message: PluginGatewayMessage): Promise<GatewayRouteResponse>
```

Route an incoming platform message to the RoutingGateway.
The server resolves the thread, finds/spawns the agent, and delivers the message.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `message` | `PluginGatewayMessage` | Yes | The gateway message describing the incoming platform message |

**Returns:** `Promise<GatewayRouteResponse>` — Promise resolving to the routing result (action, threadId, agentId)

[Full reference →](./routeMessage)

---

### `unregisterChannel`

```typescript
plugin.gateway.unregisterChannel(): Promise<void>
```

Unregister this plugin's channel from the ChannelStore.
Should be called during plugin shutdown.

_No parameters._

**Returns:** `Promise<void>`

[Full reference →](./unregisterChannel)

