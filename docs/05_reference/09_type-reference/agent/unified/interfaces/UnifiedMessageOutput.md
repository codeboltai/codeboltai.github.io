---
title: UnifiedMessageOutput
---

[**@codebolt/agent**](../index.md)

***

# Interface: UnifiedMessageOutput

Defined in: packages/agent/src/unified/types/types.ts:64

Output from unified message processing

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="context"></a> `context` | `Record`\<`string`, `any`\> | Updated context | packages/agent/src/unified/types/types.ts:70 |
| <a id="messages"></a> `messages` | [`OpenAIMessage`](OpenAIMessage)[] | Processed messages ready for LLM | packages/agent/src/unified/types/types.ts:66 |
| <a id="toolchoice"></a> `toolChoice` | `"auto"` \| `"none"` \| `"required"` | Tool choice strategy | packages/agent/src/unified/types/types.ts:72 |
| <a id="tools"></a> `tools` | [`OpenAITool`](OpenAITool)[] | Available tools | packages/agent/src/unified/types/types.ts:68 |
