---
title: PluginGatewayMessage
---

[**@codebolt/plugin-sdk**](../index)

***

# Interface: PluginGatewayMessage

Defined in: CodeBolt/packages/pluginSdk/src/modules/gateway.ts:19

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="agentid"></a> `agentId?` | `string` | Which agent should handle this message | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:29](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L29) |
| <a id="environmentid"></a> `environmentId?` | `string` | Optional environment to run agent in | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:31](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L31) |
| <a id="externalthreadid"></a> `externalThreadId?` | `string` | External conversation/thread ID (for per-conversation strategy) | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:37](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L37) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | Arbitrary metadata (platform name, sender info, attachments, etc.) | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:46](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L46) |
| <a id="replyto"></a> `replyTo?` | \{ `channelId`: `string`; `externalThreadId?`: `string`; `pluginId?`: `string`; `userId?`: `string`; \} | Reply routing info — pluginId is auto-set by the server | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:39](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L39) |
| `replyTo.channelId` | `string` | - | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:40](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L40) |
| `replyTo.externalThreadId?` | `string` | - | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:41](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L41) |
| `replyTo.pluginId?` | `string` | - | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:43](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L43) |
| `replyTo.userId?` | `string` | - | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:42](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L42) |
| <a id="source"></a> `source` | `"channel"` | Always 'channel' for channel plugins | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:21](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L21) |
| <a id="sourceid"></a> `sourceId` | `string` | Identifier for this channel source (e.g., 'plugin-telegram-channel') | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:23](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L23) |
| <a id="text"></a> `text` | `string` | The message text from the platform user | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:33](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L33) |
| <a id="threadid"></a> `threadId?` | `string` | Pre-resolved threadId (for 'existing' strategy) | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:27](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L27) |
| <a id="threadstrategy"></a> `threadStrategy` | `"single"` \| `"per-user"` \| `"per-conversation"` \| `"per-message"` \| `"existing"` | How to resolve the thread | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:25](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L25) |
| <a id="timestamp"></a> `timestamp?` | `string` | Timestamp of the original message | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:48](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L48) |
| <a id="userid"></a> `userId?` | `string` | External user identifier (for per-user strategy) | [CodeBolt/packages/pluginSdk/src/modules/gateway.ts:35](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/gateway.ts#L35) |
