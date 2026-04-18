---
title: OrchestratorConfig
---

[**@codebolt/client-sdk**](../index)

***

# Interface: OrchestratorConfig

Defined in: CodeBolt/packages/clientsdk/src/types/orchestrator.ts:5

Orchestrator configuration

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="defaulttimeout"></a> `defaultTimeout?` | `number` | [CodeBolt/packages/clientsdk/src/types/orchestrator.ts:11](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/orchestrator.ts#L11) |
| <a id="description"></a> `description?` | `string` | [CodeBolt/packages/clientsdk/src/types/orchestrator.ts:8](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/orchestrator.ts#L8) |
| <a id="id"></a> `id` | `string` | [CodeBolt/packages/clientsdk/src/types/orchestrator.ts:6](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/orchestrator.ts#L6) |
| <a id="maxconcurrentagents"></a> `maxConcurrentAgents?` | `number` | [CodeBolt/packages/clientsdk/src/types/orchestrator.ts:9](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/orchestrator.ts#L9) |
| <a id="maxconcurrentswarms"></a> `maxConcurrentSwarms?` | `number` | [CodeBolt/packages/clientsdk/src/types/orchestrator.ts:10](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/orchestrator.ts#L10) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | [CodeBolt/packages/clientsdk/src/types/orchestrator.ts:17](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/orchestrator.ts#L17) |
| <a id="name"></a> `name` | `string` | [CodeBolt/packages/clientsdk/src/types/orchestrator.ts:7](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/orchestrator.ts#L7) |
| <a id="retrypolicy"></a> `retryPolicy?` | \{ `backoffMultiplier`: `number`; `initialDelay`: `number`; `maxRetries`: `number`; \} | [CodeBolt/packages/clientsdk/src/types/orchestrator.ts:12](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/orchestrator.ts#L12) |
| `retryPolicy.backoffMultiplier` | `number` | [CodeBolt/packages/clientsdk/src/types/orchestrator.ts:14](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/orchestrator.ts#L14) |
| `retryPolicy.initialDelay` | `number` | [CodeBolt/packages/clientsdk/src/types/orchestrator.ts:15](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/orchestrator.ts#L15) |
| `retryPolicy.maxRetries` | `number` | [CodeBolt/packages/clientsdk/src/types/orchestrator.ts:13](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/orchestrator.ts#L13) |
