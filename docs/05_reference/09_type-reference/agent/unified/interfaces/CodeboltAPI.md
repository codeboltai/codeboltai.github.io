---
title: CodeboltAPI
---

[**@codebolt/agent**](../index.md)

***

# Interface: CodeboltAPI

Defined in: packages/agent/src/unified/types/libTypes.ts:173

CodeBolt API interface for agent operations

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="agent"></a> `agent?` | \{ `listAgents`: `Promise`\<`string`[]\>; `startAgent`: `Promise`\<\{ `data`: `unknown`; \}\>; \} | Agent operations | packages/agent/src/unified/types/libTypes.ts:220 |
| `agent.listAgents` | `Promise`\<`string`[]\> | - | packages/agent/src/unified/types/libTypes.ts:224 |
| `agent.startAgent` | `Promise`\<\{ `data`: `unknown`; \}\> | - | packages/agent/src/unified/types/libTypes.ts:222 |
| <a id="chat"></a> `chat` | \{ `clearHistory`: `Promise`\<`void`\>; `getHistory`: `Promise`\<[`OpenAIMessage`](OpenAIMessage)[]\>; `sendMessage`: `Promise`\<`void`\>; `summarizeConversation`: `Promise`\<`string`\>; \} | Chat operations | packages/agent/src/unified/types/libTypes.ts:175 |
| `chat.clearHistory` | `Promise`\<`void`\> | - | packages/agent/src/unified/types/libTypes.ts:181 |
| `chat.getHistory` | `Promise`\<[`OpenAIMessage`](OpenAIMessage)[]\> | - | packages/agent/src/unified/types/libTypes.ts:179 |
| `chat.sendMessage` | `Promise`\<`void`\> | - | packages/agent/src/unified/types/libTypes.ts:177 |
| `chat.summarizeConversation` | `Promise`\<`string`\> | - | packages/agent/src/unified/types/libTypes.ts:183 |
| <a id="fs"></a> `fs` | \{ `exists`: `Promise`\<`boolean`\>; `listDir`: `Promise`\<`string`[]\>; `readFile`: `Promise`\<`string`\>; `writeFile`: `Promise`\<`void`\>; \} | File system operations | packages/agent/src/unified/types/libTypes.ts:208 |
| `fs.exists` | `Promise`\<`boolean`\> | - | packages/agent/src/unified/types/libTypes.ts:216 |
| `fs.listDir` | `Promise`\<`string`[]\> | - | packages/agent/src/unified/types/libTypes.ts:214 |
| `fs.readFile` | `Promise`\<`string`\> | - | packages/agent/src/unified/types/libTypes.ts:210 |
| `fs.writeFile` | `Promise`\<`void`\> | - | packages/agent/src/unified/types/libTypes.ts:212 |
| <a id="llm"></a> `llm` | \{ `inference`: `Promise`\<`LLMResponse`\>; `stream`: `AsyncIterable`\<`LLMResponse`\>; \} | LLM operations | packages/agent/src/unified/types/libTypes.ts:190 |
| `llm.inference` | `Promise`\<`LLMResponse`\> | - | packages/agent/src/unified/types/libTypes.ts:192 |
| `llm.stream` | `AsyncIterable`\<`LLMResponse`\> | - | packages/agent/src/unified/types/libTypes.ts:194 |
| <a id="mcp"></a> `mcp` | \{ `executeTool`: `Promise`\<\{ `data`: `unknown`; \}\>; `getToolSchema`: `Promise`\<[`OpenAITool`](OpenAITool)\>; `listTools`: `Promise`\<`string`[]\>; \} | MCP (Micro-Component Platform) operations | packages/agent/src/unified/types/libTypes.ts:198 |
| `mcp.executeTool` | `Promise`\<\{ `data`: `unknown`; \}\> | - | packages/agent/src/unified/types/libTypes.ts:200 |
| `mcp.getToolSchema` | `Promise`\<[`OpenAITool`](OpenAITool)\> | - | packages/agent/src/unified/types/libTypes.ts:204 |
| `mcp.listTools` | `Promise`\<`string`[]\> | - | packages/agent/src/unified/types/libTypes.ts:202 |
