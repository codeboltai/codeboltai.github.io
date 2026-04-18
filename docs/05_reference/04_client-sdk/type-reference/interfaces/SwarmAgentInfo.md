---
title: SwarmAgentInfo
---

[**@codebolt/client-sdk**](../index)

***

# Interface: SwarmAgentInfo

Defined in: CodeBolt/packages/clientsdk/src/types/swarm.ts:56

Agent info in swarm

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agenttype"></a> `agentType` | `"internal"` \| `"external"` | [CodeBolt/packages/clientsdk/src/types/swarm.ts:71](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L71) |
| <a id="capabilities"></a> `capabilities` | `string`[] | [CodeBolt/packages/clientsdk/src/types/swarm.ts:66](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L66) |
| <a id="currenttask"></a> `currentTask?` | `string` | [CodeBolt/packages/clientsdk/src/types/swarm.ts:70](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L70) |
| <a id="id"></a> `id` | `string` | [CodeBolt/packages/clientsdk/src/types/swarm.ts:57](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L57) |
| <a id="lastseen"></a> `lastSeen` | `string` | [CodeBolt/packages/clientsdk/src/types/swarm.ts:69](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L69) |
| <a id="name"></a> `name` | `string` | [CodeBolt/packages/clientsdk/src/types/swarm.ts:58](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L58) |
| <a id="registeredat"></a> `registeredAt` | `string` | [CodeBolt/packages/clientsdk/src/types/swarm.ts:72](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L72) |
| <a id="roles"></a> `roles` | `string`[] | [CodeBolt/packages/clientsdk/src/types/swarm.ts:68](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L68) |
| <a id="status"></a> `status` | \{ `estimatedCompletion?`: `string`; `lastUpdated`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `taskDescription?`: `string`; `type`: [`SwarmAgentStatusType`](../type-aliases/SwarmAgentStatusType); \} | [CodeBolt/packages/clientsdk/src/types/swarm.ts:59](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L59) |
| `status.estimatedCompletion?` | `string` | [CodeBolt/packages/clientsdk/src/types/swarm.ts:63](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L63) |
| `status.lastUpdated` | `string` | [CodeBolt/packages/clientsdk/src/types/swarm.ts:61](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L61) |
| `status.metadata?` | `Record`\<`string`, `unknown`\> | [CodeBolt/packages/clientsdk/src/types/swarm.ts:64](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L64) |
| `status.taskDescription?` | `string` | [CodeBolt/packages/clientsdk/src/types/swarm.ts:62](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L62) |
| `status.type` | [`SwarmAgentStatusType`](../type-aliases/SwarmAgentStatusType) | [CodeBolt/packages/clientsdk/src/types/swarm.ts:60](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L60) |
| <a id="teams"></a> `teams` | `string`[] | [CodeBolt/packages/clientsdk/src/types/swarm.ts:67](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/swarm.ts#L67) |
