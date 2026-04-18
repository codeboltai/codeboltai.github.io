---
title: MailApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: MailApi

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:28

Provides API methods for the inter-agent mail system.

The mail system enables structured, asynchronous communication between agents through
threads, messages, and inboxes. It also supports resource reservations to coordinate
concurrent access to shared resources across agents.

## Constructors

### Constructor

```ts
new MailApi(http: HttpClient): MailApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:29

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

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:197

Acknowledges receipt and processing of a message.

Signals that the receiving agent has processed the message content and taken
any required action. This is distinct from marking as read and indicates explicit
acknowledgment of the message's intent.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `messageId` | `string` | The unique identifier of the message to acknowledge |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the acknowledgment has been recorded

***

### checkReservationConflicts()

```ts
checkReservationConflicts(data: CheckReservationConflictsRequest): Promise<{
  hasConflict: boolean;
}>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:451

Checks whether a proposed reservation would conflict with existing ones.

Validates that a resource is available before attempting to reserve it. Use this to
implement optimistic locking patterns where agents check availability before acting.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CheckReservationConflictsRequest` | The conflict check payload |

#### Returns

`Promise`\<\{
  `hasConflict`: `boolean`;
\}\>

A promise that resolves to an object indicating whether a conflict exists

#### Example

```typescript
const { hasConflict } = await client.mail.checkReservationConflicts({
  resourceId: 'file:src/main.ts',
});
if (!hasConflict) {
  await client.mail.createReservation({ resourceId: 'file:src/main.ts', agentId: 'my-agent' });
}
```

***

### createAgent()

```ts
createAgent(data: CreateMailAgentRequest): Promise<MailAgent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:321

Registers a new agent in the mail system.

Creates a mail identity for an agent, enabling it to send messages, receive mail in
its inbox, and participate in threaded conversations with other agents.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateMailAgentRequest` | The agent registration payload |

#### Returns

`Promise`\<`MailAgent`\>

A promise that resolves to the newly registered mail agent

#### Example

```typescript
const agent = await client.mail.createAgent({ name: 'build-monitor' });
```

***

### createReservation()

```ts
createReservation(data: CreateReservationRequest): Promise<MailReservation>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:379

Creates a resource reservation for an agent.

Reserves exclusive access to a shared resource (e.g., a file, tool, or service) for
the requesting agent. Other agents can check for conflicts before attempting to access
the same resource.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateReservationRequest` | The reservation request payload |

#### Returns

`Promise`\<`MailReservation`\>

A promise that resolves to the created reservation

#### Example

```typescript
const reservation = await client.mail.createReservation({
  resourceId: 'file:src/main.ts',
  agentId: 'editor-agent',
});
```

***

### createThread()

```ts
createThread(data: CreateMailThreadRequest): Promise<MailThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:72

Creates a new mail thread for agent-to-agent communication.

Initiates a new conversation thread that messages can be posted to. Threads provide
a structured way to organize multi-message exchanges between agents on a specific topic.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateMailThreadRequest` | The thread creation payload |

#### Returns

`Promise`\<`MailThread`\>

A promise that resolves to the newly created mail thread

#### Example

```typescript
const thread = await client.mail.createThread({
  subject: 'Code review for auth module',
  participants: ['reviewer-agent', 'dev-agent'],
});
```

***

### createThreadMessage()

```ts
createThreadMessage(threadId: string, data: SendMailMessageRequest): Promise<MailMessage>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:168

Adds a new message to an existing mail thread.

Posts a message to the specified thread, making it visible to all thread participants.
This is the primary way agents communicate within an established conversation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to post to |
| `data` | `SendMailMessageRequest` | The message payload including body and optional metadata |

#### Returns

`Promise`\<`MailMessage`\>

A promise that resolves to the newly created message

#### Example

```typescript
const message = await client.mail.createThreadMessage('thread-abc-123', {
  body: 'Review complete. Found 3 issues.',
  sender: 'reviewer-agent',
});
```

***

### deleteThread()

