---
title: UnifiedAgentOutput
---

[**@codebolt/agent**](../index.md)

***

# Interface: UnifiedAgentOutput

Defined in: packages/agent/src/unified/types/types.ts:152

Complete agent execution output

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="completed"></a> `completed` | `boolean` | Whether task was completed successfully | packages/agent/src/unified/types/types.ts:162 |
| <a id="context"></a> `context` | `Record`\<`string`, `any`\> | Final context state | packages/agent/src/unified/types/types.ts:160 |
| <a id="conversationhistory"></a> `conversationHistory` | [`OpenAIMessage`](OpenAIMessage)[] | Updated conversation history | packages/agent/src/unified/types/types.ts:158 |
| <a id="iterations"></a> `iterations` | `number` | Number of iterations used | packages/agent/src/unified/types/types.ts:164 |
| <a id="response"></a> `response` | `string` | Final response message | packages/agent/src/unified/types/types.ts:154 |
| <a id="toolresults"></a> `toolResults` | [`ToolResult`](ToolResult)[] | Tool execution results | packages/agent/src/unified/types/types.ts:156 |
