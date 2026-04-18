---
name: routeMessage
cbbaseinfo:
  description: "Route an incoming platform message to the RoutingGateway.
The server resolves the thread, finds/spawns the agent, and delivers the message."
cbparameters:
  parameters:
    - name: message
      typeName: PluginGatewayMessage
      description: The gateway message describing the incoming platform message
      isOptional: false
  returns:
    signatureTypeName: "Promise<GatewayRouteResponse>"
    description: Promise resolving to the routing result (action, threadId, agentId)
data:
  name: routeMessage
  category: gateway
  link: routeMessage.md
---
# routeMessage

```typescript
plugin.gateway.routeMessage(message: PluginGatewayMessage): Promise<GatewayRouteResponse>
```

Route an incoming platform message to the RoutingGateway.
The server resolves the thread, finds/spawns the agent, and delivers the message.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `message` | `PluginGatewayMessage` | The gateway message describing the incoming platform message |

## Returns

**`Promise<GatewayRouteResponse>`** — Promise resolving to the routing result (action, threadId, agentId)

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gateway.routeMessage(/* PluginGatewayMessage */);
```
