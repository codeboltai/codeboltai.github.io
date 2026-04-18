---
title: LLMChatResponse
---

[**@codebolt/client-sdk**](../index)

***

# Interface: LLMChatResponse

Defined in: CodeBolt/packages/clientsdk/src/types/llm.ts:55

LLM chat response

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="content"></a> `content` | `string` | [CodeBolt/packages/clientsdk/src/types/llm.ts:57](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/llm.ts#L57) |
| <a id="finishreason"></a> `finishReason?` | `string` | [CodeBolt/packages/clientsdk/src/types/llm.ts:64](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/llm.ts#L64) |
| <a id="id"></a> `id` | `string` | [CodeBolt/packages/clientsdk/src/types/llm.ts:56](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/llm.ts#L56) |
| <a id="model"></a> `model` | `string` | [CodeBolt/packages/clientsdk/src/types/llm.ts:58](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/llm.ts#L58) |
| <a id="usage"></a> `usage?` | \{ `completionTokens`: `number`; `promptTokens`: `number`; `totalTokens`: `number`; \} | [CodeBolt/packages/clientsdk/src/types/llm.ts:59](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/llm.ts#L59) |
| `usage.completionTokens` | `number` | [CodeBolt/packages/clientsdk/src/types/llm.ts:61](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/llm.ts#L61) |
| `usage.promptTokens` | `number` | [CodeBolt/packages/clientsdk/src/types/llm.ts:60](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/llm.ts#L60) |
| `usage.totalTokens` | `number` | [CodeBolt/packages/clientsdk/src/types/llm.ts:62](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/llm.ts#L62) |
