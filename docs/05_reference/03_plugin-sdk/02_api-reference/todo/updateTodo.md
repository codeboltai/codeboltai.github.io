---
title: updateTodo
---

# `updateTodo`

```typescript
plugin.todo.updateTodo(params: object): Promise<UpdateTodoResponse>
```

updateTodo

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `object` | Yes | The parameters for updating a todo. |

## Returns

`Promise<UpdateTodoResponse>` — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todo.updateTodo(/* object */);
console.log(result);
```
