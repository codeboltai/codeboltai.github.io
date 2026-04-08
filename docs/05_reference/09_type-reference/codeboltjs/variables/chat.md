---
title: chat
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: chat

```ts
const chat: {
  askQuestion: (question: string, buttons: string[], withFeedback: boolean) => Promise<string>;
  checkForSteeringMessage: () => SteeringMessage | null;
  getChatHistory: (threadId: string) => Promise<ChatMessage>;
  onSteeringMessageReceived: () => Promise<SteeringMessage | null>;
  processFinished: () => void;
  processStarted: (onStopClicked?: (message: StopProcessMessage) => void) => ProcessControl | ProcessControlWithCleanup;
  sendConfirmationRequest: (confirmationMessage: string, buttons: string[], withFeedback: boolean) => Promise<string>;
  sendMessage: (message: string, payload?: object) => void;
  sendNotificationEvent: (notificationMessage: string, type: 
     | "browser"
     | "terminal"
     | "git"
     | "debug"
     | "planner"
     | "editor"
    | "preview") => void;
  setRequestHandler: (handler: RequestHandler) => void;
  stopProcess: () => void;
  waitforReply: (message: string) => Promise<UserMessage>;
};
```

Defined in: packages/codeboltjs/src/modules/chat.ts:40

Chat module to interact with the WebSocket server.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="askquestion"></a> `askQuestion()` | (`question`: `string`, `buttons`: `string`[], `withFeedback`: `boolean`) => `Promise`\<`string`\> | - | [packages/codeboltjs/src/modules/chat.ts:186](packages/codeboltjs/src/modules/chat.ts#L186) |
| <a id="checkforsteeringmessage"></a> `checkForSteeringMessage()` | () => `SteeringMessage` \| `null` | Checks if any steering message has been received. | [packages/codeboltjs/src/modules/chat.ts:213](packages/codeboltjs/src/modules/chat.ts#L213) |
| <a id="getchathistory"></a> `getChatHistory()` | (`threadId`: `string`) => `Promise`\<`ChatMessage`\> | Retrieves the chat history from the server. | [packages/codeboltjs/src/modules/chat.ts:45](packages/codeboltjs/src/modules/chat.ts#L45) |
| <a id="onsteeringmessagereceived"></a> `onSteeringMessageReceived()` | () => `Promise`\<`SteeringMessage` \| `null`\> | Waits for a steering message. | [packages/codeboltjs/src/modules/chat.ts:229](packages/codeboltjs/src/modules/chat.ts#L229) |
| <a id="processfinished"></a> `processFinished()` | () => `void` | Stops the ongoing process. Sends a specific message to the server to stop the process. | [packages/codeboltjs/src/modules/chat.ts:166](packages/codeboltjs/src/modules/chat.ts#L166) |
| <a id="processstarted"></a> `processStarted()` | (`onStopClicked?`: (`message`: `StopProcessMessage`) => `void`) => `ProcessControl` \| `ProcessControlWithCleanup` | Notifies the server that a process has started and sets up a listener for stopProcessClicked events. | [packages/codeboltjs/src/modules/chat.ts:115](packages/codeboltjs/src/modules/chat.ts#L115) |
| <a id="sendconfirmationrequest"></a> `sendConfirmationRequest()` | (`confirmationMessage`: `string`, `buttons`: `string`[], `withFeedback`: `boolean`) => `Promise`\<`string`\> | Sends a confirmation request to the server with two options: Yes or No. | [packages/codeboltjs/src/modules/chat.ts:175](packages/codeboltjs/src/modules/chat.ts#L175) |
| <a id="sendmessage"></a> `sendMessage()` | (`message`: `string`, `payload?`: `object`) => `void` | Sends a message through the WebSocket connection. | [packages/codeboltjs/src/modules/chat.ts:89](packages/codeboltjs/src/modules/chat.ts#L89) |
| <a id="sendnotificationevent"></a> `sendNotificationEvent()` | (`notificationMessage`: `string`, `type`: \| `"browser"` \| `"terminal"` \| `"git"` \| `"debug"` \| `"planner"` \| `"editor"` \| `"preview"`) => `void` | Sends a notification event to the server. | [packages/codeboltjs/src/modules/chat.ts:201](packages/codeboltjs/src/modules/chat.ts#L201) |
| <a id="setrequesthandler"></a> `setRequestHandler()` | (`handler`: `RequestHandler`) => `void` | Sets a global request handler for all incoming messages | [packages/codeboltjs/src/modules/chat.ts:58](packages/codeboltjs/src/modules/chat.ts#L58) |
| <a id="stopprocess"></a> `stopProcess()` | () => `void` | Stops the ongoing process. Sends a specific message to the server to stop the process. | [packages/codeboltjs/src/modules/chat.ts:157](packages/codeboltjs/src/modules/chat.ts#L157) |
| <a id="waitforreply"></a> `waitforReply()` | (`message`: `string`) => `Promise`\<`UserMessage`\> | Waits for a reply to a sent message. | [packages/codeboltjs/src/modules/chat.ts:101](packages/codeboltjs/src/modules/chat.ts#L101) |
