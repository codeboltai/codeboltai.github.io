---
title: update
---

# `update`

```typescript
plugin.todosApi.update(todoId: string, data: UpdateTodoRequest): Promise<TodoItem>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `todoId` | `string` | Yes |  |
| `data` | `UpdateTodoRequest` | Yes |  |

## Returns

`Promise<TodoItem>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todosApi.update('todoId', /* UpdateTodoRequest */);
console.log(result);
```
