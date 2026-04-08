---
title: UnifiedAgentOutput
---

[**@codebolt/agent**](../../index)

***

# Interface: UnifiedAgentOutput

Defined in: packages/agent/src/unified/types/types.ts:152

Complete agent execution output

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="completed"></a> `completed` | `boolean` | Whether task was completed successfully | [packages/agent/src/unified/types/types.ts:162](packages/agent/src/unified/types/types.ts#L162) |
| <a id="context"></a> `context` | `Record`\<`string`, `any`\> | Final context state | [packages/agent/src/unified/types/types.ts:160](packages/agent/src/unified/types/types.ts#L160) |
| <a id="conversationhistory"></a> `conversationHistory` | [`OpenAIMessage`](OpenAIMessage)[] | Updated conversation history | [packages/agent/src/unified/types/types.ts:158](packages/agent/src/unified/types/types.ts#L158) |
| <a id="iterations"></a> `iterations` | `number` | Number of iterations used | [packages/agent/src/unified/types/types.ts:164](packages/agent/src/unified/types/types.ts#L164) |
| <a id="response"></a> `response` | `string` | Final response message | [packages/agent/src/unified/types/types.ts:154](packages/agent/src/unified/types/types.ts#L154) |
| <a id="toolresults"></a> `toolResults` | [`ToolResult`](ToolResult)[] | Tool execution results | [packages/agent/src/unified/types/types.ts:156](packages/agent/src/unified/types/types.ts#L156) |
