---
title: CodeBoltConfig
---

[**@codebolt/plugin-sdk**](../index)

***

# Interface: CodeBoltConfig

Defined in: CodeBolt/packages/pluginSdk/src/config.ts:3

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="autoconnect"></a> `autoConnect?` | `boolean` | Auto-connect on initialization | [CodeBolt/packages/pluginSdk/src/config.ts:21](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/config.ts#L21) |
| <a id="basepath"></a> `basePath` | `string` | Base path for HTTP API | [CodeBolt/packages/pluginSdk/src/config.ts:9](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/config.ts#L9) |
| <a id="debug"></a> `debug` | `boolean` | Enable debug logging | [CodeBolt/packages/pluginSdk/src/config.ts:19](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/config.ts#L19) |
| <a id="defaultpreset"></a> `defaultPreset?` | [`ConnectionPreset`](../enumerations/ConnectionPreset) | Default connection preset to use | [CodeBolt/packages/pluginSdk/src/config.ts:23](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/config.ts#L23) |
| <a id="defaultsockets"></a> `defaultSockets?` | `string`[] | Default sockets to connect to | [CodeBolt/packages/pluginSdk/src/config.ts:25](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/config.ts#L25) |
| <a id="excludehighspeed"></a> `excludeHighSpeed?` | `boolean` | Exclude high-speed sockets | [CodeBolt/packages/pluginSdk/src/config.ts:27](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/config.ts#L27) |
| <a id="host"></a> `host` | `string` | Server hostname | [CodeBolt/packages/pluginSdk/src/config.ts:5](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/config.ts#L5) |
| <a id="httptimeout"></a> `httpTimeout` | `number` | HTTP request timeout in milliseconds | [CodeBolt/packages/pluginSdk/src/config.ts:11](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/config.ts#L11) |
| <a id="port"></a> `port` | `number` | Server port | [CodeBolt/packages/pluginSdk/src/config.ts:7](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/config.ts#L7) |
| <a id="wsmaxreconnectattempts"></a> `wsMaxReconnectAttempts` | `number` | Maximum number of reconnection attempts | [CodeBolt/packages/pluginSdk/src/config.ts:17](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/config.ts#L17) |
| <a id="wsreconnect"></a> `wsReconnect` | `boolean` | Whether to auto-reconnect WebSocket on disconnect | [CodeBolt/packages/pluginSdk/src/config.ts:13](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/config.ts#L13) |
| <a id="wsreconnectinterval"></a> `wsReconnectInterval` | `number` | Base interval between reconnection attempts in milliseconds | [CodeBolt/packages/pluginSdk/src/config.ts:15](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/config.ts#L15) |
