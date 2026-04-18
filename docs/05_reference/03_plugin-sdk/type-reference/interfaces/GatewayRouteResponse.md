---
title: GatewayRouteResponse
---

[**@codebolt/plugin-sdk**](../index)

***

# Interface: GatewayRouteResponse

Defined in: CodeBolt/packages/pluginSdk/src/modules/gateway.ts:51

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `action`: `"failed"` \| `"routed-to-running"` \| `"spawned-new"` \| `"queued"`; `agentId?`: `string`; `instanceId?`: `string`; `threadId`: `string`; \} | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:54](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L54) |
| `data.action` | `"failed"` \| `"routed-to-running"` \| `"spawned-new"` \| `"queued"` | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:55](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L55) |
| `data.agentId?` | `string` | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:57](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L57) |
| `data.instanceId?` | `string` | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:58](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L58) |
| `data.threadId` | `string` | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:56](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L56) |
| <a id="error"></a> `error?` | `string` | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:60](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L60) |
| <a id="requestid"></a> `requestId?` | `string` | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:61](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L61) |
| <a id="success"></a> `success` | `boolean` | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:53](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L53) |
| <a id="type"></a> `type` | `string` | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:52](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L52) |
