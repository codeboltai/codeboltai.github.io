---
title: addTodo
---

# `addTodo`

```typescript
plugin.todo.addTodo(params: object): Promise<AddTodoResponse>
```

addTodo

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `object` | Yes | The parameters for adding a todo. |

## Returns

`Promise<AddTodoResponse>` — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todo.addTodo(/* object */);
console.log(result);
```
