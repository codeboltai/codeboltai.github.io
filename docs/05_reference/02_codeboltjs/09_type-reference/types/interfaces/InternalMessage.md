---
title: InternalMessage
---

[**@codebolt/types**](../index.md)

***

# Interface: InternalMessage

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:623

Interface for user message structure in agent lib.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="mentionedagents"></a> `mentionedAgents` | `any`[] | List of agents mentioned in the message | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:631 |
| <a id="mentionedfiles"></a> `mentionedFiles?` | `string`[] | Optional list of files mentioned in the message | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:627 |
| <a id="mentionedmcps"></a> `mentionedMCPs` | \{ `toolbox`: `string`; `toolName`: `string`; \}[] | List of MCP (Model Context Protocol) tools mentioned | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:629 |
| <a id="remixprompt"></a> `remixPrompt?` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:632 |
| <a id="usermessage"></a> `userMessage` | `string` | The actual text content of the user message | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:625 |
