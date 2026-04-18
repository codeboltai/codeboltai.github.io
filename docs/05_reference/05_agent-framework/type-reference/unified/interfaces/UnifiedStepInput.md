---
title: UnifiedStepInput
---

[**@codebolt/agent**](../index.md)

***

# Interface: UnifiedStepInput

Defined in: packages/agent/src/unified/types/types.ts:78

Input for unified agent step processing

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="context"></a> `context?` | `Record`\<`string`, `any`\> | Processing context | packages/agent/src/unified/types/types.ts:84 |
| <a id="messages"></a> `messages` | [`OpenAIMessage`](OpenAIMessage)[] | Processed messages | packages/agent/src/unified/types/types.ts:80 |
| <a id="toolchoice"></a> `toolChoice?` | `"auto"` \| `"none"` \| `"required"` | Tool choice strategy | packages/agent/src/unified/types/types.ts:86 |
| <a id="tools"></a> `tools` | [`OpenAITool`](OpenAITool)[] | Available tools | packages/agent/src/unified/types/types.ts:82 |
