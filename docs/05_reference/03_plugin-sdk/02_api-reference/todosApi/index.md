---
title: TodosApi API
---

# TodosApi API

The `todosApi` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`archiveThread`](./archiveThread) |  |
| [`bulkCreate`](./bulkCreate) |  |
| [`create`](./create) |  |
| [`createThread`](./createThread) |  |
| [`delete`](./delete) |  |
| [`deleteAllCompleted`](./deleteAllCompleted) |  |
| [`exportTodos`](./exportTodos) |  |
| [`get`](./get) |  |
| [`getAll`](./getAll) |  |
| [`getStats`](./getStats) |  |
| [`getThreads`](./getThreads) |  |
| [`importTodos`](./importTodos) |  |
| [`unarchiveThread`](./unarchiveThread) |  |
| [`update`](./update) |  |

## Methods

---

### `archiveThread`

```typescript
plugin.todosApi.archiveThread(threadId: string): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./archiveThread)

---

### `bulkCreate`

```typescript
plugin.todosApi.bulkCreate(data: BulkCreateTodosRequest): Promise<TodoItem[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `BulkCreateTodosRequest` | Yes |  |

**Returns:** `Promise<TodoItem[]>`

[Full reference →](./bulkCreate)

---

### `create`

```typescript
plugin.todosApi.create(data: CreateTodoRequest): Promise<TodoItem>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateTodoRequest` | Yes |  |

**Returns:** `Promise<TodoItem>`

[Full reference →](./create)

---

### `createThread`

```typescript
plugin.todosApi.createThread(data: CreateTodoThreadRequest): Promise<TodoList>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateTodoThreadRequest` | Yes |  |

**Returns:** `Promise<TodoList>`

[Full reference →](./createThread)

---

### `delete`

```typescript
plugin.todosApi.delete(todoId: string): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `todoId` | `string` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./delete)

---

### `deleteAllCompleted`

```typescript
plugin.todosApi.deleteAllCompleted(params?: TodoListParams): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `TodoListParams` | No |  |

**Returns:** `Promise<void>`

[Full reference →](./deleteAllCompleted)

---

### `exportTodos`

```typescript
plugin.todosApi.exportTodos(params?: TodoExportParams): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `TodoExportParams` | No |  |

**Returns:** `Promise<unknown>`

[Full reference →](./exportTodos)

---

### `get`

```typescript
plugin.todosApi.get(todoId: string): Promise<TodoItem>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `todoId` | `string` | Yes |  |

**Returns:** `Promise<TodoItem>`

[Full reference →](./get)

---

### `getAll`

```typescript
plugin.todosApi.getAll(params?: TodoListParams): Promise<TodoItem[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `TodoListParams` | No |  |

**Returns:** `Promise<TodoItem[]>`

[Full reference →](./getAll)

---

### `getStats`

```typescript
plugin.todosApi.getStats(params?: TodoListParams): Promise<TodoStats>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `TodoListParams` | No |  |

**Returns:** `Promise<TodoStats>`

[Full reference →](./getStats)

---

### `getThreads`

```typescript
plugin.todosApi.getThreads(): Promise<TodoList[]>
```



_No parameters._

**Returns:** `Promise<TodoList[]>`

[Full reference →](./getThreads)

---

### `importTodos`

```typescript
plugin.todosApi.importTodos(data: ImportTodosRequest): Promise<TodoItem[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `ImportTodosRequest` | Yes |  |

**Returns:** `Promise<TodoItem[]>`

[Full reference →](./importTodos)

---

### `unarchiveThread`

```typescript
plugin.todosApi.unarchiveThread(threadId: string): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./unarchiveThread)

---

### `update`

```typescript
plugin.todosApi.update(todoId: string, data: UpdateTodoRequest): Promise<TodoItem>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `todoId` | `string` | Yes |  |
| `data` | `UpdateTodoRequest` | Yes |  |

**Returns:** `Promise<TodoItem>`

[Full reference →](./update)

