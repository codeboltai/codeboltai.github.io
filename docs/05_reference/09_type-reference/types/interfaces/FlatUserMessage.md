---
title: FlatUserMessage
---

[**@codebolt/types**](../index)

***

# Interface: FlatUserMessage

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:48

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="actions"></a> `actions?` | `any`[] | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:64](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L64) |
| <a id="activefile"></a> `activeFile?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:79](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L79) |
| <a id="controlfiles"></a> `controlFiles?` | `any`[] | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:70](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L70) |
| <a id="currentfile"></a> `currentFile?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:50](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L50) |
| <a id="feedbackmessage"></a> `feedbackMessage?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:71](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L71) |
| <a id="links"></a> `links?` | `any`[] | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:67](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L67) |
| <a id="mentionedagents"></a> `mentionedAgents` | `any`[] | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:65](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L65) |
| <a id="mentioneddocs"></a> `mentionedDocs?` | `any`[] | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:66](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L66) |
| <a id="mentionedfiles"></a> `mentionedFiles` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:58](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L58) |
| <a id="mentionedfolders"></a> `mentionedFolders` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:60](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L60) |
| <a id="mentionedfullpaths"></a> `mentionedFullPaths` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:59](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L59) |
| <a id="mentionedmcps"></a> `mentionedMCPs` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:62](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L62) |
| <a id="mentionedmultifile"></a> `mentionedMultiFile?` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:61](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L61) |
| <a id="messageid"></a> `messageId` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:73](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L73) |
| <a id="openedfiles"></a> `openedFiles?` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:80](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L80) |
| <a id="processid"></a> `processId?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:76](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L76) |
| <a id="remixprompt"></a> `remixPrompt?` | `any` | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:78](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L78) |
| <a id="selectedagent"></a> `selectedAgent` | \{ `agentDetails?`: `string`; `agentType?`: `AgentTypeEnum`; `id`: `string`; `lastMessage?`: `Record`\<`string`, `any`\>; `name`: `string`; \} | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:51](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L51) |
| `selectedAgent.agentDetails?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:56](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L56) |
| `selectedAgent.agentType?` | `AgentTypeEnum` | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:55](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L55) |
| `selectedAgent.id` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:52](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L52) |
| `selectedAgent.lastMessage?` | `Record`\<`string`, `any`\> | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:54](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L54) |
| `selectedAgent.name` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:53](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L53) |
| <a id="selection"></a> `selection?` | `any` | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:69](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L69) |
| <a id="shadowgithash"></a> `shadowGitHash?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:77](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L77) |
| <a id="templatetype"></a> `templateType?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:75](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L75) |
| <a id="terminalmessage"></a> `terminalMessage?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:72](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L72) |
| <a id="threadid"></a> `threadId` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:74](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L74) |
| <a id="universalagentlastmessage"></a> `universalAgentLastMessage?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:68](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L68) |
| <a id="uploadedimages"></a> `uploadedImages` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:63](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L63) |
| <a id="usermessage"></a> `userMessage` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:49](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L49) |
