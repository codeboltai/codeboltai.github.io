---
title: AgentExecutionResult
---

[**@codebolt/agent**](../../index)

***

# Interface: AgentExecutionResult

Defined in: packages/agent/src/unified/types/libTypes.ts:273

Agent execution result

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="completed"></a> `completed` | `boolean` | Whether the agent completed its task | [packages/agent/src/unified/types/libTypes.ts:285](packages/agent/src/unified/types/libTypes.ts#L285) |
| <a id="context"></a> `context` | `Record`\<`string`, `unknown`\> | Execution context | [packages/agent/src/unified/types/libTypes.ts:287](packages/agent/src/unified/types/libTypes.ts#L287) |
| <a id="conversationhistory"></a> `conversationHistory` | [`OpenAIMessage`](OpenAIMessage)[] | Complete conversation history | [packages/agent/src/unified/types/libTypes.ts:279](packages/agent/src/unified/types/libTypes.ts#L279) |
| <a id="error"></a> `error?` | `string` | Error message if execution failed | [packages/agent/src/unified/types/libTypes.ts:289](packages/agent/src/unified/types/libTypes.ts#L289) |
| <a id="iterations"></a> `iterations` | `number` | Number of iterations performed | [packages/agent/src/unified/types/libTypes.ts:283](packages/agent/src/unified/types/libTypes.ts#L283) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | Execution metadata | [packages/agent/src/unified/types/libTypes.ts:291](packages/agent/src/unified/types/libTypes.ts#L291) |
| <a id="response"></a> `response` | `string` | Final response message | [packages/agent/src/unified/types/libTypes.ts:277](packages/agent/src/unified/types/libTypes.ts#L277) |
| <a id="success"></a> `success` | `boolean` | Whether execution completed successfully | [packages/agent/src/unified/types/libTypes.ts:275](packages/agent/src/unified/types/libTypes.ts#L275) |
| <a id="toolresults"></a> `toolResults` | [`ToolResult`](ToolResult)[] | Tool execution results | [packages/agent/src/unified/types/libTypes.ts:281](packages/agent/src/unified/types/libTypes.ts#L281) |
