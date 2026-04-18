---
title: TasksApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: TasksApi

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:21

Manages tasks within the CodeBolt platform.

Tasks represent units of work that can be tracked, updated, and organized
into hierarchies. This API provides comprehensive task management including
searching, statistics, status updates, child task management, and
message threading for task communication.

## Constructors

### Constructor

```ts
new TasksApi(http: HttpClient): TasksApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:22

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`TasksApi`

## Methods

### addChild()

```ts
addChild(taskId: string, data: CreateTaskRequest): Promise<Task>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:377

Adds a child task to an existing parent task.

Creates a new task as a child of the specified parent task, establishing
a hierarchical relationship. Child tasks represent subtasks or components
that contribute to completing the parent task. Returns the new child task.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | The unique identifier of the parent task |
| `data` | `CreateTaskRequest` | The child task creation request |

#### Returns

`Promise`\<`Task`\>

A promise that resolves to the newly created child Task object

#### Example

```typescript
const subtask = await client.tasks.addChild('task-123', {
  title: 'Research component',
  description: 'Investigate...',
  priority: 'medium',
  status: 'pending'
});
```

***

### addMessage()

```ts
addMessage(taskId: string, data: AddTaskMessageRequest): Promise<TaskMessage>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:446

Adds a message to a task's message thread.

Appends a new message to the task's communication thread. Messages
can be used for notes, comments, status updates, or other
communication related to the task. Returns the created message.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | The unique identifier of the task to add the message to |
| `data` | `AddTaskMessageRequest` | The message creation request |

#### Returns

`Promise`\<`TaskMessage`\>

A promise that resolves to the created TaskMessage object

#### Example

```typescript
const message = await client.tasks.addMessage('task-123', {
  content: 'Starting work on this task',
  author: 'user-456'
});
```

***

### create()

```ts
create(data: CreateTaskRequest): Promise<Task>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:216

Creates a new task in the system.

