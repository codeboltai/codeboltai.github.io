---
title: userMessageUtilities
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: userMessageUtilities

```ts
const userMessageUtilities: {
  clear: () => void;
  getCurrent: () => FlatUserMessage | undefined;
  getCurrentFile: () => string | undefined;
  getMentionedAgents: () => any[];
  getMentionedFiles: () => string[];
  getMentionedFolders: () => string[];
  getMentionedMCPs: () => string[];
  getMessageId: () => string | undefined;
  getProcessingConfig: () => AgentProcessingConfig;
  getRemixPrompt: () => string | undefined;
  getSelection: () => string | undefined;
  getSessionData: (key: string) => any;
  getText: () => string;
  getThreadId: () => string | undefined;
  getTimestamp: () => string | undefined;
  getUploadedImages: () => any[];
  hasMessage: () => boolean;
  isProcessingEnabled: (type: 
     | "processMentionedMCPs"
     | "processRemixPrompt"
     | "processMentionedFiles"
    | "processMentionedAgents") => boolean;
  setSessionData: (key: string, value: any) => void;
  updateProcessingConfig: (config: any) => void;
};
```

Defined in: packages/codeboltjs/src/modules/user-message-utilities.ts:11

User message utilities for accessing current user message and context

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="clear"></a> `clear()` | () => `void` | Clear current user message | [packages/codeboltjs/src/modules/user-message-utilities.ts:133](packages/codeboltjs/src/modules/user-message-utilities.ts#L133) |
| <a id="getcurrent"></a> `getCurrent()` | () => `FlatUserMessage` \| `undefined` | Get the current user message object | [packages/codeboltjs/src/modules/user-message-utilities.ts:16](packages/codeboltjs/src/modules/user-message-utilities.ts#L16) |
| <a id="getcurrentfile"></a> `getCurrentFile()` | () => `string` \| `undefined` | Get current file path | [packages/codeboltjs/src/modules/user-message-utilities.ts:64](packages/codeboltjs/src/modules/user-message-utilities.ts#L64) |
| <a id="getmentionedagents"></a> `getMentionedAgents()` | () => `any`[] | Get mentioned agents from current message | [packages/codeboltjs/src/modules/user-message-utilities.ts:46](packages/codeboltjs/src/modules/user-message-utilities.ts#L46) |
| <a id="getmentionedfiles"></a> `getMentionedFiles()` | () => `string`[] | Get mentioned files from current message | [packages/codeboltjs/src/modules/user-message-utilities.ts:34](packages/codeboltjs/src/modules/user-message-utilities.ts#L34) |
| <a id="getmentionedfolders"></a> `getMentionedFolders()` | () => `string`[] | Get mentioned folders from current message | [packages/codeboltjs/src/modules/user-message-utilities.ts:40](packages/codeboltjs/src/modules/user-message-utilities.ts#L40) |
| <a id="getmentionedmcps"></a> `getMentionedMCPs()` | () => `string`[] | Get mentioned MCPs from current message | [packages/codeboltjs/src/modules/user-message-utilities.ts:28](packages/codeboltjs/src/modules/user-message-utilities.ts#L28) |
| <a id="getmessageid"></a> `getMessageId()` | () => `string` \| `undefined` | Get message ID | [packages/codeboltjs/src/modules/user-message-utilities.ts:76](packages/codeboltjs/src/modules/user-message-utilities.ts#L76) |
| <a id="getprocessingconfig"></a> `getProcessingConfig()` | () => `AgentProcessingConfig` | Get processing configuration | [packages/codeboltjs/src/modules/user-message-utilities.ts:88](packages/codeboltjs/src/modules/user-message-utilities.ts#L88) |
| <a id="getremixprompt"></a> `getRemixPrompt()` | () => `string` \| `undefined` | Get remix prompt from current message | [packages/codeboltjs/src/modules/user-message-utilities.ts:52](packages/codeboltjs/src/modules/user-message-utilities.ts#L52) |
| <a id="getselection"></a> `getSelection()` | () => `string` \| `undefined` | Get text selection from current message | [packages/codeboltjs/src/modules/user-message-utilities.ts:70](packages/codeboltjs/src/modules/user-message-utilities.ts#L70) |
| <a id="getsessiondata"></a> `getSessionData()` | (`key`: `string`) => `any` | Get session data | [packages/codeboltjs/src/modules/user-message-utilities.ts:110](packages/codeboltjs/src/modules/user-message-utilities.ts#L110) |
| <a id="gettext"></a> `getText()` | () => `string` | Get the user message text content | [packages/codeboltjs/src/modules/user-message-utilities.ts:22](packages/codeboltjs/src/modules/user-message-utilities.ts#L22) |
| <a id="getthreadid"></a> `getThreadId()` | () => `string` \| `undefined` | Get thread ID | [packages/codeboltjs/src/modules/user-message-utilities.ts:82](packages/codeboltjs/src/modules/user-message-utilities.ts#L82) |
| <a id="gettimestamp"></a> `getTimestamp()` | () => `string` \| `undefined` | Get message timestamp | [packages/codeboltjs/src/modules/user-message-utilities.ts:116](packages/codeboltjs/src/modules/user-message-utilities.ts#L116) |
| <a id="getuploadedimages"></a> `getUploadedImages()` | () => `any`[] | Get uploaded images from current message | [packages/codeboltjs/src/modules/user-message-utilities.ts:58](packages/codeboltjs/src/modules/user-message-utilities.ts#L58) |
| <a id="hasmessage"></a> `hasMessage()` | () => `boolean` | Check if there's a current message | [packages/codeboltjs/src/modules/user-message-utilities.ts:122](packages/codeboltjs/src/modules/user-message-utilities.ts#L122) |
| <a id="isprocessingenabled"></a> `isProcessingEnabled()` | (`type`: \| `"processMentionedMCPs"` \| `"processRemixPrompt"` \| `"processMentionedFiles"` \| `"processMentionedAgents"`) => `boolean` | Check if a processing type is enabled | [packages/codeboltjs/src/modules/user-message-utilities.ts:95](packages/codeboltjs/src/modules/user-message-utilities.ts#L95) |
| <a id="setsessiondata"></a> `setSessionData()` | (`key`: `string`, `value`: `any`) => `void` | Set session data | [packages/codeboltjs/src/modules/user-message-utilities.ts:103](packages/codeboltjs/src/modules/user-message-utilities.ts#L103) |
| <a id="updateprocessingconfig"></a> `updateProcessingConfig()` | (`config`: `any`) => `void` | Update processing configuration | [packages/codeboltjs/src/modules/user-message-utilities.ts:128](packages/codeboltjs/src/modules/user-message-utilities.ts#L128) |
