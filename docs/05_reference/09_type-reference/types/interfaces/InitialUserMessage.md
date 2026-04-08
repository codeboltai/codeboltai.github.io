---
title: InitialUserMessage
---

[**@codebolt/types**](../index)

***

# Interface: InitialUserMessage

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/common.ts:407

Interface for initial user message structure

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="mentionedagents"></a> `mentionedAgents?` | [`Agent`](Agent)[] | List of mentioned agents | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:417](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L417) |
| <a id="mentionedfiles"></a> `mentionedFiles?` | `string`[] | List of mentioned files | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:413](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L413) |
| <a id="mentionedmcps"></a> `mentionedMCPs?` | [`MCPTool`](MCPTool)[] | List of mentioned MCPs | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:415](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L415) |
| <a id="messagetext"></a> `messageText?` | `string` | The message text | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:409](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L409) |
| <a id="usermessage"></a> `userMessage?` | `string` | The actual text content of the user message | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:411](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L411) |
