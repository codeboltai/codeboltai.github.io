---
title: ThreadsApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: ThreadsApi

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:28

Manages thread operations within the CodeBolt platform.

Threads represent execution units that can be created, monitored, and controlled
through various states and lifecycle events. This API provides comprehensive
functionality for thread management including CRUD operations, search,
bulk operations, and execution control.

## Constructors

### Constructor

```ts
new ThreadsApi(http: HttpClient): ThreadsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:29

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`ThreadsApi`

## Methods

### advancedSearch()

```ts
advancedSearch(data: ThreadSearchRequest): Promise<Thread[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:144

Performs an advanced search for threads based on multiple criteria.

Allows complex queries with filtering, sorting, and pagination to find
threads matching specific conditions. Use this for flexible thread discovery
and management operations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ThreadSearchRequest` | The search request containing filter and query parameters |

#### Returns

`Promise`\<`Thread`[]\>

A promise that resolves to an array of matching Thread objects

#### Example

```typescript
const results = await client.threads.advancedSearch({
  status: 'active',
  limit: 10
});
```

***

### autoUpdateName()

```ts
autoUpdateName(data: AutoUpdateNameRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:206

Automatically updates a thread's name based on its content.

Analyzes the thread's execution history, messages, and context to generate
an appropriate name that reflects its purpose and activity. This is useful
for maintaining descriptive thread labels without manual intervention.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `AutoUpdateNameRequest` | The request containing the thread ID to rename |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the thread name has been updated

#### Example

```typescript
await client.threads.autoUpdateName({ threadId: 'thread-123' });
```

***

### bulkDelete()

```ts
bulkDelete(data: ThreadBulkDeleteRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:187

Deletes multiple threads in a single operation.

Removes the specified threads from the system in a bulk operation.
This is more efficient than deleting threads individually and ensures
atomic deletion of multiple threads.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ThreadBulkDeleteRequest` | The bulk delete request containing thread IDs to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when all threads have been deleted

#### Example

```typescript
await client.threads.bulkDelete({
  threadIds: ['thread-1', 'thread-2', 'thread-3']
});
```

***

### bulkUpdate()

```ts
bulkUpdate(data: ThreadBulkUpdateRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:166

Updates multiple threads in a single operation.

Performs bulk modifications across multiple threads simultaneously.
This is more efficient than updating threads individually when you need
to apply the same changes to many threads.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ThreadBulkUpdateRequest` | The bulk update request containing thread IDs and updates |

#### Returns

`Promise`\<`void`\>

A promise that resolves when all threads have been updated

#### Example

```typescript
await client.threads.bulkUpdate({
  threadIds: ['thread-1', 'thread-2'],
  updates: { status: 'completed' }
});
```

***

### cancel()

```ts
cancel(threadId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:415

Cancels the execution of a thread.

Terminates the thread's operations and places it in a cancelled state.
Unlike pausing, this action cannot be reversed and the thread will not
continue execution. Use this to stop threads that are no longer needed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to cancel |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the thread has been cancelled

#### Example

```typescript
await client.threads.cancel('thread-123');
```

***

### complete()

```ts
complete(threadId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:434

Marks a thread as completed.

Sets the thread's status to completed, indicating that its execution
has finished successfully. This is typically done automatically by
the thread, but can be called manually when needed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to complete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the thread has been marked complete

#### Example

```typescript
await client.threads.complete('thread-123');
```

***

### create()

```ts
create(data: CreateThreadRequest): Promise<Thread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:475

Creates a new thread with the specified configuration.

Initializes a new thread with the provided settings and parameters.
The thread will be created in an initial state and can be executed
when ready. Use this to set up new execution units.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateThreadRequest` | The thread creation request with configuration details |

#### Returns

`Promise`\<`Thread`\>

A promise that resolves to the newly created Thread object

#### Example

```typescript
const thread = await client.threads.create({
  name: 'Data Processing',
  type: 'workflow'
});
```

***

### delete()

```ts
delete(threadId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:517

Deletes a thread from the system.

Permanently removes the specified thread and all its associated data.
This action cannot be undone, so use with caution. Deleting a thread
will also remove its relationships with other threads.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the thread has been deleted

#### Example

```typescript
await client.threads.delete('thread-123');
```

***

### execute()

```ts
execute(threadId: string, data?: ExecuteThreadRequest): Promise<Thread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:355

Executes a thread with optional configuration parameters.

Starts or resumes execution of the specified thread. You can provide
additional execution parameters to customize the run. The thread will
process its configured tasks and operations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to execute |
| `data?` | `ExecuteThreadRequest` | Optional execution configuration parameters |

#### Returns

`Promise`\<`Thread`\>

A promise that resolves to the updated Thread object

#### Example

```typescript
const thread = await client.threads.execute('thread-123', {
  mode: 'sync'
});
```

***

### getById()

```ts
getById(id: string): Promise<Thread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:537

Retrieves a thread by its unique identifier.

Fetches the complete thread object including all its properties and
current state. This is the primary method for accessing thread details
when you know the thread's ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the thread to retrieve |

#### Returns

`Promise`\<`Thread`\>

A promise that resolves to the Thread object

#### Example

```typescript
const thread = await client.threads.getById('thread-123');
console.log(thread.name, thread.status);
```

***

### getChildren()

```ts
getChildren(threadId: string): Promise<Thread[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:267

Retrieves all direct child threads of a specified thread.

Returns threads that are immediate descendants of the given parent thread.
This is useful for navigating thread hierarchies and managing related threads.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the parent thread |

#### Returns

`Promise`\<`Thread`[]\>

A promise that resolves to an array of child Thread objects

#### Example

```typescript
const children = await client.threads.getChildren('thread-123');
children.forEach(child => console.log(child.name));
```

***

### getDependencies()

```ts
getDependencies(threadId: string): Promise<Thread[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:287

Retrieves all threads that the specified thread depends on.

Returns threads that are prerequisites or dependencies of the given thread.
This is useful for understanding execution order requirements and managing
complex thread relationships.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |

#### Returns

`Promise`\<`Thread`[]\>

A promise that resolves to an array of dependent Thread objects

#### Example

```typescript
const deps = await client.threads.getDependencies('thread-123');
console.log(`Thread has ${deps.length} dependencies`);
```

***

### getGraph()

```ts
getGraph(): Promise<ThreadGraphNode[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:84

Retrieves the complete thread graph structure.

Returns all threads as nodes in a graph representation, showing relationships
and connections between threads. This is useful for visualizing thread
hierarchies and dependencies.

#### Returns

`Promise`\<`ThreadGraphNode`[]\>

A promise that resolves to an array of ThreadGraphNode objects

#### Example

```typescript
const graph = await client.threads.getGraph();
graph.forEach(node => console.log(node.id, node.children));
```

***

### getStatistics()

```ts
getStatistics(): Promise<ThreadStatistics>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:65

Retrieves statistics about threads in the system.

Returns aggregated metrics including total thread counts, status distributions,
and other statistical data. Use this to gain insights into thread activity
and system performance.

#### Returns

`Promise`\<`ThreadStatistics`\>

A promise that resolves to ThreadStatistics containing various metrics

#### Example

```typescript
const stats = await client.threads.getStatistics();
console.log(`Total threads: ${stats.totalThreads}`);
```

***

### getThreadInfo()

```ts
getThreadInfo(threadId: string): Promise<ThreadInfo>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:103

Retrieves detailed information about a specific thread.

Returns comprehensive metadata and status information for the specified
thread, including its configuration, current state, and related attributes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to retrieve |

#### Returns

`Promise`\<`ThreadInfo`\>

A promise that resolves to ThreadInfo containing thread details

#### Example

```typescript
const info = await client.threads.getThreadInfo('thread-123');
console.log(`Thread status: ${info.status}`);
```

***

### getTimeline()

```ts
getTimeline(threadId: string): Promise<ThreadTimelineEvent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:246

Retrieves the timeline of events for a specific thread.

Returns a chronological list of all events associated with the thread,
including status changes, executions, and other significant occurrences.
Use this to track thread activity and audit execution history.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread |

#### Returns

`Promise`\<`ThreadTimelineEvent`[]\>

A promise that resolves to an array of ThreadTimelineEvent objects

#### Example

```typescript
const timeline = await client.threads.getTimeline('thread-123');
timeline.forEach(event => console.log(event.timestamp, event.type));
```

***

### getTree()

```ts
getTree(threadId: string): Promise<ThreadGraphNode>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:226

Retrieves the hierarchical tree structure for a thread.

Returns the complete tree representation starting from the specified thread,
including all descendant threads and their relationships. This is useful for
visualizing thread hierarchies and understanding nested thread structures.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the root thread |

#### Returns

`Promise`\<`ThreadGraphNode`\>

A promise that resolves to a ThreadGraphNode representing the tree

#### Example

```typescript
const tree = await client.threads.getTree('thread-123');
console.log(`Tree has ${tree.children?.length || 0} child threads`);
```

***

### healthCheck()

```ts
healthCheck(): Promise<{
  status: string;
}>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:46

Performs a health check on the thread service.

Verifies that the thread service is operational and responding to requests.
Use this for service monitoring or to check availability before performing
other thread operations.

#### Returns

`Promise`\<\{
  `status`: `string`;
\}\>

A promise that resolves to an object containing the service status

#### Example

```typescript
const health = await client.threads.healthCheck();
console.log(health.status);
```

***

### list()

```ts
list(params?: ThreadListParams): Promise<Thread[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:453

Lists all threads with optional filtering.

Returns threads matching the provided query parameters, allowing you to
filter and paginate through the thread collection. Use this to browse
threads or find specific sets of threads based on criteria.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `ThreadListParams` | Optional query parameters for filtering threads |

#### Returns

`Promise`\<`Thread`[]\>

A promise that resolves to an array of Thread objects

#### Example

```typescript
const activeThreads = await client.threads.list({ status: 'active' });
```

***

### pause()

```ts
pause(threadId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:377

Pauses the execution of a running thread.

Suspends the thread's current operations and places it in a paused state.
The thread can be resumed later using the resume method. Use this to
temporarily halt execution without cancelling the thread.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to pause |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the thread has been paused

#### Example

```typescript
await client.threads.pause('thread-123');
```

***

### resume()

```ts
resume(threadId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:396

Resumes execution of a paused thread.

Reactivates a thread that was previously paused, allowing it to continue
its operations from where it left off. The thread will return to an
active state and continue processing.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to resume |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the thread has been resumed

#### Example

```typescript
await client.threads.resume('thread-123');
```

***

### searchThread()

```ts
searchThread(threadId: string): Promise<Thread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:122

Searches for a specific thread by its ID.

Performs a direct lookup to find a thread using its unique identifier.
This is the most efficient way to retrieve a thread when you know its ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to search for |

#### Returns

`Promise`\<`Thread`\>

A promise that resolves to the matching Thread object

#### Example

```typescript
const thread = await client.threads.searchThread('thread-123');
console.log(thread.name);
```

***

### update()

```ts
update(threadId: string, data: UpdateThreadRequest): Promise<Thread>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:498

Updates an existing thread with new information.

Modifies the specified thread's configuration, metadata, or other
attributes. Only the fields provided in the request will be updated.
Use this to make changes to existing threads.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to update |
| `data` | `UpdateThreadRequest` | The update request containing the fields to modify |

#### Returns

`Promise`\<`Thread`\>

A promise that resolves to the updated Thread object

#### Example

```typescript
const updated = await client.threads.update('thread-123', {
  name: 'Updated Thread Name',
  description: 'New description'
});
```

***

### updateProgress()

```ts
updateProgress(threadId: string, data: UpdateThreadProgressRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:330

Updates the progress information for a thread.

Modifies the thread's progress metrics, such as completion percentage,
current step, or other progress indicators. This is useful for tracking
execution progress and providing feedback to users.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to update |
| `data` | `UpdateThreadProgressRequest` | The request containing progress update information |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the progress has been updated

#### Example

```typescript
await client.threads.updateProgress('thread-123', { progress: 75 });
```

***

### updateStatus()

```ts
updateStatus(threadId: string, data: UpdateThreadStatusRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/threads.api.ts:307

Updates the status of a specific thread.

Changes the execution state of the thread to a new status such as active,
paused, or completed. This controls the thread's lifecycle and availability
for execution.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to update |
| `data` | `UpdateThreadStatusRequest` | The request containing the new status information |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the status has been updated

#### Example

```typescript
await client.threads.updateStatus('thread-123', { status: 'paused' });
```
