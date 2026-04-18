---
title: AgentSocketEvents
---

[**@codebolt/client-sdk**](../index)

***

# Interface: AgentSocketEvents

Defined in: CodeBolt/packages/clientsdk/src/types/socket-events.ts:10

Agent socket events

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agenterror"></a> `agent:error` | (`data`: \{ `agentId`: `string`; `error`: `string`; `instanceId`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:14](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L14) |
| <a id="agentoutput"></a> `agent:output` | (`data`: \{ `agentId`: `string`; `instanceId`: `string`; `output`: `unknown`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:13](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L13) |
| <a id="agentstarted"></a> `agent:started` | (`data`: \{ `agentId`: `string`; `instanceId`: `string`; `threadId`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:11](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L11) |
| <a id="agentstatus-changed"></a> `agent:status-changed` | (`data`: \{ `agentId`: `string`; `status`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:15](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L15) |
| <a id="agentstopped"></a> `agent:stopped` | (`data`: \{ `agentId`: `string`; `instanceId`: `string`; `reason?`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:12](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L12) |
