---
title: ChatApi
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: ChatApi

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:35

Provides methods for managing chat threads, messages, steps, and tasks in the CodeBolt runtime.

This is one of the most comprehensive APIs in the SDK, handling the full chat lifecycle
including thread creation and management, message storage, step tracking, task management,
and steering step orchestration. Threads are the primary unit of conversation between
users and agents.

## Constructors

### Constructor

```ts
new ChatApi(http: HttpClient): ChatApi;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:36

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`ChatApi`

## Methods

### activateThreadStep()

```ts
activateThreadStep(threadId: string, stepId: string): Promise<ChatThreadStep>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:376

Activates a step in a chat thread.

Marks the specified step as the currently active step, indicating
that work is in progress on this step.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |
| `stepId` | `string` | The unique identifier of the step to activate |

#### Returns

`Promise`\<`ChatThreadStep`\>

A promise that resolves to the activated ChatThreadStep

***

### addSteeringStep()

```ts
addSteeringStep(data: AddSteeringStepRequest): Promise<SteeringStep>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:553

Adds a steering step to a thread.

Creates a steering step that guides the agent's behavior during
execution, providing directional instructions or constraints.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `AddSteeringStepRequest` | The steering step creation payload |

#### Returns

`Promise`\<`SteeringStep`\>

A promise that resolves to the created SteeringStep

#### Example

```typescript
const step = await client.chat.addSteeringStep({
  threadId: 'thread-123',
  instruction: 'Focus on performance optimization'
});
```

***

### addStep()

```ts
addStep(data: AddStepRequest): Promise<ChatThreadStep>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:490

Adds a step to a thread via the add-step endpoint.

An alternative method for adding steps that accepts the thread ID
as part of the request body rather than the URL path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `AddStepRequest` | The step addition request including thread ID and step data |

#### Returns

`Promise`\<`ChatThreadStep`\>

A promise that resolves to the created ChatThreadStep

***

### addThreadStep()

