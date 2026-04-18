---
title: TodosApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: TodosApi

Defined in: CodeBolt/packages/clientsdk/src/api/todos.api.ts:23

Manages todos and todo threads in the CodeBolt platform.

Todos are task items that can be organized into threads for tracking
work, features, bugs, and other development activities. This API
provides full CRUD operations, bulk actions, statistics, and import/export
capabilities for managing todo workflows.

## Constructors

### Constructor

```ts
new TodosApi(http: HttpClient): TodosApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/todos.api.ts:24

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`TodosApi`

## Methods

### archiveThread()

```ts
archiveThread(threadId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/todos.api.ts:313

Archives a todo thread.

Marks the specified thread as archived, removing it from active view
while preserving all todos within it. Archived threads can still be
accessed but are typically hidden from default views.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to archive |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the thread has been archived

#### Example

```typescript
await client.todos.archiveThread('thread-123');
console.log('Thread archived');
```

***

### bulkCreate()

```ts
bulkCreate(data: BulkCreateTodosRequest): Promise<TodoItem[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/todos.api.ts:200

Bulk-creates multiple todos at once.

Creates multiple todo items in a single API call, which is more efficient
than creating them individually. Use this for batch operations, importing
tasks, or initializing a thread with multiple items.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `BulkCreateTodosRequest` | Bulk todo creation payload containing multiple items |

#### Returns

`Promise`\<`TodoItem`[]\>

A promise that resolves to an array of created TodoItem objects

#### Example

```typescript
const newTodos = await client.todos.bulkCreate({
  todos: [
    { title: 'Task 1', priority: 'high' },
    { title: 'Task 2', priority: 'low' }
  ],
  threadId: 'thread-123'
});
```

***

### create()

```ts
create(data: CreateTodoRequest): Promise<TodoItem>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/todos.api.ts:173

Creates a new todo.

Initializes a new todo item with the provided data. The todo can be
assigned to a thread, given a priority, and include any other relevant
task information.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateTodoRequest` | Todo creation payload containing task details |

#### Returns

`Promise`\<`TodoItem`\>

A promise that resolves to the created TodoItem object

#### Example

```typescript
const newTodo = await client.todos.create({
  title: 'Implement authentication',
  threadId: 'thread-123',
  priority: 'high'
});
```

***

### createThread()

```ts
createThread(data: CreateTodoThreadRequest): Promise<TodoList>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/todos.api.ts:83

Creates a new todo thread.

Initializes a new thread for organizing related todos. Threads
provide structure and context for groups of tasks, making them
easier to manage and track together.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateTodoThreadRequest` | Thread creation payload containing name and optional metadata |

#### Returns

`Promise`\<`TodoList`\>

A promise that resolves to the created TodoList thread object

#### Example

```typescript
const newThread = await client.todos.createThread({ name: 'Feature X Tasks' });
console.log(`Created thread: ${newThread.id}`);
```

***

### delete()

```ts
delete(todoId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/todos.api.ts:272

Deletes a todo by ID.

Permanently removes the specified todo from the system. This operation
cannot be undone. Use with caution and consider alternatives like
archiving if the todo should be preserved for historical purposes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `todoId` | `string` | The unique identifier of the todo to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the todo has been deleted

#### Example

```typescript
await client.todos.delete('todo-abc-123');
console.log('Todo deleted successfully');
```

***

### deleteAllCompleted()

```ts
deleteAllCompleted(params?: TodoListParams): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/todos.api.ts:293

Deletes all completed todos, optionally filtered by thread.

Removes all todos with a completed status. When a threadId is provided,
only completed todos within that specific thread are deleted. This is
useful for cleanup operations to maintain a tidy task list.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `TodoListParams` | Optional query parameters for filtering deletion scope |

#### Returns

`Promise`\<`void`\>

A promise that resolves when all completed todos have been deleted

#### Example

```typescript
await client.todos.deleteAllCompleted();
await client.todos.deleteAllCompleted({ threadId: 'thread-123' });
```

***

### exportTodos()

```ts
exportTodos(params?: TodoExportParams): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/todos.api.ts:127

Exports todos, optionally filtered by thread.

Returns todo data in a format suitable for external systems or backup.
The export can be scoped to a specific thread or include all todos
in the system. The exact format depends on server configuration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `TodoExportParams` | Optional query parameters for filtering the export |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the exported todo data

#### Example

```typescript
const exported = await client.todos.exportTodos();
await client.todos.exportTodos({ threadId: 'thread-123', format: 'json' });
```

***

### get()

```ts
get(todoId: string): Promise<TodoItem>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/todos.api.ts:147

Retrieves a specific todo by ID.

Returns detailed information about a single todo item including
its current status, description, assignee, and all other fields.
Use this to get the full details of a particular task.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `todoId` | `string` | The unique identifier of the todo to retrieve |

#### Returns

`Promise`\<`TodoItem`\>

A promise that resolves to the requested TodoItem object

#### Example

```typescript
const todo = await client.todos.get('todo-abc-123');
console.log(`Todo: ${todo.title} - ${todo.status}`);
```

***

### getAll()

```ts
getAll(params?: TodoListParams): Promise<TodoItem[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/todos.api.ts:43

Retrieves all todos, optionally filtered by thread.

Returns all todo items in the system. When a threadId is provided,
only todos belonging to that specific thread are returned. This
is useful for displaying task lists scoped to a particular context.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `TodoListParams` | Optional query parameters for filtering todos |

#### Returns

`Promise`\<`TodoItem`[]\>

A promise that resolves to an array of TodoItem objects

#### Example

```typescript
const allTodos = await client.todos.getAll();
const threadTodos = await client.todos.getAll({ threadId: 'thread-123' });
```

***

### getStats()

```ts
getStats(params?: TodoListParams): Promise<TodoStats>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/todos.api.ts:105

Retrieves todo statistics, optionally filtered by thread.

Returns aggregated statistics about todos including counts by status,
priority distribution, and completion rates. When a threadId is provided,
statistics are scoped to that specific thread only.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `TodoListParams` | Optional query parameters for filtering statistics |

#### Returns

`Promise`\<`TodoStats`\>

A promise that resolves to TodoStats object with metrics

#### Example

```typescript
const stats = await client.todos.getStats();
console.log(`Total: ${stats.total}, Completed: ${stats.completed}`);
const threadStats = await client.todos.getStats({ threadId: 'thread-123' });
```

***

### getThreads()

```ts
getThreads(): Promise<TodoList[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/todos.api.ts:62

Retrieves all todo threads.

Returns all thread objects that organize todos into logical groups.
Threads can represent projects, features, or any other categorization
scheme. Use this to get an overview of all todo collections.

#### Returns

`Promise`\<`TodoList`[]\>

A promise that resolves to an array of TodoList thread objects

#### Example

```typescript
const threads = await client.todos.getThreads();
threads.forEach(t => console.log(t.name, t.todoCount));
```

***

### importTodos()

```ts
importTodos(data: ImportTodosRequest): Promise<TodoItem[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/todos.api.ts:226

Imports todos from an external source.

Imports todo items from an external system or file format. This enables
migrating tasks from other todo management tools or bulk loading
tasks from predefined lists.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ImportTodosRequest` | Import payload containing external todo data |

#### Returns

`Promise`\<`TodoItem`[]\>

A promise that resolves to an array of imported TodoItem objects

#### Example

```typescript
const imported = await client.todos.importTodos({
  source: 'trello',
  todos: externalTasks,
  threadId: 'thread-123'
});
```

***

### unarchiveThread()

```ts
unarchiveThread(threadId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/todos.api.ts:333

Unarchives a todo thread.

Removes the archived status from the specified thread, making it
visible in active views again. This restores the thread and all its
todos to normal operational status.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `threadId` | `string` | The unique identifier of the thread to unarchive |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the thread has been unarchived

#### Example

```typescript
await client.todos.unarchiveThread('thread-123');
console.log('Thread restored to active view');
```

***

### update()

```ts
update(todoId: string, data: UpdateTodoRequest): Promise<TodoItem>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/todos.api.ts:252

Updates an existing todo.

Modifies the specified todo with the provided field values. Only the
fields included in the request will be updated; all other fields remain
unchanged. Use this to change status, reassign tasks, or update details.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `todoId` | `string` | The unique identifier of the todo to update |
| `data` | `UpdateTodoRequest` | Partial update payload containing fields to modify |

#### Returns

`Promise`\<`TodoItem`\>

A promise that resolves to the updated TodoItem object

#### Example

```typescript
const updated = await client.todos.update('todo-abc-123', {
  status: 'completed',
  priority: 'low'
});
```