```ts
deleteThread(threadId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:125

Permanently deletes a mail thread and all its messages.

Removes the thread and its entire message history. This action cannot be undone.
Consider archiving threads instead if you may need to reference them later.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the thread has been deleted

***

### forceReservation()

```ts
forceReservation(data: ForceReservationRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:408

Force-releases a reservation, overriding the owning agent's hold.

Forcefully frees a resource reservation regardless of the current owner. Use this as
an administrative override when an agent has become unresponsive or the reservation
is stale.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ForceReservationRequest` | The force-release payload |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the reservation has been forcefully released

***

### getAgent()

```ts
getAgent(agentId: string): Promise<MailAgent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:334

Retrieves a specific mail agent by its unique identifier.

Returns the agent's registration details including name, capabilities, and
configuration metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentId` | `string` | The unique identifier of the agent to retrieve |

#### Returns

`Promise`\<`MailAgent`\>

A promise that resolves to the mail agent details

***

### getAgentInbox()

```ts
getAgentInbox(agentId: string): Promise<MailMessage[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:353

Retrieves the inbox messages for a specific agent.

Returns all unread and pending messages directed to the specified agent. This is the
primary way an agent checks for new incoming communications.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentId` | `string` | The unique identifier of the agent whose inbox to fetch |

#### Returns

`Promise`\<`MailMessage`[]\>

A promise that resolves to an array of inbox messages

#### Example

```typescript
const inbox = await client.mail.getAgentInbox('reviewer-agent');
console.log(`${inbox.length} messages waiting`);
```

***

### getAgents()

```ts
getAgents(): Promise<MailAgent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:302

Lists all registered mail agents in the system.

Returns the complete list of agents that are registered to send and receive mail.
Each agent has a unique identity and inbox for receiving messages.

#### Returns

`Promise`\<`MailAgent`[]\>

A promise that resolves to an array of mail agent registrations

#### Example

```typescript
const agents = await client.mail.getAgents();
console.log(`${agents.length} agents registered`);
```

***

### getReservations()

```ts
getReservations(params?: Record<string, unknown>): Promise<MailReservation[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:427

Lists all currently active resource reservations.

Returns all reservations that have not been released, providing visibility into which
resources are currently claimed by which agents.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering reservations |

#### Returns

`Promise`\<`MailReservation`[]\>

A promise that resolves to an array of active reservations

#### Example

```typescript
const reservations = await client.mail.getReservations();
reservations.forEach(r => console.log(`${r.resourceId} held by ${r.agentId}`));
```

***

### getThread()

```ts
getThread(threadId: string): Promise<MailThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:91

Retrieves a specific mail thread by its unique identifier.

Returns the full thread metadata including subject, participants, timestamps, and status.
Use [getThreadMessages](#getthreadmessages) to fetch the actual messages within the thread.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to retrieve |

#### Returns

`Promise`\<`MailThread`\>

A promise that resolves to the mail thread details

#### Example

```typescript
const thread = await client.mail.getThread('thread-abc-123');
console.log(`Thread: ${thread.subject}, status: ${thread.status}`);
```

***

### getThreadMessages()

```ts
getThreadMessages(threadId: string): Promise<MailMessage[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:146

Retrieves all messages within a specific mail thread.

Returns the complete ordered list of messages in a thread, useful for displaying
the full conversation history between agents.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread whose messages to fetch |

#### Returns

`Promise`\<`MailMessage`[]\>

A promise that resolves to an array of messages in chronological order

#### Example

```typescript
const messages = await client.mail.getThreadMessages('thread-abc-123');
messages.forEach(msg => console.log(`${msg.sender}: ${msg.body}`));
```

***

### getThreads()

```ts
getThreads(params?: MailThreadListParams): Promise<MailThread[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:49

Lists all mail threads with optional filtering and pagination.

Returns conversation threads that group related messages together. Threads can be
filtered by participants, status, or other criteria using the params argument.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `MailThreadListParams` | Optional query parameters for filtering and pagination |

#### Returns

`Promise`\<`MailThread`[]\>

A promise that resolves to an array of mail threads

#### Example

```typescript
const threads = await client.mail.getThreads({ status: 'open' });
```

***

### markMessageRead()

```ts
markMessageRead(messageId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:183

Marks a specific message as read by the current agent.

Updates the read status of a message, which can be used to track which messages
have been processed by each agent in a conversation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `messageId` | `string` | The unique identifier of the message to mark as read |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the read status has been updated

***

### releaseReservation()

```ts
releaseReservation(data: ReleaseReservationRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:393

Releases a previously held resource reservation.

Frees the reserved resource so other agents can access it. Agents should release
reservations promptly when they no longer need exclusive access.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ReleaseReservationRequest` | The release payload identifying the reservation to free |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the reservation has been released

***

### replyToMessage()

```ts
replyToMessage(data: ReplyToMessageRequest): Promise<MailMessage>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:221

Sends a reply to an existing message.

Creates a response that is linked to a specific parent message, maintaining the
conversation thread structure. The reply is posted to the same thread as the
original message.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ReplyToMessageRequest` | The reply payload including the parent message reference and body |

#### Returns

`Promise`\<`MailMessage`\>

A promise that resolves to the newly created reply message

#### Example

```typescript
const reply = await client.mail.replyToMessage({
  messageId: 'msg-456',
  body: 'Acknowledged. Will fix the issues.',
});
```

***

### searchMessages()

```ts
searchMessages(params?: MailSearchParams): Promise<MailMessage[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:263

Searches messages across all threads using the provided query parameters.

Performs a full-text or filtered search across the mail system, returning messages
that match the specified criteria such as keywords, sender, date range, or thread.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `MailSearchParams` | Search query parameters for filtering results |

#### Returns

`Promise`\<`MailMessage`[]\>

A promise that resolves to an array of matching messages

#### Example

```typescript
const results = await client.mail.searchMessages({ query: 'authentication bug' });
```

***

### send()

```ts
send(data: SendMailMessageRequest): Promise<MailMessage>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:244

Sends a new standalone mail message.

Delivers a message directly without requiring an existing thread. This is useful for
one-off notifications or messages that do not belong to an ongoing conversation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `SendMailMessageRequest` | The message payload |

#### Returns

`Promise`\<`MailMessage`\>

A promise that resolves to the sent message

#### Example

```typescript
const msg = await client.mail.send({
  body: 'Build completed successfully.',
  recipient: 'dev-agent',
});
```

***

### summarizeThread()

```ts
summarizeThread(threadId: string): Promise<MailThreadSummary>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:282

Generates a summarized view of a mail thread's conversation.

Produces a concise summary of the thread's messages, useful for quickly understanding
the key points of a long conversation without reading every message.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to summarize |

#### Returns

`Promise`\<`MailThreadSummary`\>

A promise that resolves to the thread summary

#### Example

```typescript
const summary = await client.mail.summarizeThread('thread-abc-123');
console.log(summary.text);
```

***

### updateThread()

```ts
updateThread(threadId: string, data: UpdateMailThreadRequest): Promise<MailThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mail.api.ts:112

Partially updates a mail thread's metadata.

Applies a partial update (PATCH) to the thread, allowing you to modify specific fields
such as the subject, status, or participants without affecting other properties.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to update |
| `data` | `UpdateMailThreadRequest` | The fields to patch on the thread |

#### Returns

`Promise`\<`MailThread`\>

A promise that resolves to the updated mail thread

#### Example

```typescript
const updated = await client.mail.updateThread('thread-abc-123', {
  status: 'closed',
});
```
