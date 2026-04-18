---
title: AgentRegistration
---

[**@codebolt/client-sdk**](../index)

***

# Interface: AgentRegistration

Defined in: CodeBolt/packages/clientsdk/src/types/swarm.ts:44

Agent registration in swarm

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agenttype"></a> `agentType` | `"internal"` \| `"external"` | [CodeBolt/packages/clientsdk/src/types/swarm.ts:47](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L47) |
| <a id="capabilities"></a> `capabilities` | `string`[] | [CodeBolt/packages/clientsdk/src/types/swarm.ts:46](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L46) |
| <a id="connectioninfo"></a> `connectionInfo?` | \{ `endpoint`: `string`; `protocol`: `"websocket"` \| `"http"`; \} | [CodeBolt/packages/clientsdk/src/types/swarm.ts:48](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L48) |
| `connectionInfo.endpoint` | `string` | [CodeBolt/packages/clientsdk/src/types/swarm.ts:49](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L49) |
| `connectionInfo.protocol` | `"websocket"` \| `"http"` | [CodeBolt/packages/clientsdk/src/types/swarm.ts:50](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L50) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | [CodeBolt/packages/clientsdk/src/types/swarm.ts:52](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L52) |
| <a id="name"></a> `name` | `string` | [CodeBolt/packages/clientsdk/src/types/swarm.ts:45](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L45) |