```ts
addThreadStep(threadId: string, stepData: Record<string, unknown>): Promise<ChatThreadStep>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:334

Adds a step to a chat thread.

Creates a new step within the thread's step sequence, representing
a discrete unit of work or progress in the conversation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |
| `stepData` | `Record`\<`string`, `unknown`\> | The step definition including type and content |

#### Returns

`Promise`\<`ChatThreadStep`\>

A promise that resolves to the created ChatThreadStep

***

### autoUpdateThreadName()

```ts
autoUpdateThreadName(data: AutoUpdateThreadNameRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:173

Automatically generates and updates the thread name based on content.

Uses the user's message or conversation context to generate a
descriptive name for the thread, replacing any existing name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `AutoUpdateThreadNameRequest` | The auto-update request |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the name has been auto-updated

***

### clearThreadsMemory()

```ts
clearThreadsMemory(): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:264

Clears all threads from memory.

Removes all thread data from the in-memory cache, typically used
when switching projects to ensure a clean state.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the memory has been cleared

***

### completeThreadStep()

```ts
completeThreadStep(
   threadId: string, 
   stepId: string, 
data?: CompleteStepData): Promise<ChatThreadStep>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:398

Completes a step in a chat thread.

Marks the specified step as completed, optionally recording
completion details such as the outcome or output.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |
| `stepId` | `string` | The unique identifier of the step to complete |
| `data?` | `CompleteStepData` | Optional completion details |

#### Returns

`Promise`\<`ChatThreadStep`\>

A promise that resolves to the completed ChatThreadStep

#### Example

```typescript
await client.chat.completeThreadStep('thread-123', 'step-1', {
  output: 'Tests passed successfully'
});
```

***

### createRemoteTask()

```ts
createRemoteTask(data: CreateRemoteTaskRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:462

Creates a new remote task.

Registers a task that will be executed by a remote agent or service,
tracking it within the chat context.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateRemoteTaskRequest` | The remote task creation payload |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the created task data

***

### createScheduledTask()

```ts
createScheduledTask(data: CreateScheduledTaskRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:476

Creates a new scheduled task.

Registers a task that will be executed at a future time, tracked
within the chat context.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateScheduledTaskRequest` | The scheduled task creation payload |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the created task data

***

### createThread()

```ts
createThread(data: CreateChatThreadRequest): Promise<ChatThreadInfo>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:225

Creates a new chat thread.

Provisions a new thread with the specified configuration, without
the automatic lookup behavior of initiateNewThread.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateChatThreadRequest` | The thread creation payload |

#### Returns

`Promise`\<`ChatThreadInfo`\>

A promise that resolves to the newly created ChatThreadInfo

#### Example

```typescript
const thread = await client.chat.createThread({
  name: 'Code Review Discussion'
});
```

***

### deleteSteeringStep()

```ts
deleteSteeringStep(threadId: string, steeringStepId: string): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:579

Deletes a steering step from a thread.

Removes the specified steering instruction from the thread.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |
| `steeringStepId` | `string` | The unique identifier of the steering step to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the steering step has been deleted

***

### deleteTaskStep()

```ts
deleteTaskStep(threadId: string, stepId: string): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:517

Deletes a step from a thread via the task endpoint.

Removes a specific step from a thread's step sequence, accessed
through the task management API path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |
| `stepId` | `string` | The unique identifier of the step to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the step has been deleted

***

### deleteThread()

```ts
deleteThread(data: ThreadIdRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:252

Deletes a chat thread.

Permanently removes the specified thread and all its associated
messages and steps.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ThreadIdRequest` | The thread identifier |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the thread has been deleted

***

### deleteThreadStep()

```ts
deleteThreadStep(threadId: string, stepId: string): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:362

Deletes a step from a chat thread.

Removes the specified step from the thread's step sequence.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |
| `stepId` | `string` | The unique identifier of the step to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the step has been deleted

***

### getActiveThreadStep()

```ts
getActiveThreadStep(threadId: string): Promise<ChatThreadStep | null>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:424

Retrieves the currently active step for a thread.

Returns the step that is currently in progress, or null if no
step is active.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |

#### Returns

`Promise`\<`ChatThreadStep` \| `null`\>

A promise that resolves to the active ChatThreadStep or null

***

### getMessages()

```ts
getMessages(threadId: string): Promise<ChatMessage[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:307

Retrieves all messages for a specific thread.

Returns the complete message history for the given thread,
ordered chronologically.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |

#### Returns

`Promise`\<`ChatMessage`[]\>

A promise that resolves to an array of ChatMessage objects

#### Example

```typescript
const messages = await client.chat.getMessages('thread-123');
messages.forEach(m => console.log(m.role, m.content));
```

***

### getSteeringSteps()

```ts
getSteeringSteps(threadId: string): Promise<SteeringStep[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:566

Retrieves all steering steps for a thread.

Returns the list of steering instructions that have been added
to guide agent behavior in the thread.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |

#### Returns

`Promise`\<`SteeringStep`[]\>

A promise that resolves to an array of SteeringStep objects

***

### getTasks()

```ts
getTasks(): Promise<unknown[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:288

Retrieves all chat tasks.

Returns the list of tasks that have been created through the
chat system.

#### Returns

`Promise`\<`unknown`[]\>

A promise that resolves to an array of task objects

***

### getTaskSteps()

```ts
getTaskSteps(threadId: string): Promise<ChatThreadStep[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:503

Retrieves steps for a thread via the task endpoint.

Returns the step sequence for a thread, accessed through the
task management API path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |

#### Returns

`Promise`\<`ChatThreadStep`[]\>

A promise that resolves to an array of ChatThreadStep objects

***

### getThreadInitiated()

```ts
getThreadInitiated(threadId: string): Promise<{
  initiated: boolean;
}>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:320

Checks whether a thread has been initiated.

Returns a boolean indicating if the thread has gone through the
initiation process and is ready for interaction.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |

#### Returns

`Promise`\<\{
  `initiated`: `boolean`;
\}\>

A promise that resolves to an object with an `initiated` boolean flag

***

### getThreadsInfo()

```ts
getThreadsInfo(): Promise<ChatThreadInfo[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:191

Retrieves information for all chat threads.

Returns summary information for every thread in the system,
suitable for populating a thread list or sidebar.

#### Returns

`Promise`\<`ChatThreadInfo`[]\>

A promise that resolves to an array of ChatThreadInfo objects

#### Example

```typescript
const threads = await client.chat.getThreadsInfo();
threads.forEach(t => console.log(t.threadId, t.name));
```

***

### getThreadSteps()

```ts
getThreadSteps(threadId: string): Promise<ChatThreadStep[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:411

Retrieves all steps for a chat thread.

Returns the complete step sequence for the given thread, showing
the progression of work within the conversation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |

#### Returns

`Promise`\<`ChatThreadStep`[]\>

A promise that resolves to an array of ChatThreadStep objects

***

### hideThread()

```ts
hideThread(data: ThreadIdRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:85

Hides a thread from the user interface.

Removes the thread from the visible thread list without deleting it.
The thread data is preserved and can be restored later.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ThreadIdRequest` | The thread identifier |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the thread has been hidden

***

### initiateNewThread()

```ts
initiateNewThread(data: InitiateNewThreadRequest): Promise<ChatThreadInfo>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:57

Initiates a new chat thread or retrieves an existing one.

Creates a new thread if one doesn't exist for the given context,
or returns the existing thread. This is the primary entry point
for starting a conversation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `InitiateNewThreadRequest` | The thread initiation request |

#### Returns

`Promise`\<`ChatThreadInfo`\>

A promise that resolves to the ChatThreadInfo for the new or existing thread

#### Example

```typescript
const thread = await client.chat.initiateNewThread({
  threadId: 'my-thread'
});
console.log(thread.threadId, thread.status);
```

***

### initThread()

```ts
initThread(data: InitiateNewThreadRequest): Promise<ChatThreadInfo>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:238

Initializes a chat thread.

An alias for [initiateNewThread](#initiatenewthread) that creates or retrieves
a thread based on the provided parameters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `InitiateNewThreadRequest` | The thread initiation request |

#### Returns

`Promise`\<`ChatThreadInfo`\>

A promise that resolves to the ChatThreadInfo

***

### removeThread()

```ts
removeThread(data: ThreadIdRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:99

Removes a thread.

Removes the specified thread from the chat system. This is a
soft-delete that marks the thread as removed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ThreadIdRequest` | The thread identifier |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the thread has been removed

***

### setActiveThread()

```ts
setActiveThread(data: SetActiveThreadRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:71

Sets the active chat thread.

Switches the current focus to the specified thread, making it the
primary conversation context for subsequent operations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `SetActiveThreadRequest` | The active thread selection |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the active thread has been set

***

### storeMessage()

```ts
storeMessage(data: StoreMessageRequest): Promise<ChatMessage>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:449

Stores a new message in a chat thread.

Persists a message to the thread's message history, recording
who sent it and its content.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `StoreMessageRequest` | The message storage payload |

#### Returns

`Promise`\<`ChatMessage`\>

A promise that resolves to the stored ChatMessage

#### Example

```typescript
const message = await client.chat.storeMessage({
  threadId: 'thread-123',
  role: 'user',
  content: 'Please review this code'
});
```

***

### switchThread()

```ts
switchThread(data: ThreadIdRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:205

Switches to a different chat thread.

Changes the active conversation context to the specified thread,
triggering any associated UI updates.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ThreadIdRequest` | The thread identifier to switch to |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the switch is complete

***

### syncThreads()

```ts
syncThreads(): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:276

Synchronizes threads from the thread store to the chat manager.

Ensures that the in-memory chat manager is up-to-date with the
persisted thread store, resolving any inconsistencies.

#### Returns

`Promise`\<`void`\>

A promise that resolves when synchronization is complete

***

### updateSteeringStep()

```ts
updateSteeringStep(
   threadId: string, 
   steeringStepId: string, 
data: UpdateSteeringStepData): Promise<SteeringStep>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:593

Updates a steering step in a thread.

Modifies the instruction or metadata of an existing steering step.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |
| `steeringStepId` | `string` | The unique identifier of the steering step to update |
| `data` | `UpdateSteeringStepData` | The fields to update on the steering step |

#### Returns

`Promise`\<`SteeringStep`\>

A promise that resolves to the updated SteeringStep

***

### updateTask()

```ts
updateTask(data: UpdateChatTaskRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:530

Updates task information for a thread.

Modifies the task metadata or configuration associated with
a chat thread.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UpdateChatTaskRequest` | The task update payload |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the updated task data

***

### updateTaskStep()

```ts
updateTaskStep(
   threadId: string, 
   stepId: string, 
data: UpdateThreadStepData): Promise<ChatThreadStep>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:608

Updates a step in a thread via the task endpoint.

Modifies the properties of a thread step, accessed through the
task management API path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |
| `stepId` | `string` | The unique identifier of the step to update |
| `data` | `UpdateThreadStepData` | The fields to update on the step |

#### Returns

`Promise`\<`ChatThreadStep`\>

A promise that resolves to the updated ChatThreadStep

***

### updateThreadLocation()

```ts
updateThreadLocation(data: UpdateThreadLocationRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:144

Updates the location context of a chat thread.

Associates the thread with a specific file path or project location,
providing context for the conversation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UpdateThreadLocationRequest` | The location update payload |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the location has been updated

***

### updateThreadName()

```ts
updateThreadName(data: UpdateThreadNameRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:158

Updates the display name of a chat thread.

Changes the human-readable name shown in the thread list.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UpdateThreadNameRequest` | The name update payload |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the name has been updated

***

### updateThreadStatus()

```ts
updateThreadStatus(data: UpdateChatThreadStatusRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:114

Updates the status of a chat thread.

Changes the thread's status (e.g., active, paused, completed),
which affects how it is displayed and processed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UpdateChatThreadStatusRequest` | The status update payload |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the status has been updated

***

### updateThreadStep()

```ts
updateThreadStep(
   threadId: string, 
   stepId: string, 
updateData: Record<string, unknown>): Promise<ChatThreadStep>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:349

Updates a step within a chat thread.

Modifies the properties of an existing step, such as its status,
content, or metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |
| `stepId` | `string` | The unique identifier of the step to update |
| `updateData` | `Record`\<`string`, `unknown`\> | The fields to update on the step |

#### Returns

`Promise`\<`ChatThreadStep`\>

A promise that resolves to the updated ChatThreadStep

***

### updateThreadType()

```ts
updateThreadType(data: UpdateThreadTypeRequest): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/chat.api.ts:129

Updates the type of a chat thread.

Changes the thread's type classification, which can affect routing,
display, and agent behavior.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UpdateThreadTypeRequest` | The type update payload |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the type has been updated
