---
title: CodeboltAPI
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: CodeboltAPI

Defined in: packages/codeboltjs/src/types/libFunctionTypes.ts:284

Interface for codebolt API functionality

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="chat"></a> `chat` | \{ `sendMessage`: (`message`: `string`, `metadata`: `Record`\<`string`, `unknown`\>) => `Promise`\<`void`\>; \} | [packages/codeboltjs/src/types/libFunctionTypes.ts:297](packages/codeboltjs/src/types/libFunctionTypes.ts#L297) |
| `chat.sendMessage` | (`message`: `string`, `metadata`: `Record`\<`string`, `unknown`\>) => `Promise`\<`void`\> | [packages/codeboltjs/src/types/libFunctionTypes.ts:298](packages/codeboltjs/src/types/libFunctionTypes.ts#L298) |
| <a id="fs"></a> `fs` | \{ `listFile`: (`path`: `string`, `recursive`: `boolean`) => `Promise`\<\{ `result`: `string`; `success`: `boolean`; \}\>; `readFile`: (`filepath`: `string`) => `Promise`\<`string`\>; \} | [packages/codeboltjs/src/types/libFunctionTypes.ts:290](packages/codeboltjs/src/types/libFunctionTypes.ts#L290) |
| `fs.listFile` | (`path`: `string`, `recursive`: `boolean`) => `Promise`\<\{ `result`: `string`; `success`: `boolean`; \}\> | [packages/codeboltjs/src/types/libFunctionTypes.ts:292](packages/codeboltjs/src/types/libFunctionTypes.ts#L292) |
| `fs.readFile` | (`filepath`: `string`) => `Promise`\<`string`\> | [packages/codeboltjs/src/types/libFunctionTypes.ts:291](packages/codeboltjs/src/types/libFunctionTypes.ts#L291) |
| <a id="mcp"></a> `mcp` | \{ `executeTool`: (`toolboxName`: `string`, `actualToolName`: `string`, `toolInput`: `Record`\<`string`, `unknown`\>) => `Promise`\<\{ `data`: `string` \| `Record`\<`string`, `unknown`\>; \}\>; `getTools`: (`mcps`: `string`[]) => `Promise`\<\{ `data`: [`OpenAITool`](OpenAITool)[]; \}\>; `listMcpFromServers`: (`servers`: `string`[]) => `Promise`\<\{ `data`: [`OpenAITool`](OpenAITool)[]; \}\>; \} | [packages/codeboltjs/src/types/libFunctionTypes.ts:285](packages/codeboltjs/src/types/libFunctionTypes.ts#L285) |
| `mcp.executeTool` | (`toolboxName`: `string`, `actualToolName`: `string`, `toolInput`: `Record`\<`string`, `unknown`\>) => `Promise`\<\{ `data`: `string` \| `Record`\<`string`, `unknown`\>; \}\> | [packages/codeboltjs/src/types/libFunctionTypes.ts:288](packages/codeboltjs/src/types/libFunctionTypes.ts#L288) |
| `mcp.getTools` | (`mcps`: `string`[]) => `Promise`\<\{ `data`: [`OpenAITool`](OpenAITool)[]; \}\> | [packages/codeboltjs/src/types/libFunctionTypes.ts:287](packages/codeboltjs/src/types/libFunctionTypes.ts#L287) |
| `mcp.listMcpFromServers` | (`servers`: `string`[]) => `Promise`\<\{ `data`: [`OpenAITool`](OpenAITool)[]; \}\> | [packages/codeboltjs/src/types/libFunctionTypes.ts:286](packages/codeboltjs/src/types/libFunctionTypes.ts#L286) |
| <a id="project"></a> `project` | \{ `getProjectPath`: () => `Promise`\<\{ `projectPath`: `string`; \}\>; \} | [packages/codeboltjs/src/types/libFunctionTypes.ts:294](packages/codeboltjs/src/types/libFunctionTypes.ts#L294) |
| `project.getProjectPath` | () => `Promise`\<\{ `projectPath`: `string`; \}\> | [packages/codeboltjs/src/types/libFunctionTypes.ts:295](packages/codeboltjs/src/types/libFunctionTypes.ts#L295) |
