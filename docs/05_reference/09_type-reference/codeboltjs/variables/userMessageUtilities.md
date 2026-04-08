---
title: userMessageUtilities
---

[**@codebolt/codeboltjs**](../index.md)

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
| <a id="clear"></a> `clear()` | () => `void` | Clear current user message | packages/codeboltjs/src/modules/user-message-utilities.ts:133 |
| <a id="getcurrent"></a> `getCurrent()` | () => `FlatUserMessage` \| `undefined` | Get the current user message object | packages/codeboltjs/src/modules/user-message-utilities.ts:16 |
| <a id="getcurrentfile"></a> `getCurrentFile()` | () => `string` \| `undefined` | Get current file path | packages/codeboltjs/src/modules/user-message-utilities.ts:64 |
| <a id="getmentionedagents"></a> `getMentionedAgents()` | () => `any`[] | Get mentioned agents from current message | packages/codeboltjs/src/modules/user-message-utilities.ts:46 |
| <a id="getmentionedfiles"></a> `getMentionedFiles()` | () => `string`[] | Get mentioned files from current message | packages/codeboltjs/src/modules/user-message-utilities.ts:34 |
| <a id="getmentionedfolders"></a> `getMentionedFolders()` | () => `string`[] | Get mentioned folders from current message | packages/codeboltjs/src/modules/user-message-utilities.ts:40 |
| <a id="getmentionedmcps"></a> `getMentionedMCPs()` | () => `string`[] | Get mentioned MCPs from current message | packages/codeboltjs/src/modules/user-message-utilities.ts:28 |
| <a id="getmessageid"></a> `getMessageId()` | () => `string` \| `undefined` | Get message ID | packages/codeboltjs/src/modules/user-message-utilities.ts:76 |
| <a id="getprocessingconfig"></a> `getProcessingConfig()` | () => `AgentProcessingConfig` | Get processing configuration | packages/codeboltjs/src/modules/user-message-utilities.ts:88 |
| <a id="getremixprompt"></a> `getRemixPrompt()` | () => `string` \| `undefined` | Get remix prompt from current message | packages/codeboltjs/src/modules/user-message-utilities.ts:52 |
| <a id="getselection"></a> `getSelection()` | () => `string` \| `undefined` | Get text selection from current message | packages/codeboltjs/src/modules/user-message-utilities.ts:70 |
| <a id="getsessiondata"></a> `getSessionData()` | (`key`: `string`) => `any` | Get session data | packages/codeboltjs/src/modules/user-message-utilities.ts:110 |
| <a id="gettext"></a> `getText()` | () => `string` | Get the user message text content | packages/codeboltjs/src/modules/user-message-utilities.ts:22 |
| <a id="getthreadid"></a> `getThreadId()` | () => `string` \| `undefined` | Get thread ID | packages/codeboltjs/src/modules/user-message-utilities.ts:82 |
| <a id="gettimestamp"></a> `getTimestamp()` | () => `string` \| `undefined` | Get message timestamp | packages/codeboltjs/src/modules/user-message-utilities.ts:116 |
| <a id="getuploadedimages"></a> `getUploadedImages()` | () => `any`[] | Get uploaded images from current message | packages/codeboltjs/src/modules/user-message-utilities.ts:58 |
| <a id="hasmessage"></a> `hasMessage()` | () => `boolean` | Check if there's a current message | packages/codeboltjs/src/modules/user-message-utilities.ts:122 |
| <a id="isprocessingenabled"></a> `isProcessingEnabled()` | (`type`: \| `"processMentionedMCPs"` \| `"processRemixPrompt"` \| `"processMentionedFiles"` \| `"processMentionedAgents"`) => `boolean` | Check if a processing type is enabled | packages/codeboltjs/src/modules/user-message-utilities.ts:95 |
| <a id="setsessiondata"></a> `setSessionData()` | (`key`: `string`, `value`: `any`) => `void` | Set session data | packages/codeboltjs/src/modules/user-message-utilities.ts:103 |
| <a id="updateprocessingconfig"></a> `updateProcessingConfig()` | (`config`: `any`) => `void` | Update processing configuration | packages/codeboltjs/src/modules/user-message-utilities.ts:128 |