Creates a new task with the provided configuration. The task can be
a standalone unit of work or can later have child tasks added to create
a task hierarchy. Returns the created task with its generated ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateTaskRequest` | The task creation request containing task properties |

#### Returns

`Promise`\<`Task`\>

A promise that resolves to the newly created Task object

#### Example

```typescript
const newTask = await client.tasks.create({
  title: 'Implement feature X',
  description: 'Add support for...',
  priority: 'high',
  status: 'pending'
});
```

***

### delete()

```ts
delete(taskId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:287

Permanently deletes a task from the system.

Removes the specified task and all its associated data. If the task
has child tasks, they may be affected depending on system configuration.
This operation cannot be undone.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | The unique identifier of the task to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the task has been deleted

#### Throws

Error if the task with the given ID does not exist

#### Example

```typescript
await client.tasks.delete('task-123');
console.log('Task deleted');
```

***

### deleteCompletedTasks()

```ts
deleteCompletedTasks(): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:186

Deletes all completed tasks across all projects.

Removes every task with 'completed' status in the entire system.
This is a global cleanup operation that affects all projects.
Use with caution as this operation cannot be undone.

#### Returns

`Promise`\<`void`\>

A promise that resolves when all completed tasks have been deleted

#### Example

```typescript
await client.tasks.deleteCompletedTasks();
console.log('All completed tasks across all projects deleted');
```

***

### deleteProjectCompletedTasks()

```ts
deleteProjectCompletedTasks(projectPath: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:165

Deletes all completed tasks for a specific project.

Removes all tasks with 'completed' status that belong to the specified
project. Use this for cleanup operations to maintain a lean task
history. This operation cannot be undone.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectPath` | `string` | The filesystem path identifying the target project |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the completed tasks have been deleted

#### Example

```typescript
await client.tasks.deleteProjectCompletedTasks('/path/to/project');
console.log('All completed tasks deleted');
```

***

### get()

```ts
get(taskId: string): Promise<Task>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:238

Retrieves a specific task by its unique identifier.

Returns the complete task object including all properties, metadata,
and relationships. Use this to get full task details after a search or
when you need the complete task representation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | The unique identifier of the task to retrieve |

#### Returns

`Promise`\<`Task`\>

A promise that resolves to the Task object with the specified ID

#### Throws

Error if the task with the given ID does not exist

#### Example

```typescript
const task = await client.tasks.get('task-123');
console.log(`Task: ${task.title}`);
console.log(`Status: ${task.status}`);
```

***

### getChildren()

```ts
getChildren(taskId: string): Promise<Task[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:397

Retrieves all child tasks of a parent task.

Returns all tasks that have been added as children of the specified
parent task. This provides access to the task's subtasks and allows
for navigation of the task hierarchy.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | The unique identifier of the parent task |

#### Returns

`Promise`\<`Task`[]\>

A promise that resolves to an array of child Task objects

#### Example

```typescript
const subtasks = await client.tasks.getChildren('task-123');
console.log(`Found ${subtasks.length} subtasks`);
```

***

### getForCurrentProject()

```ts
getForCurrentProject(): Promise<Task[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:104

Retrieves all tasks associated with the current project.

Returns tasks that belong to the currently active project context.
This is useful for project-specific task views and when you need to
operate on tasks within the current working project.

#### Returns

`Promise`\<`Task`[]\>

A promise that resolves to an array of Task objects for the current project

#### Example

```typescript
const projectTasks = await client.tasks.getForCurrentProject();
projectTasks.forEach(task => console.log(task.title));
```

***

### getForProject()

```ts
getForProject(projectPath: string): Promise<Task[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:143

Retrieves all tasks for a specific project path.

Returns tasks that belong to the project identified by its filesystem
path. This allows accessing tasks from any project regardless of the
current working directory context.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectPath` | `string` | The filesystem path identifying the target project |

#### Returns

`Promise`\<`Task`[]\>

A promise that resolves to an array of Task objects for the specified project

#### Example

```typescript
const tasks = await client.tasks.getForProject('/path/to/project');
console.log(`Found ${tasks.length} tasks`);
```

***

### getHierarchy()

```ts
getHierarchy(taskId: string): Promise<TaskHierarchy>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:419

Retrieves the complete hierarchy for a task.

Returns a hierarchical tree representation starting from the specified
task, including all descendants and their relationships. This provides
a complete view of the task's entire subtree for visualization or
comprehensive analysis.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | The unique identifier of the root task |

#### Returns

`Promise`\<`TaskHierarchy`\>

A promise that resolves to a TaskHierarchy object containing the full tree structure

#### Example

```typescript
const hierarchy = await client.tasks.getHierarchy('task-123');
console.log(`Hierarchy depth: ${hierarchy.depth}`);
console.log(`Total tasks: ${hierarchy.totalTasks}`);
```

***

### getProjectStatistics()

```ts
getProjectStatistics(): Promise<TaskStatistics>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:123

Retrieves statistics for tasks in the current project.

Returns aggregated statistics specific to the current project context,
including task counts by status, priority distribution, and other
project-specific metrics. Ideal for project dashboards.

#### Returns

`Promise`\<`TaskStatistics`\>

A promise that resolves to TaskStatistics for the current project

#### Example

```typescript
const projectStats = await client.tasks.getProjectStatistics();
console.log(`Project completion rate: ${projectStats.completionRate}%`);
```

***

### getStatistics()

```ts
getStatistics(): Promise<TaskStatistics>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:85

Retrieves overall task statistics across all projects.

Returns aggregated statistics including total task counts, status
distribution, and other metrics. Use this for dashboard displays or
high-level reporting on task activity across the entire platform.

#### Returns

`Promise`\<`TaskStatistics`\>

A promise that resolves to TaskStatistics containing overview metrics

#### Example

```typescript
const stats = await client.tasks.getStatistics();
console.log(`Total tasks: ${stats.total}`);
console.log(`Completed: ${stats.completed}`);
```

***

### healthCheck()

```ts
healthCheck(): Promise<{
  status: string;
}>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:39

Performs a health check on the task service.

Verifies that the task management service is operational and responding.
Use this to monitor service availability or for health monitoring in
production environments.

#### Returns

`Promise`\<\{
  `status`: `string`;
\}\>

A promise that resolves to an object containing the service status

#### Example

```typescript
const health = await client.tasks.healthCheck();
console.log(health.status); // 'ok' or similar status
```

***

### markCompleted()

```ts
markCompleted(taskId: string): Promise<Task>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:327

Marks a task as completed.

Updates the task's status to indicate that all work has been finished.
This is typically called when a task's objectives have been fully
achieved. Returns the updated task object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | The unique identifier of the task to mark as completed |

#### Returns

`Promise`\<`Task`\>

A promise that resolves to the updated Task object with completed status

#### Example

```typescript
const task = await client.tasks.markCompleted('task-123');
console.log(`Task ${task.title} completed!`);
```

***

### markFailed()

```ts
markFailed(taskId: string): Promise<Task>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:347

Marks a task as failed.

Updates the task's status to indicate that the task could not be
completed successfully. This is typically called when errors occur or
when task objectives cannot be achieved. Returns the updated task object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | The unique identifier of the task to mark as failed |

#### Returns

`Promise`\<`Task`\>

A promise that resolves to the updated Task object with failed status

#### Example

```typescript
const task = await client.tasks.markFailed('task-123');
console.log(`Task ${task.title} failed`);
```

***

### markInProgress()

```ts
markInProgress(taskId: string): Promise<Task>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:307

Marks a task as in-progress.

Updates the task's status to indicate that work has begun on it.
This is typically called when a task is being actively worked on.
Returns the updated task object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | The unique identifier of the task to mark as in-progress |

#### Returns

`Promise`\<`Task`\>

A promise that resolves to the updated Task object with in-progress status

#### Example

```typescript
const task = await client.tasks.markInProgress('task-123');
console.log(`Task ${task.id} is now ${task.status}`);
```

***

### search()

```ts
search(params?: TaskSearchParams): Promise<Task[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:65

Searches for tasks using optional query parameters.

Returns tasks that match the specified search criteria. Use this method
to find tasks by various attributes including status, priority, date
ranges, or custom filters. Returns an empty array if no tasks match.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `TaskSearchParams` | Optional search parameters for filtering and sorting tasks |

#### Returns

`Promise`\<`Task`[]\>

A promise that resolves to an array of matching Task objects

#### Example

```typescript
const pendingTasks = await client.tasks.search({ status: 'pending', limit: 10 });
const recentTasks = await client.tasks.search({ limit: 50 });
```

***

### update()

```ts
update(taskId: string, data: UpdateTaskRequest): Promise<Task>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/tasks.api.ts:266

Updates an existing task with new information.

Modifies the specified task with the provided updates. Only the
fields included in the request will be modified; other fields remain
unchanged. Returns the updated task object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskId` | `string` | The unique identifier of the task to update |
| `data` | `UpdateTaskRequest` | The update request containing fields to modify |

#### Returns

`Promise`\<`Task`\>

A promise that resolves to the updated Task object

#### Example

```typescript
const updatedTask = await client.tasks.update('task-123', {
  status: 'completed',
  priority: 'low'
});
```
