---
title: TodosApi
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: TodosApi

Defined in: CodeBolt/packages/pluginSdk/src/api/todos.api.ts:23

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

Defined in: CodeBolt/packages/pluginSdk/src/api/todos.api.ts:24

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

Defined in: CodeBolt/packages/pluginSdk/src/api/todos.api.ts:74

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `threadId` | `string` |

#### Returns

`Promise`\<`void`\>

***

### bulkCreate()

```ts
bulkCreate(data: BulkCreateTodosRequest): Promise<TodoItem[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/todos.api.ts:54

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `BulkCreateTodosRequest` |

#### Returns

`Promise`\<`TodoItem`[]\>

***

### create()

```ts
create(data: CreateTodoRequest): Promise<TodoItem>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/todos.api.ts:50

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateTodoRequest` |

#### Returns

`Promise`\<`TodoItem`\>

***

### createThread()

```ts
createThread(data: CreateTodoThreadRequest): Promise<TodoList>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/todos.api.ts:34

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateTodoThreadRequest` |

#### Returns

`Promise`\<`TodoList`\>

***

### delete()

```ts
delete(todoId: string): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/todos.api.ts:66

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `todoId` | `string` |

#### Returns

`Promise`\<`void`\>

***

### deleteAllCompleted()

```ts
deleteAllCompleted(params?: TodoListParams): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/todos.api.ts:70

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `TodoListParams` |

#### Returns

`Promise`\<`void`\>

***

### exportTodos()

```ts
exportTodos(params?: TodoExportParams): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/todos.api.ts:42

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `TodoExportParams` |

#### Returns

`Promise`\<`unknown`\>

***

### get()

```ts
get(todoId: string): Promise<TodoItem>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/todos.api.ts:46

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `todoId` | `string` |

#### Returns

`Promise`\<`TodoItem`\>

***

### getAll()

```ts
getAll(params?: TodoListParams): Promise<TodoItem[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/todos.api.ts:26

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `TodoListParams` |

#### Returns

`Promise`\<`TodoItem`[]\>

***

### getStats()

```ts
getStats(params?: TodoListParams): Promise<TodoStats>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/todos.api.ts:38

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `TodoListParams` |

#### Returns

`Promise`\<`TodoStats`\>

***

### getThreads()

```ts
getThreads(): Promise<TodoList[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/todos.api.ts:30

#### Returns

`Promise`\<`TodoList`[]\>

***

### importTodos()

```ts
importTodos(data: ImportTodosRequest): Promise<TodoItem[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/todos.api.ts:58

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `ImportTodosRequest` |

#### Returns

`Promise`\<`TodoItem`[]\>

***

### unarchiveThread()

```ts
unarchiveThread(threadId: string): Promise<void>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/todos.api.ts:78

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `threadId` | `string` |

#### Returns

`Promise`\<`void`\>

***

### update()

```ts
update(todoId: string, data: UpdateTodoRequest): Promise<TodoItem>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/todos.api.ts:62

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `todoId` | `string` |
| `data` | `UpdateTodoRequest` |

#### Returns

`Promise`\<`TodoItem`\>
