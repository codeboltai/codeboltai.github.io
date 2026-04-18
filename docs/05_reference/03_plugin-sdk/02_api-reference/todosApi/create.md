---
title: create
---

# `create`

```typescript
plugin.todosApi.create(data: CreateTodoRequest): Promise<TodoItem>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateTodoRequest` | Yes |  |

## Returns

`Promise<TodoItem>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todosApi.create(/* CreateTodoRequest */);
console.log(result);
```
