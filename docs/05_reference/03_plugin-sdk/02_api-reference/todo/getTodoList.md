---
title: getTodoList
---

# `getTodoList`

```typescript
plugin.todo.getTodoList(params?: any): Promise<GetTodoListResponse>
```

getTodoList

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `any` | No | The parameters for getting the todo list. |

## Returns

`Promise<GetTodoListResponse>` — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todo.getTodoList();
console.log(result);
```
