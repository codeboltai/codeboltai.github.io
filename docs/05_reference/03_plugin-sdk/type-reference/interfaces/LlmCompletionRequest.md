---
title: LlmCompletionRequest
---

[**@codebolt/plugin-sdk**](../index)

***

# Interface: LlmCompletionRequest

Defined in: CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:92

Incoming non-streaming completion request from server.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="options"></a> `options` | `any` | ChatCompletionOptions shape from multillm. `providerConfig` is injected. | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:97](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L97) |
| <a id="providerconfig"></a> `providerConfig?` | `LlmProviderConfig` | - | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:98](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L98) |
| <a id="providerid"></a> `providerId` | `string` | - | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:95](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L95) |
| <a id="requestid"></a> `requestId` | `string` | - | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:94](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L94) |
| <a id="timestamp"></a> `timestamp` | `string` | - | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:99](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L99) |
| <a id="type"></a> `type` | `"llmProvider.completionRequest"` | - | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:93](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L93) |
