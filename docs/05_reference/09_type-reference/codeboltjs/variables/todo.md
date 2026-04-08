---
title: todo
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: todo

```ts
const todo: {
  addTodo: (params: {
     priority?: "low" | "medium" | "high";
     tags?: string[];
     title: string;
  }) => Promise<AddTodoResponse>;
  exportTodos: (params?: {
     format?: "json" | "markdown";
     listId?: string;
     status?: string[];
  }) => Promise<ExportTodosResponse>;
  getAllIncompleteTodos: () => Promise<GetAllIncompleteTodosResponse>;
  getTodoList: (params?: any) => Promise<GetTodoListResponse>;
  importTodos: (params: {
     data: string;
     format?: "json" | "markdown";
     listId?: string;
     mergeStrategy?: "replace" | "merge";
  }) => Promise<ImportTodosResponse>;
  updateTodo: (params: {
     id: string;
     priority?: "low" | "medium" | "high";
     status?: "pending" | "completed" | "processing" | "cancelled";
     tags?: string[];
     title?: string;
  }) => Promise<UpdateTodoResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/todo.ts:16

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="addtodo"></a> `addTodo()` | (`params`: \{ `priority?`: `"low"` \| `"medium"` \| `"high"`; `tags?`: `string`[]; `title`: `string`; \}) => `Promise`\<`AddTodoResponse`\> | **`Function`** addTodo **Description** Adds a new todo item. | [packages/codeboltjs/src/modules/todo.ts:26](packages/codeboltjs/src/modules/todo.ts#L26) |
| <a id="exporttodos"></a> `exportTodos()` | (`params?`: \{ `format?`: `"json"` \| `"markdown"`; `listId?`: `string`; `status?`: `string`[]; \}) => `Promise`\<`ExportTodosResponse`\> | **`Function`** exportTodos **Description** Exports todos in the specified format. | [packages/codeboltjs/src/modules/todo.ts:102](packages/codeboltjs/src/modules/todo.ts#L102) |
| <a id="getallincompletetodos"></a> `getAllIncompleteTodos()` | () => `Promise`\<`GetAllIncompleteTodosResponse`\> | **`Function`** getAllIncompleteTodos **Description** Retrieves all incomplete todo items. | [packages/codeboltjs/src/modules/todo.ts:82](packages/codeboltjs/src/modules/todo.ts#L82) |
| <a id="gettodolist"></a> `getTodoList()` | (`params?`: `any`) => `Promise`\<`GetTodoListResponse`\> | **`Function`** getTodoList **Description** Retrieves the todo list. | [packages/codeboltjs/src/modules/todo.ts:65](packages/codeboltjs/src/modules/todo.ts#L65) |
| <a id="importtodos"></a> `importTodos()` | (`params`: \{ `data`: `string`; `format?`: `"json"` \| `"markdown"`; `listId?`: `string`; `mergeStrategy?`: `"replace"` \| `"merge"`; \}) => `Promise`\<`ImportTodosResponse`\> | **`Function`** importTodos **Description** Imports todos from the specified format. | [packages/codeboltjs/src/modules/todo.ts:123](packages/codeboltjs/src/modules/todo.ts#L123) |
| <a id="updatetodo"></a> `updateTodo()` | (`params`: \{ `id`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `status?`: `"pending"` \| `"completed"` \| `"processing"` \| `"cancelled"`; `tags?`: `string`[]; `title?`: `string`; \}) => `Promise`\<`UpdateTodoResponse`\> | **`Function`** updateTodo **Description** Updates an existing todo item. | [packages/codeboltjs/src/modules/todo.ts:48](packages/codeboltjs/src/modules/todo.ts#L48) |
