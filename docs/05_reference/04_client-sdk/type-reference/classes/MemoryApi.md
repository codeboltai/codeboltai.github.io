---
title: MemoryApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: MemoryApi

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:31

Provides API methods for managing memory threads across multiple storage formats.

The memory system supports four distinct thread types: generic, markdown, JSON, context,
and episodic. Each type is optimized for different use cases -- from free-form text
(markdown) to structured data (JSON) to conversation context and temporal event sequences
(episodic). Threads can be archived/unarchived for lifecycle management.

## Constructors

### Constructor

```ts
new MemoryApi(http: HttpClient): MemoryApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:32

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`MemoryApi`

## Methods

### addEpisodicEvents()

```ts
addEpisodicEvents(id: string, data: AddEpisodicEventsRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:512

Appends new events to an episodic memory.

Adds one or more event records to the episodic memory's timeline. Events capture
discrete actions, observations, or state changes that occurred during an operation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the episodic memory |
| `data` | `AddEpisodicEventsRequest` | The events to add |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the events have been added

#### Example

```typescript
await client.memory.addEpisodicEvents('episodic-1', {
  events: [
    { type: 'action', description: 'Ran tests', timestamp: Date.now() },
    { type: 'observation', description: '3 tests failed', timestamp: Date.now() },
  ],
});
```

***

### archiveContextThread()

```ts
archiveContextThread(threadId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:386

Archives a context thread to remove it from active listings.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the context thread to archive |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the thread has been archived

***

### archiveEpisodicMemory()

```ts
archiveEpisodicMemory(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:580

Archives an episodic memory to remove it from active listings.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the episodic memory to archive |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the memory has been archived

***

### archiveJsonThread()

```ts
archiveJsonThread(threadId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:304

Archives a JSON thread to remove it from active listings.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the JSON thread to archive |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the thread has been archived

***

### archiveMarkdownThread()

```ts
archiveMarkdownThread(threadId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:202

Archives a markdown thread to remove it from active listings.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the markdown thread to archive |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the thread has been archived

***

### archiveThread()

```ts
archiveThread(threadId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:107

Archives a generic memory thread to remove it from active listings.

Moves the thread to an archived state where it is preserved but hidden from default
queries. Archived threads can be restored later.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to archive |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the thread has been archived

***

### createContextThread()

```ts
createContextThread(data: CreateContextThreadRequest): Promise<MemoryThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:338

Creates a new context memory thread.

Initializes a thread designed to capture and store conversational context. Context
threads preserve the state and knowledge gathered during chat interactions for later
recall and summarization.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateContextThreadRequest` | The context thread creation payload |

#### Returns

`Promise`\<`MemoryThread`\>

A promise that resolves to the newly created context thread

#### Example

```typescript
const thread = await client.memory.createContextThread({
  name: 'debugging-session-context',
});
```

***

### createEpisodicMemory()

```ts
createEpisodicMemory(data: CreateEpisodicMemoryRequest): Promise<MemoryThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:451

Creates a new episodic memory for tracking temporal events and experiences.

Episodic memories store sequences of events that occurred during agent operations,
similar to how human episodic memory records experiences. They are useful for
learning from past actions and debugging agent behavior.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateEpisodicMemoryRequest` | The episodic memory creation payload |

#### Returns

`Promise`\<`MemoryThread`\>

A promise that resolves to the newly created episodic memory thread

#### Example

```typescript
const memory = await client.memory.createEpisodicMemory({
  name: 'deployment-2024-01',
});
```

***

### createJsonThread()

```ts
createJsonThread(data: CreateJsonThreadRequest): Promise<MemoryThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:235

Creates a new JSON-formatted memory thread.

Initializes a thread optimized for storing structured JSON data. JSON threads are
ideal for configuration, structured records, and data that needs programmatic access.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateJsonThreadRequest` | The JSON thread creation payload |

#### Returns

`Promise`\<`MemoryThread`\>

A promise that resolves to the newly created JSON thread

#### Example

```typescript
const thread = await client.memory.createJsonThread({
  name: 'agent-config',
});
```

***

### createMarkdownThread()

```ts
createMarkdownThread(data: CreateMarkdownThreadRequest): Promise<MemoryThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:132

Creates a new markdown-formatted memory thread.

Initializes a thread optimized for storing and rendering markdown content. Markdown
threads are ideal for notes, documentation, and free-form text with formatting.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateMarkdownThreadRequest` | The markdown thread creation payload |

#### Returns

`Promise`\<`MemoryThread`\>

A promise that resolves to the newly created markdown thread

#### Example

```typescript
const thread = await client.memory.createMarkdownThread({
  name: 'meeting-notes',
  content: '# Meeting Notes\n\n- Discussed architecture changes',
});
```

***

### createThread()

```ts
createThread(data: CreateMemoryThreadRequest): Promise<MemoryThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:51

Creates a new generic memory thread.

Initializes a memory thread that can store arbitrary content. Generic threads are the
base type from which specialized thread types (markdown, JSON, context) derive.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateMemoryThreadRequest` | The thread creation payload |

#### Returns

`Promise`\<`MemoryThread`\>

A promise that resolves to the newly created memory thread

#### Example

```typescript
const thread = await client.memory.createThread({ name: 'project-notes' });
```

***

### getContextThread()

```ts
getContextThread(threadId: string): Promise<MemoryThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:362

Retrieves a specific context thread by its unique identifier.

Returns the full context thread including captured conversation data and metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the context thread to retrieve |

#### Returns

`Promise`\<`MemoryThread`\>

A promise that resolves to the context memory thread

***

### getEpisodicAgents()

```ts
getEpisodicAgents(id: string): Promise<string[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:570

Retrieves the distinct agents that have contributed events to an episodic memory.

Returns the unique set of agent identifiers that recorded events in this memory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the episodic memory |

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of agent identifier strings

***

### getEpisodicEvents()

```ts
getEpisodicEvents(id: string, params?: EpisodicEventsParams): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:533

Retrieves events from an episodic memory with optional filtering.

Returns the sequence of events stored in the episodic memory, optionally filtered
by event type, date range, or agent.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the episodic memory |
| `params?` | `EpisodicEventsParams` | Optional parameters to filter events |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the filtered list of events

#### Example

```typescript
const events = await client.memory.getEpisodicEvents('episodic-1', {
  eventType: 'action',
});
```

***

### getEpisodicEventTypes()

```ts
getEpisodicEventTypes(id: string): Promise<string[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:546

Retrieves the distinct event types used in an episodic memory.

Returns the unique set of event type strings present in the memory, useful for
building filter UIs or understanding the kinds of events that were recorded.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the episodic memory |

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of event type strings

***

### getEpisodicMemory()

```ts
getEpisodicMemory(id: string): Promise<MemoryThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:476

Retrieves a specific episodic memory by its unique identifier.

Returns the episodic memory metadata. Use [getEpisodicEvents](#getepisodicevents) to access
the individual events stored within the memory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the episodic memory to retrieve |

#### Returns

`Promise`\<`MemoryThread`\>

A promise that resolves to the episodic memory thread

***

### getEpisodicTags()

```ts
getEpisodicTags(id: string): Promise<string[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:558

Retrieves the distinct tags applied to events in an episodic memory.

Returns the unique set of tag strings used across all events in the memory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the episodic memory |

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of tag strings

***

### getJsonThread()

```ts
getJsonThread(threadId: string): Promise<MemoryThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:259

Retrieves a specific JSON thread by its unique identifier.

Returns the full JSON thread including its stored data payload and metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the JSON thread to retrieve |

#### Returns

`Promise`\<`MemoryThread`\>

A promise that resolves to the JSON memory thread

***

### getMarkdownThread()

```ts
getMarkdownThread(threadId: string): Promise<MemoryThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:156

Retrieves a specific markdown thread by its unique identifier.

Returns the full markdown thread including its rendered content and metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the markdown thread to retrieve |

#### Returns

`Promise`\<`MemoryThread`\>

A promise that resolves to the markdown memory thread

***

### getThread()

```ts
getThread(threadId: string): Promise<MemoryThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:81

Retrieves a specific memory thread by its unique identifier.

Returns the full thread object including metadata, content references, and status.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to retrieve |

#### Returns

`Promise`\<`MemoryThread`\>

A promise that resolves to the memory thread details

***

### listContextThreads()

```ts
listContextThreads(params?: ListMemoryThreadsParams): Promise<MemoryThread[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:350

Lists all context memory threads with optional filtering.

Returns only threads of the context type, filtered by the provided parameters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `ListMemoryThreadsParams` | Optional filtering and pagination parameters |

#### Returns

`Promise`\<`MemoryThread`[]\>

A promise that resolves to an array of context memory threads

***

### listEpisodicMemories()

```ts
listEpisodicMemories(params?: ListMemoryThreadsParams): Promise<MemoryThread[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:463

Lists all episodic memories with optional filtering.

Returns episodic memory records that match the provided criteria.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `ListMemoryThreadsParams` | Optional filtering and pagination parameters |

#### Returns

`Promise`\<`MemoryThread`[]\>

A promise that resolves to an array of episodic memory threads

***

### listJsonThreads()

```ts
listJsonThreads(params?: ListMemoryThreadsParams): Promise<MemoryThread[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:247

Lists all JSON memory threads with optional filtering.

Returns only threads of the JSON type, filtered by the provided parameters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `ListMemoryThreadsParams` | Optional filtering and pagination parameters |

#### Returns

`Promise`\<`MemoryThread`[]\>

A promise that resolves to an array of JSON memory threads

***

### listMarkdownThreads()

```ts
listMarkdownThreads(params?: ListMemoryThreadsParams): Promise<MemoryThread[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:144

Lists all markdown memory threads with optional filtering.

Returns only threads of the markdown type, filtered by the provided parameters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `ListMemoryThreadsParams` | Optional filtering and pagination parameters |

#### Returns

`Promise`\<`MemoryThread`[]\>

A promise that resolves to an array of markdown memory threads

***

### listThreads()

```ts
listThreads(params?: ListMemoryThreadsParams): Promise<MemoryThread[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:69

Lists all generic memory threads with optional filtering.

Returns memory threads that match the provided filter criteria. Use this to browse
or search through stored memory threads.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `ListMemoryThreadsParams` | Optional filtering and pagination parameters |

#### Returns

`Promise`\<`MemoryThread`[]\>

A promise that resolves to an array of memory threads

#### Example

```typescript
const threads = await client.memory.listThreads();
```

***

### saveContextFromChat()

```ts
saveContextFromChat(threadId: string, data: SaveContextFromChatRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:408

Saves context extracted from a chat conversation into a context thread.

Captures relevant information, decisions, and knowledge from an ongoing or completed
chat session and persists it in the specified context thread for future reference.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the context thread to save into |
| `data` | `SaveContextFromChatRequest` | The chat context extraction payload |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the context has been saved

#### Example

```typescript
await client.memory.saveContextFromChat('ctx-thread-1', {
  chatId: 'chat-789',
});
```

***

### summarizeContextThread()

```ts
summarizeContextThread(threadId: string, data?: SummarizeContextRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:427

Generates a summary of the context stored in a thread.

Uses LLM processing to create a concise summary of all the context captured in the
thread. Useful for creating condensed knowledge bases from lengthy conversations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the context thread to summarize |
| `data?` | `SummarizeContextRequest` | Optional summarization parameters (e.g., max length, focus topics) |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the generated summary

#### Example

```typescript
const summary = await client.memory.summarizeContextThread('ctx-thread-1');
```

***

### unarchiveEpisodicMemory()

```ts
unarchiveEpisodicMemory(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:590

Restores an archived episodic memory back to active status.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the episodic memory to unarchive |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the memory has been unarchived

***

### unarchiveJsonThread()

```ts
unarchiveJsonThread(threadId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:314

Restores an archived JSON thread back to active status.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the JSON thread to unarchive |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the thread has been unarchived

***

### unarchiveMarkdownThread()

```ts
unarchiveMarkdownThread(threadId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:212

Restores an archived markdown thread back to active status.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the markdown thread to unarchive |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the thread has been unarchived

***

### updateContextThread()

```ts
updateContextThread(threadId: string, data: UpdateContextThreadRequest): Promise<MemoryThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:376

Updates the metadata of a context thread.

Modifies thread-level properties such as name and tags without affecting the stored
conversational context.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the context thread to update |
| `data` | `UpdateContextThreadRequest` | The metadata fields to update |

#### Returns

`Promise`\<`MemoryThread`\>

A promise that resolves to the updated context thread

***

### updateEpisodicMemory()

```ts
updateEpisodicMemory(id: string, data: UpdateEpisodicMemoryRequest): Promise<MemoryThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:487

Updates the metadata of an episodic memory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the episodic memory to update |
| `data` | `UpdateEpisodicMemoryRequest` | The fields to update |

#### Returns

`Promise`\<`MemoryThread`\>

A promise that resolves to the updated episodic memory thread

***

### updateJsonThread()

```ts
updateJsonThread(threadId: string, data: UpdateJsonThreadRequest): Promise<MemoryThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:273

Updates the metadata of a JSON thread (name, tags, etc.).

Modifies thread-level properties without changing the stored JSON data.
Use [updateJsonThreadData](#updatejsonthreaddata) to change the actual data payload.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the JSON thread to update |
| `data` | `UpdateJsonThreadRequest` | The metadata fields to update |

#### Returns

`Promise`\<`MemoryThread`\>

A promise that resolves to the updated JSON thread

***

### updateJsonThreadData()

```ts
updateJsonThreadData(threadId: string, data: UpdateJsonDataRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:294

Replaces the JSON data payload of a thread.

Updates the structured data stored in the JSON thread. This is separate from metadata
updates to allow efficient data-only writes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the JSON thread |
| `data` | `UpdateJsonDataRequest` | The new JSON data to store |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the data has been updated

#### Example

```typescript
await client.memory.updateJsonThreadData('thread-456', {
  data: { version: 2, settings: { theme: 'dark' } },
});
```

***

### updateMarkdownThread()

```ts
updateMarkdownThread(threadId: string, data: UpdateMarkdownThreadRequest): Promise<MemoryThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:170

Updates the metadata of a markdown thread (name, tags, etc.).

Modifies thread-level properties without changing the markdown content itself.
Use [updateMarkdownThreadContent](#updatemarkdownthreadcontent) to change the actual markdown text.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the markdown thread to update |
| `data` | `UpdateMarkdownThreadRequest` | The metadata fields to update |

#### Returns

`Promise`\<`MemoryThread`\>

A promise that resolves to the updated markdown thread

***

### updateMarkdownThreadContent()

```ts
updateMarkdownThreadContent(threadId: string, data: UpdateMarkdownContentRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:192

Replaces the markdown content of a thread.

Updates the actual markdown text content stored in the thread. This is separate from
metadata updates to allow efficient content-only writes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the markdown thread |
| `data` | `UpdateMarkdownContentRequest` | The new markdown content |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the content has been updated

#### Example

```typescript
await client.memory.updateMarkdownThreadContent('thread-123', {
  content: '# Updated Notes\n\nNew content here.',
});
```

***

### updateThread()

```ts
updateThread(threadId: string, data: UpdateMemoryThreadRequest): Promise<MemoryThread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory.api.ts:94

Updates the metadata or content of a generic memory thread.

Modifies an existing thread's properties such as name, tags, or stored data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to update |
| `data` | `UpdateMemoryThreadRequest` | The fields to update on the thread |

#### Returns

`Promise`\<`MemoryThread`\>

A promise that resolves to the updated memory thread
