---
title: SwarmSocketEvents
---

[**@codebolt/client-sdk**](../index)

***

# Interface: SwarmSocketEvents

Defined in: CodeBolt/packages/clientsdk/src/types/socket-events.ts:55

Swarm socket events

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="swarmagent-joined"></a> `swarm:agent-joined` | (`data`: \{ `agentId`: `string`; `swarmId`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:56](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L56) |
| <a id="swarmagent-left"></a> `swarm:agent-left` | (`data`: \{ `agentId`: `string`; `swarmId`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:57](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L57) |
| <a id="swarmmessage"></a> `swarm:message` | (`data`: `unknown`) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:59](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L59) |
| <a id="swarmstatus-updated"></a> `swarm:status-updated` | (`data`: `unknown`) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:58](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L58) |
