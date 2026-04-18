---
cbapicategory:
  - name: offMessageToChannel
    link: /docs/reference/plugin-sdk/api-reference/gateway/offMessageToChannel
    description: Remove a previously registered messageToChannel callback.
  - name: offReply
    link: /docs/reference/plugin-sdk/api-reference/gateway/offReply
    description: Remove a previously registered reply callback.
  - name: onMessageToChannel
    link: /docs/reference/plugin-sdk/api-reference/gateway/onMessageToChannel
    description: "Register a callback for proactive messages from the application.
When the server wants to send a notification/message to a platform user,
it pushes a gateway.messageToChannel event which triggers this callback."
  - name: onReply
    link: /docs/reference/plugin-sdk/api-reference/gateway/onReply
    description: "Register a callback for agent replies.
When an agent sends a response on a gateway-managed thread,
the server pushes a gateway.reply message which triggers this callback."
  - name: registerChannel
    link: /docs/reference/plugin-sdk/api-reference/gateway/registerChannel
    description: "Register this plugin as a channel in the ChannelStore so it appears
in the Routing Rules view. Should be called once during plugin startup."
  - name: routeMessage
    link: /docs/reference/plugin-sdk/api-reference/gateway/routeMessage
    description: "Route an incoming platform message to the RoutingGateway.
The server resolves the thread, finds/spawns the agent, and delivers the message."
  - name: unregisterChannel
    link: /docs/reference/plugin-sdk/api-reference/gateway/unregisterChannel
    description: "Unregister this plugin's channel from the ChannelStore.
Should be called during plugin shutdown."
---
# Gateway API

The `gateway` module of the Plugin SDK.

<CBAPICategory />

## Methods

- [`offMessageToChannel()`](./offMessageToChannel) — Remove a previously registered messageToChannel callback.
- [`offReply()`](./offReply) — Remove a previously registered reply callback.
- [`onMessageToChannel()`](./onMessageToChannel) — Register a callback for proactive messages from the application.
When the server wants to send a notification/message to a platform user,
it pushes a gateway.messageToChannel event which triggers this callback.
- [`onReply()`](./onReply) — Register a callback for agent replies.
When an agent sends a response on a gateway-managed thread,
the server pushes a gateway.reply message which triggers this callback.
- [`registerChannel()`](./registerChannel) — Register this plugin as a channel in the ChannelStore so it appears
in the Routing Rules view. Should be called once during plugin startup.
- [`routeMessage()`](./routeMessage) — Route an incoming platform message to the RoutingGateway.
The server resolves the thread, finds/spawns the agent, and delivers the message.
- [`unregisterChannel()`](./unregisterChannel) — Unregister this plugin's channel from the ChannelStore.
Should be called during plugin shutdown.
