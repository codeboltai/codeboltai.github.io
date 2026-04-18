---
title: LlmProviderManifest
---

[**@codebolt/plugin-sdk**](../index)

***

# Interface: LlmProviderManifest

Defined in: CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:38

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="capabilities"></a> `capabilities?` | `string`[] | - | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:42](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L42) |
| <a id="configfields"></a> `configFields?` | `LlmProviderConfigField`[] | Optional list of additional config fields beyond the standard apiKey/apiUrl. These will appear (in future UI) and any saved values are passed in `req.options.providerConfig.custom` on every request. | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:55](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L55) |
| <a id="description"></a> `description?` | `string` | - | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:43](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L43) |
| <a id="models"></a> `models?` | [`LlmProviderModelInfo`](LlmProviderModelInfo)[] | - | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:41](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L41) |
| <a id="name"></a> `name` | `string` | - | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:40](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L40) |
| <a id="providerid"></a> `providerId` | `string` | - | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:39](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L39) |
| <a id="requireskey"></a> `requiresKey?` | `boolean` | If true, the user must supply an API key in the settings UI before this provider can be used. The configured key/apiUrl are forwarded to the plugin in `req.options.providerConfig` on every request. | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:49](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L49) |
