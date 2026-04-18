---
title: routeMessage
---

# `routeMessage`

```typescript
plugin.gateway.routeMessage(message: PluginGatewayMessage): Promise<GatewayRouteResponse>
```

Route an incoming platform message to the RoutingGateway.
The server resolves the thread, finds/spawns the agent, and delivers the message.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `message` | `PluginGatewayMessage` | Yes | The gateway message describing the incoming platform message |

## Returns

`Promise<GatewayRouteResponse>` — Promise resolving to the routing result (action, threadId, agentId)

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gateway.routeMessage(/* PluginGatewayMessage */);
console.log(result);
```
