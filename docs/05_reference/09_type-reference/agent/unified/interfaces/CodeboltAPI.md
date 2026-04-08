---
title: CodeboltAPI
---

[**@codebolt/agent**](../../index)

***

# Interface: CodeboltAPI

Defined in: packages/agent/src/unified/types/libTypes.ts:173

CodeBolt API interface for agent operations

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="agent"></a> `agent?` | \{ `listAgents`: `Promise`\<`string`[]\>; `startAgent`: `Promise`\<\{ `data`: `unknown`; \}\>; \} | Agent operations | [packages/agent/src/unified/types/libTypes.ts:220](packages/agent/src/unified/types/libTypes.ts#L220) |
| `agent.listAgents` | `Promise`\<`string`[]\> | - | [packages/agent/src/unified/types/libTypes.ts:224](packages/agent/src/unified/types/libTypes.ts#L224) |
| `agent.startAgent` | `Promise`\<\{ `data`: `unknown`; \}\> | - | [packages/agent/src/unified/types/libTypes.ts:222](packages/agent/src/unified/types/libTypes.ts#L222) |
| <a id="chat"></a> `chat` | \{ `clearHistory`: `Promise`\<`void`\>; `getHistory`: `Promise`\<[`OpenAIMessage`](OpenAIMessage)[]\>; `sendMessage`: `Promise`\<`void`\>; `summarizeConversation`: `Promise`\<`string`\>; \} | Chat operations | [packages/agent/src/unified/types/libTypes.ts:175](packages/agent/src/unified/types/libTypes.ts#L175) |
| `chat.clearHistory` | `Promise`\<`void`\> | - | [packages/agent/src/unified/types/libTypes.ts:181](packages/agent/src/unified/types/libTypes.ts#L181) |
| `chat.getHistory` | `Promise`\<[`OpenAIMessage`](OpenAIMessage)[]\> | - | [packages/agent/src/unified/types/libTypes.ts:179](packages/agent/src/unified/types/libTypes.ts#L179) |
| `chat.sendMessage` | `Promise`\<`void`\> | - | [packages/agent/src/unified/types/libTypes.ts:177](packages/agent/src/unified/types/libTypes.ts#L177) |
| `chat.summarizeConversation` | `Promise`\<`string`\> | - | [packages/agent/src/unified/types/libTypes.ts:183](packages/agent/src/unified/types/libTypes.ts#L183) |
| <a id="fs"></a> `fs` | \{ `exists`: `Promise`\<`boolean`\>; `listDir`: `Promise`\<`string`[]\>; `readFile`: `Promise`\<`string`\>; `writeFile`: `Promise`\<`void`\>; \} | File system operations | [packages/agent/src/unified/types/libTypes.ts:208](packages/agent/src/unified/types/libTypes.ts#L208) |
| `fs.exists` | `Promise`\<`boolean`\> | - | [packages/agent/src/unified/types/libTypes.ts:216](packages/agent/src/unified/types/libTypes.ts#L216) |
| `fs.listDir` | `Promise`\<`string`[]\> | - | [packages/agent/src/unified/types/libTypes.ts:214](packages/agent/src/unified/types/libTypes.ts#L214) |
| `fs.readFile` | `Promise`\<`string`\> | - | [packages/agent/src/unified/types/libTypes.ts:210](packages/agent/src/unified/types/libTypes.ts#L210) |
| `fs.writeFile` | `Promise`\<`void`\> | - | [packages/agent/src/unified/types/libTypes.ts:212](packages/agent/src/unified/types/libTypes.ts#L212) |
| <a id="llm"></a> `llm` | \{ `inference`: `Promise`\<`LLMResponse`\>; `stream`: `AsyncIterable`\<`LLMResponse`\>; \} | LLM operations | [packages/agent/src/unified/types/libTypes.ts:190](packages/agent/src/unified/types/libTypes.ts#L190) |
| `llm.inference` | `Promise`\<`LLMResponse`\> | - | [packages/agent/src/unified/types/libTypes.ts:192](packages/agent/src/unified/types/libTypes.ts#L192) |
| `llm.stream` | `AsyncIterable`\<`LLMResponse`\> | - | [packages/agent/src/unified/types/libTypes.ts:194](packages/agent/src/unified/types/libTypes.ts#L194) |
| <a id="mcp"></a> `mcp` | \{ `executeTool`: `Promise`\<\{ `data`: `unknown`; \}\>; `getToolSchema`: `Promise`\<[`OpenAITool`](OpenAITool)\>; `listTools`: `Promise`\<`string`[]\>; \} | MCP (Micro-Component Platform) operations | [packages/agent/src/unified/types/libTypes.ts:198](packages/agent/src/unified/types/libTypes.ts#L198) |
| `mcp.executeTool` | `Promise`\<\{ `data`: `unknown`; \}\> | - | [packages/agent/src/unified/types/libTypes.ts:200](packages/agent/src/unified/types/libTypes.ts#L200) |
| `mcp.getToolSchema` | `Promise`\<[`OpenAITool`](OpenAITool)\> | - | [packages/agent/src/unified/types/libTypes.ts:204](packages/agent/src/unified/types/libTypes.ts#L204) |
| `mcp.listTools` | `Promise`\<`string`[]\> | - | [packages/agent/src/unified/types/libTypes.ts:202](packages/agent/src/unified/types/libTypes.ts#L202) |
