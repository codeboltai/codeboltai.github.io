---
title: UnifiedResponseInput
---

[**@codebolt/agent**](../index.md)

***

# Interface: UnifiedResponseInput

Defined in: packages/agent/src/unified/types/types.ts:106

Input for unified response execution

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="context"></a> `context?` | `Record`\<`string`, `any`\> | Processing context | packages/agent/src/unified/types/types.ts:114 |
| <a id="conversationhistory"></a> `conversationHistory` | [`OpenAIMessage`](OpenAIMessage)[] | Previous conversation messages | packages/agent/src/unified/types/types.ts:110 |
| <a id="llmresponse"></a> `llmResponse` | `any` | LLM response to process | packages/agent/src/unified/types/types.ts:108 |
| <a id="tools"></a> `tools` | [`OpenAITool`](OpenAITool)[] | Available tools | packages/agent/src/unified/types/types.ts:112 |
