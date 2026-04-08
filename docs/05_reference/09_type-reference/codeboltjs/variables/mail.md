---
title: mail
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: mail

```ts
const mail: {
  acknowledge: (params: IAcknowledgeParams) => Promise<IAcknowledgeResponse>;
  archiveThread: (params: IArchiveThreadParams) => Promise<IArchiveThreadResponse>;
  checkConflicts: (params: ICheckConflictsParams) => Promise<ICheckConflictsResponse>;
  createThread: (params: ICreateThreadParams) => Promise<ICreateThreadResponse>;
  fetchInbox: (params: IFetchInboxParams) => Promise<IFetchInboxResponse>;
  findOrCreateThread: (params: IFindOrCreateThreadParams) => Promise<IFindOrCreateThreadResponse>;
  forceReserveFiles: (params: IForceReserveFilesParams) => Promise<IForceReserveFilesResponse>;
  getAgent: (params: IGetAgentParams) => Promise<IGetAgentResponse>;
  getMessage: (params: IGetMessageParams) => Promise<IGetMessageResponse>;
  getMessages: (params: IGetMessagesParams) => Promise<IGetMessagesResponse>;
  getThread: (params: IGetThreadParams) => Promise<IGetThreadResponse>;
  listAgents: () => Promise<IListAgentsResponse>;
  listReservations: (params: IListReservationsParams) => Promise<IListReservationsResponse>;
  listThreads: (params: IListThreadsParams) => Promise<IListThreadsResponse>;
  markRead: (params: IMarkReadParams) => Promise<IMarkReadResponse>;
  registerAgent: (params: IRegisterAgentParams) => Promise<IRegisterAgentResponse>;
  releaseFiles: (params: IReleaseFilesParams) => Promise<IReleaseFilesResponse>;
  replyMessage: (params: IReplyMessageParams) => Promise<IReplyMessageResponse>;
  reserveFiles: (params: IReserveFilesParams) => Promise<IReserveFilesResponse>;
  search: (params: ISearchParams) => Promise<ISearchResponse>;
  sendMessage: (params: ISendMessageParams) => Promise<ISendMessageResponse>;
  summarizeThread: (params: ISummarizeThreadParams) => Promise<ISummarizeThreadResponse>;
  updateThreadStatus: (params: IUpdateThreadStatusParams) => Promise<IUpdateThreadStatusResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/mail.ts:68

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="acknowledge"></a> `acknowledge()` | (`params`: `IAcknowledgeParams`) => `Promise`\<`IAcknowledgeResponse`\> | [packages/codeboltjs/src/modules/mail.ts:226](packages/codeboltjs/src/modules/mail.ts#L226) |
| <a id="archivethread"></a> `archiveThread()` | (`params`: `IArchiveThreadParams`) => `Promise`\<`IArchiveThreadResponse`\> | [packages/codeboltjs/src/modules/mail.ts:152](packages/codeboltjs/src/modules/mail.ts#L152) |
| <a id="checkconflicts"></a> `checkConflicts()` | (`params`: `ICheckConflictsParams`) => `Promise`\<`ICheckConflictsResponse`\> | [packages/codeboltjs/src/modules/mail.ts:297](packages/codeboltjs/src/modules/mail.ts#L297) |
| <a id="createthread"></a> `createThread()` | (`params`: `ICreateThreadParams`) => `Promise`\<`ICreateThreadResponse`\> | [packages/codeboltjs/src/modules/mail.ts:100](packages/codeboltjs/src/modules/mail.ts#L100) |
| <a id="fetchinbox"></a> `fetchInbox()` | (`params`: `IFetchInboxParams`) => `Promise`\<`IFetchInboxResponse`\> | [packages/codeboltjs/src/modules/mail.ts:163](packages/codeboltjs/src/modules/mail.ts#L163) |
| <a id="findorcreatethread"></a> `findOrCreateThread()` | (`params`: `IFindOrCreateThreadParams`) => `Promise`\<`IFindOrCreateThreadResponse`\> | [packages/codeboltjs/src/modules/mail.ts:111](packages/codeboltjs/src/modules/mail.ts#L111) |
| <a id="forcereservefiles"></a> `forceReserveFiles()` | (`params`: `IForceReserveFilesParams`) => `Promise`\<`IForceReserveFilesResponse`\> | [packages/codeboltjs/src/modules/mail.ts:277](packages/codeboltjs/src/modules/mail.ts#L277) |
| <a id="getagent"></a> `getAgent()` | (`params`: `IGetAgentParams`) => `Promise`\<`IGetAgentResponse`\> | [packages/codeboltjs/src/modules/mail.ts:89](packages/codeboltjs/src/modules/mail.ts#L89) |
| <a id="getmessage"></a> `getMessage()` | (`params`: `IGetMessageParams`) => `Promise`\<`IGetMessageResponse`\> | [packages/codeboltjs/src/modules/mail.ts:196](packages/codeboltjs/src/modules/mail.ts#L196) |
| <a id="getmessages"></a> `getMessages()` | (`params`: `IGetMessagesParams`) => `Promise`\<`IGetMessagesResponse`\> | [packages/codeboltjs/src/modules/mail.ts:206](packages/codeboltjs/src/modules/mail.ts#L206) |
| <a id="getthread"></a> `getThread()` | (`params`: `IGetThreadParams`) => `Promise`\<`IGetThreadResponse`\> | [packages/codeboltjs/src/modules/mail.ts:132](packages/codeboltjs/src/modules/mail.ts#L132) |
| <a id="listagents"></a> `listAgents()` | () => `Promise`\<`IListAgentsResponse`\> | [packages/codeboltjs/src/modules/mail.ts:80](packages/codeboltjs/src/modules/mail.ts#L80) |
| <a id="listreservations"></a> `listReservations()` | (`params`: `IListReservationsParams`) => `Promise`\<`IListReservationsResponse`\> | [packages/codeboltjs/src/modules/mail.ts:287](packages/codeboltjs/src/modules/mail.ts#L287) |
| <a id="listthreads"></a> `listThreads()` | (`params`: `IListThreadsParams`) => `Promise`\<`IListThreadsResponse`\> | [packages/codeboltjs/src/modules/mail.ts:122](packages/codeboltjs/src/modules/mail.ts#L122) |
| <a id="markread"></a> `markRead()` | (`params`: `IMarkReadParams`) => `Promise`\<`IMarkReadResponse`\> | [packages/codeboltjs/src/modules/mail.ts:216](packages/codeboltjs/src/modules/mail.ts#L216) |
| <a id="registeragent"></a> `registerAgent()` | (`params`: `IRegisterAgentParams`) => `Promise`\<`IRegisterAgentResponse`\> | [packages/codeboltjs/src/modules/mail.ts:70](packages/codeboltjs/src/modules/mail.ts#L70) |
| <a id="releasefiles"></a> `releaseFiles()` | (`params`: `IReleaseFilesParams`) => `Promise`\<`IReleaseFilesResponse`\> | [packages/codeboltjs/src/modules/mail.ts:267](packages/codeboltjs/src/modules/mail.ts#L267) |
| <a id="replymessage"></a> `replyMessage()` | (`params`: `IReplyMessageParams`) => `Promise`\<`IReplyMessageResponse`\> | [packages/codeboltjs/src/modules/mail.ts:186](packages/codeboltjs/src/modules/mail.ts#L186) |
| <a id="reservefiles"></a> `reserveFiles()` | (`params`: `IReserveFilesParams`) => `Promise`\<`IReserveFilesResponse`\> | [packages/codeboltjs/src/modules/mail.ts:257](packages/codeboltjs/src/modules/mail.ts#L257) |
| <a id="search"></a> `search()` | (`params`: `ISearchParams`) => `Promise`\<`ISearchResponse`\> | [packages/codeboltjs/src/modules/mail.ts:236](packages/codeboltjs/src/modules/mail.ts#L236) |
| <a id="sendmessage"></a> `sendMessage()` | (`params`: `ISendMessageParams`) => `Promise`\<`ISendMessageResponse`\> | [packages/codeboltjs/src/modules/mail.ts:173](packages/codeboltjs/src/modules/mail.ts#L173) |
| <a id="summarizethread"></a> `summarizeThread()` | (`params`: `ISummarizeThreadParams`) => `Promise`\<`ISummarizeThreadResponse`\> | [packages/codeboltjs/src/modules/mail.ts:246](packages/codeboltjs/src/modules/mail.ts#L246) |
| <a id="updatethreadstatus"></a> `updateThreadStatus()` | (`params`: `IUpdateThreadStatusParams`) => `Promise`\<`IUpdateThreadStatusResponse`\> | [packages/codeboltjs/src/modules/mail.ts:142](packages/codeboltjs/src/modules/mail.ts#L142) |
