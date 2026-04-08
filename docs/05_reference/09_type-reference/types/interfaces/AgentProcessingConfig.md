---
title: AgentProcessingConfig
---

[**@codebolt/types**](../index)

***

# Interface: AgentProcessingConfig

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/agent.ts:47

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="filecontentprocessor"></a> `fileContentProcessor?` | (`filePath`: `string`) => `Promise`\<`string`\> | Custom file content processor | [common/types/src/codeboltjstypes/libFunctionTypes/agent.ts:57](common/types/src/codeboltjstypes/libFunctionTypes/agent.ts#L57) |
| <a id="mcptoolprocessor"></a> `mcpToolProcessor?` | (`toolbox`: `string`, `toolName`: `string`) => `Promise`\<[`MCPToolResult`](MCPToolResult)\> | Custom MCP tool processor | [common/types/src/codeboltjstypes/libFunctionTypes/agent.ts:59](common/types/src/codeboltjstypes/libFunctionTypes/agent.ts#L59) |
| <a id="processmentionedagents"></a> `processMentionedAgents?` | `boolean` | Whether to process mentioned agents and make them available as sub-agents | [common/types/src/codeboltjstypes/libFunctionTypes/agent.ts:55](common/types/src/codeboltjstypes/libFunctionTypes/agent.ts#L55) |
| <a id="processmentionedfiles"></a> `processMentionedFiles?` | `boolean` | Whether to process mentioned files and include their content | [common/types/src/codeboltjstypes/libFunctionTypes/agent.ts:53](common/types/src/codeboltjstypes/libFunctionTypes/agent.ts#L53) |
| <a id="processmentionedmcps"></a> `processMentionedMCPs?` | `boolean` | Whether to process mentioned MCPs and make them available as tools | [common/types/src/codeboltjstypes/libFunctionTypes/agent.ts:49](common/types/src/codeboltjstypes/libFunctionTypes/agent.ts#L49) |
| <a id="processremixprompt"></a> `processRemixPrompt?` | `boolean` | Whether to use remix prompt to enhance system instructions | [common/types/src/codeboltjstypes/libFunctionTypes/agent.ts:51](common/types/src/codeboltjstypes/libFunctionTypes/agent.ts#L51) |
