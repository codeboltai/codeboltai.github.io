---
title: gateway
---

[**@codebolt/plugin-sdk**](../index)

***

# Variable: gateway

```ts
const gateway: {
  offMessageToChannel: (callback: (message: ChannelMessage) => void) => void;
  offReply: (callback: (reply: GatewayReply) => void) => void;
  onMessageToChannel: (callback: (message: ChannelMessage) => void) => void;
  onReply: (callback: (reply: GatewayReply) => void) => void;
  registerChannel: (request: RegisterChannelRequest) => Promise<RegisterChannelResponse>;
  routeMessage: (message: PluginGatewayMessage) => Promise<GatewayRouteResponse>;
  unregisterChannel: () => Promise<void>;
};
```

Defined in: CodeBolt/packages/pluginSdk/src/modules/gateway.ts:158

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="offmessagetochannel"></a> `offMessageToChannel()` | (`callback`: (`message`: `ChannelMessage`) => `void`) => `void` | Remove a previously registered messageToChannel callback. | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:245](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L245) |
| <a id="offreply"></a> `offReply()` | (`callback`: (`reply`: [`GatewayReply`](../interfaces/GatewayReply)) => `void`) => `void` | Remove a previously registered reply callback. | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:192](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L192) |
| <a id="onmessagetochannel"></a> `onMessageToChannel()` | (`callback`: (`message`: `ChannelMessage`) => `void`) => `void` | Register a callback for proactive messages from the application. When the server wants to send a notification/message to a platform user, it pushes a gateway.messageToChannel event which triggers this callback. | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:237](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L237) |
| <a id="onreply"></a> `onReply()` | (`callback`: (`reply`: [`GatewayReply`](../interfaces/GatewayReply)) => `void`) => `void` | Register a callback for agent replies. When an agent sends a response on a gateway-managed thread, the server pushes a gateway.reply message which triggers this callback. | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:184](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L184) |
| <a id="registerchannel"></a> `registerChannel()` | (`request`: `RegisterChannelRequest`) => `Promise`\<`RegisterChannelResponse`\> | Register this plugin as a channel in the ChannelStore so it appears in the Routing Rules view. Should be called once during plugin startup. | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:204](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L204) |
| <a id="routemessage"></a> `routeMessage()` | (`message`: [`PluginGatewayMessage`](../interfaces/PluginGatewayMessage)) => `Promise`\<[`GatewayRouteResponse`](../interfaces/GatewayRouteResponse)\> | Route an incoming platform message to the RoutingGateway. The server resolves the thread, finds/spawns the agent, and delivers the message. | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:166](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L166) |
| <a id="unregisterchannel"></a> `unregisterChannel()` | () => `Promise`\<`void`\> | Unregister this plugin's channel from the ChannelStore. Should be called during plugin shutdown. | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:219](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L219) |
