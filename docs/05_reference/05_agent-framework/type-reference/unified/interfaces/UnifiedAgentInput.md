---
title: UnifiedAgentInput
---

[**@codebolt/agent**](../index.md)

***

# Interface: UnifiedAgentInput

Defined in: packages/agent/src/unified/types/types.ts:136

Complete agent execution input

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="context"></a> `context?` | `Record`\<`string`, `any`\> | Processing context | packages/agent/src/unified/types/types.ts:142 |
| <a id="conversationhistory"></a> `conversationHistory?` | [`OpenAIMessage`](OpenAIMessage)[] | Previous conversation history | packages/agent/src/unified/types/types.ts:144 |
| <a id="maxiterations"></a> `maxIterations?` | `number` | Maximum iterations for this execution | packages/agent/src/unified/types/types.ts:146 |
| <a id="tools"></a> `tools?` | [`OpenAITool`](OpenAITool)[] | Available tools | packages/agent/src/unified/types/types.ts:140 |
| <a id="usermessage"></a> `userMessage` | `any` | User message or request | packages/agent/src/unified/types/types.ts:138 |
