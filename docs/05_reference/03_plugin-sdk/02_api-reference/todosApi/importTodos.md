---
title: importTodos
---

# `importTodos`

```typescript
plugin.todosApi.importTodos(data: ImportTodosRequest): Promise<TodoItem[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `ImportTodosRequest` | Yes |  |

## Returns

`Promise<TodoItem[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todosApi.importTodos(/* ImportTodosRequest */);
console.log(result);
```
