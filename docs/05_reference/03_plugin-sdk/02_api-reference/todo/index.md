---
title: Todo API
---

# Todo API

The `todo` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`addTodo`](./addTodo) | addTodo |
| [`exportTodos`](./exportTodos) | exportTodos |
| [`getAllIncompleteTodos`](./getAllIncompleteTodos) | getAllIncompleteTodos |
| [`getTodoList`](./getTodoList) | getTodoList |
| [`importTodos`](./importTodos) | importTodos |
| [`updateTodo`](./updateTodo) | updateTodo |

## Methods

---

### `addTodo`

```typescript
plugin.todo.addTodo(params: object): Promise<AddTodoResponse>
```

addTodo

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `object` | Yes | The parameters for adding a todo. |

**Returns:** `Promise<AddTodoResponse>` — A promise that resolves with the server response.

[Full reference →](./addTodo)

---

### `exportTodos`

```typescript
plugin.todo.exportTodos(params?: object): Promise<ExportTodosResponse>
```

exportTodos

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `object` | No | The parameters for exporting todos. |

**Returns:** `Promise<ExportTodosResponse>` — A promise that resolves with the exported data.

[Full reference →](./exportTodos)

---

### `getAllIncompleteTodos`

```typescript
plugin.todo.getAllIncompleteTodos(): Promise<GetAllIncompleteTodosResponse>
```

getAllIncompleteTodos

_No parameters._

**Returns:** `Promise<GetAllIncompleteTodosResponse>` — A promise that resolves with the server response.

[Full reference →](./getAllIncompleteTodos)

---

### `getTodoList`

```typescript
plugin.todo.getTodoList(params?: any): Promise<GetTodoListResponse>
```

getTodoList

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `any` | No | The parameters for getting the todo list. |

**Returns:** `Promise<GetTodoListResponse>` — A promise that resolves with the server response.

[Full reference →](./getTodoList)

---

### `importTodos`

```typescript
plugin.todo.importTodos(params: object): Promise<ImportTodosResponse>
```

importTodos

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `object` | Yes | The parameters for importing todos. |

**Returns:** `Promise<ImportTodosResponse>` — A promise that resolves with the import result.

[Full reference →](./importTodos)

---

### `updateTodo`

```typescript
plugin.todo.updateTodo(params: object): Promise<UpdateTodoResponse>
```

updateTodo

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `object` | Yes | The parameters for updating a todo. |

**Returns:** `Promise<UpdateTodoResponse>` — A promise that resolves with the server response.

[Full reference →](./updateTodo)

