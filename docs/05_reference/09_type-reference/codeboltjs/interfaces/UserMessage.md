---
title: UserMessage
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: UserMessage

Defined in: packages/codeboltjs/src/types/libFunctionTypes.ts:246

User message received from the Codebolt platform
This is a simplified, user-friendly version of the internal message format

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="currentfile"></a> `currentFile` | `string` | Current file being worked on | [packages/codeboltjs/src/types/libFunctionTypes.ts:251](packages/codeboltjs/src/types/libFunctionTypes.ts#L251) |
| <a id="mentionedagents"></a> `mentionedAgents?` | `string`[] | - | [packages/codeboltjs/src/types/libFunctionTypes.ts:278](packages/codeboltjs/src/types/libFunctionTypes.ts#L278) |
| <a id="mentionedfiles"></a> `mentionedFiles` | `string`[] | Files mentioned in the message | [packages/codeboltjs/src/types/libFunctionTypes.ts:253](packages/codeboltjs/src/types/libFunctionTypes.ts#L253) |
| <a id="mentionedfolders"></a> `mentionedFolders` | `string`[] | Folders mentioned | [packages/codeboltjs/src/types/libFunctionTypes.ts:259](packages/codeboltjs/src/types/libFunctionTypes.ts#L259) |
| <a id="mentionedfullpaths"></a> `mentionedFullPaths` | `string`[] | Full file paths mentioned | [packages/codeboltjs/src/types/libFunctionTypes.ts:255](packages/codeboltjs/src/types/libFunctionTypes.ts#L255) |
| <a id="mentionedmcps"></a> `mentionedMCPs` | `string`[] | MCPs mentioned | [packages/codeboltjs/src/types/libFunctionTypes.ts:257](packages/codeboltjs/src/types/libFunctionTypes.ts#L257) |
| <a id="messageid"></a> `messageId` | `string` | Unique message identifier | [packages/codeboltjs/src/types/libFunctionTypes.ts:268](packages/codeboltjs/src/types/libFunctionTypes.ts#L268) |
| <a id="remixprompt"></a> `remixPrompt?` | `string` | - | [packages/codeboltjs/src/types/libFunctionTypes.ts:277](packages/codeboltjs/src/types/libFunctionTypes.ts#L277) |
| <a id="selectedagent"></a> `selectedAgent` | \{ `id`: `string`; `name`: `string`; \} | Selected agent information | [packages/codeboltjs/src/types/libFunctionTypes.ts:263](packages/codeboltjs/src/types/libFunctionTypes.ts#L263) |
| `selectedAgent.id` | `string` | - | [packages/codeboltjs/src/types/libFunctionTypes.ts:264](packages/codeboltjs/src/types/libFunctionTypes.ts#L264) |
| `selectedAgent.name` | `string` | - | [packages/codeboltjs/src/types/libFunctionTypes.ts:265](packages/codeboltjs/src/types/libFunctionTypes.ts#L265) |
| <a id="selection"></a> `selection?` | \{ `end`: `number`; `start`: `number`; `text`: `string`; \} | Any text selection in the editor | [packages/codeboltjs/src/types/libFunctionTypes.ts:272](packages/codeboltjs/src/types/libFunctionTypes.ts#L272) |
| `selection.end` | `number` | - | [packages/codeboltjs/src/types/libFunctionTypes.ts:274](packages/codeboltjs/src/types/libFunctionTypes.ts#L274) |
| `selection.start` | `number` | - | [packages/codeboltjs/src/types/libFunctionTypes.ts:273](packages/codeboltjs/src/types/libFunctionTypes.ts#L273) |
| `selection.text` | `string` | - | [packages/codeboltjs/src/types/libFunctionTypes.ts:275](packages/codeboltjs/src/types/libFunctionTypes.ts#L275) |
| <a id="threadid"></a> `threadId` | `string` | Thread identifier | [packages/codeboltjs/src/types/libFunctionTypes.ts:270](packages/codeboltjs/src/types/libFunctionTypes.ts#L270) |
| <a id="type"></a> `type` | `string` | - | [packages/codeboltjs/src/types/libFunctionTypes.ts:247](packages/codeboltjs/src/types/libFunctionTypes.ts#L247) |
| <a id="uploadedimages"></a> `uploadedImages` | `string`[] | Images uploaded with the message | [packages/codeboltjs/src/types/libFunctionTypes.ts:261](packages/codeboltjs/src/types/libFunctionTypes.ts#L261) |
| <a id="usermessage"></a> `userMessage` | `string` | The user's message content | [packages/codeboltjs/src/types/libFunctionTypes.ts:249](packages/codeboltjs/src/types/libFunctionTypes.ts#L249) |
