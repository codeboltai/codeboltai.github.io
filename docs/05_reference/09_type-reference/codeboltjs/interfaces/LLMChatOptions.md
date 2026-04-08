---
title: LLMChatOptions
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: LLMChatOptions

Defined in: packages/codeboltjs/src/types/libFunctionTypes.ts:1375

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="maxtokens"></a> `maxTokens?` | `number` | Maximum tokens to generate | [packages/codeboltjs/src/types/libFunctionTypes.ts:1383](packages/codeboltjs/src/types/libFunctionTypes.ts#L1383) |
| <a id="messages"></a> `messages` | [`Message`](Message)[] | Messages in the conversation | [packages/codeboltjs/src/types/libFunctionTypes.ts:1377](packages/codeboltjs/src/types/libFunctionTypes.ts#L1377) |
| <a id="model"></a> `model?` | `string` | Model to use | [packages/codeboltjs/src/types/libFunctionTypes.ts:1379](packages/codeboltjs/src/types/libFunctionTypes.ts#L1379) |
| <a id="stream"></a> `stream?` | `boolean` | Whether to stream response | [packages/codeboltjs/src/types/libFunctionTypes.ts:1385](packages/codeboltjs/src/types/libFunctionTypes.ts#L1385) |
| <a id="temperature"></a> `temperature?` | `number` | Temperature (0-1) | [packages/codeboltjs/src/types/libFunctionTypes.ts:1381](packages/codeboltjs/src/types/libFunctionTypes.ts#L1381) |
| <a id="toolchoice"></a> `toolChoice?` | `"auto"` \| `"none"` \| `"required"` | Tool choice strategy | [packages/codeboltjs/src/types/libFunctionTypes.ts:1389](packages/codeboltjs/src/types/libFunctionTypes.ts#L1389) |
| <a id="tools"></a> `tools?` | [`Tool`](Tool)[] | Available tools | [packages/codeboltjs/src/types/libFunctionTypes.ts:1387](packages/codeboltjs/src/types/libFunctionTypes.ts#L1387) |
