---
title: MailApi
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: MailApi

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:28

Provides API methods for the inter-agent mail system.

The mail system enables structured, asynchronous communication between agents through
threads, messages, and inboxes. It also supports resource reservations to coordinate
concurrent access to shared resources across agents.

## Constructors

### Constructor

```ts
new MailApi(http: HttpClient): MailApi;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:29

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`MailApi`

## Methods

### acknowledgeMessage()

```ts
acknowledgeMessage(messageId: string): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:69

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `messageId` | `string` |

#### Returns

`Promise`\<`void`\>

***

### checkReservationConflicts()

```ts
checkReservationConflicts(data: CheckReservationConflictsRequest): Promise<{
  hasConflict: boolean;
}>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:125

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CheckReservationConflictsRequest` |

#### Returns

`Promise`\<\{
  `hasConflict`: `boolean`;
\}\>

***

### createAgent()

```ts
createAgent(data: CreateMailAgentRequest): Promise<MailAgent>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:95

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateMailAgentRequest` |

#### Returns

`Promise`\<`MailAgent`\>

***

### createReservation()

```ts
createReservation(data: CreateReservationRequest): Promise<MailReservation>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:109

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateReservationRequest` |

#### Returns

`Promise`\<`MailReservation`\>

***

### createThread()

```ts
createThread(data: CreateMailThreadRequest): Promise<MailThread>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:37

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateMailThreadRequest` |

#### Returns

`Promise`\<`MailThread`\>

***

### createThreadMessage()

```ts
createThreadMessage(threadId: string, data: SendMailMessageRequest): Promise<MailMessage>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:59

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `threadId` | `string` |
| `data` | `SendMailMessageRequest` |

#### Returns

`Promise`\<`MailMessage`\>

***

### deleteThread()

```ts
deleteThread(threadId: string): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:49

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `threadId` | `string` |

#### Returns

`Promise`\<`void`\>

***

### forceReservation()

```ts
forceReservation(data: ForceReservationRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:117

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `ForceReservationRequest` |

#### Returns

`Promise`\<`void`\>

***

### getAgent()

```ts
getAgent(agentId: string): Promise<MailAgent>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:99

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `agentId` | `string` |

#### Returns

`Promise`\<`MailAgent`\>

***

### getAgentInbox()

```ts
getAgentInbox(agentId: string): Promise<MailMessage[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:103

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `agentId` | `string` |

#### Returns

`Promise`\<`MailMessage`[]\>

***

### getAgents()

```ts
getAgents(): Promise<MailAgent[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:91

#### Returns

`Promise`\<`MailAgent`[]\>

***

### getReservations()

```ts
getReservations(params?: Record<string, unknown>): Promise<MailReservation[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:121

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`MailReservation`[]\>

***

### getThread()

```ts
getThread(threadId: string): Promise<MailThread>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:41

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `threadId` | `string` |

#### Returns

`Promise`\<`MailThread`\>

***

### getThreadMessages()

```ts
getThreadMessages(threadId: string): Promise<MailMessage[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:55

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `threadId` | `string` |

#### Returns

`Promise`\<`MailMessage`[]\>

***

### getThreads()

```ts
getThreads(params?: MailThreadListParams): Promise<MailThread[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:33

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `MailThreadListParams` |

#### Returns

`Promise`\<`MailThread`[]\>

***

### markMessageRead()

```ts
markMessageRead(messageId: string): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:65

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `messageId` | `string` |

#### Returns

`Promise`\<`void`\>

***

### releaseReservation()

```ts
releaseReservation(data: ReleaseReservationRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:113

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `ReleaseReservationRequest` |

#### Returns

`Promise`\<`void`\>

***

### replyToMessage()

```ts
replyToMessage(data: ReplyToMessageRequest): Promise<MailMessage>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:73

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `ReplyToMessageRequest` |

#### Returns

`Promise`\<`MailMessage`\>

***

### searchMessages()

```ts
searchMessages(params?: MailSearchParams): Promise<MailMessage[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:81

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `MailSearchParams` |

#### Returns

`Promise`\<`MailMessage`[]\>

***

### send()

```ts
send(data: SendMailMessageRequest): Promise<MailMessage>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:77

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `SendMailMessageRequest` |

#### Returns

`Promise`\<`MailMessage`\>

***

### summarizeThread()

```ts
summarizeThread(threadId: string): Promise<MailThreadSummary>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:85

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `threadId` | `string` |

#### Returns

`Promise`\<`MailThreadSummary`\>

***

### updateThread()

```ts
updateThread(threadId: string, data: UpdateMailThreadRequest): Promise<MailThread>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/mail.api.ts:45

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `threadId` | `string` |
| `data` | `UpdateMailThreadRequest` |

#### Returns

`Promise`\<`MailThread`\>
