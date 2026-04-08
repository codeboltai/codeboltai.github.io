---
title: UnifiedResponseOutput
---

[**@codebolt/agent**](../../index)

***

# Interface: UnifiedResponseOutput

Defined in: packages/agent/src/unified/types/types.ts:120

Output from unified response execution

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="completed"></a> `completed` | `boolean` | Whether task is completed | [packages/agent/src/unified/types/types.ts:128](packages/agent/src/unified/types/types.ts#L128) |
| <a id="conversationhistory"></a> `conversationHistory` | [`OpenAIMessage`](OpenAIMessage)[] | Updated conversation history | [packages/agent/src/unified/types/types.ts:126](packages/agent/src/unified/types/types.ts#L126) |
| <a id="finalmessage"></a> `finalMessage?` | `string` | Final response message | [packages/agent/src/unified/types/types.ts:130](packages/agent/src/unified/types/types.ts#L130) |
| <a id="nextusermessage"></a> `nextUserMessage` | [`OpenAIMessage`](OpenAIMessage) \| `null` | Next user message (if any) | [packages/agent/src/unified/types/types.ts:124](packages/agent/src/unified/types/types.ts#L124) |
| <a id="toolresults"></a> `toolResults` | [`ToolResult`](ToolResult)[] | Tool execution results | [packages/agent/src/unified/types/types.ts:122](packages/agent/src/unified/types/types.ts#L122) |
