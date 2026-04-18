---
title: createThread
---

# `createThread`

```typescript
plugin.todosApi.createThread(data: CreateTodoThreadRequest): Promise<TodoList>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateTodoThreadRequest` | Yes |  |

## Returns

`Promise<TodoList>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todosApi.createThread(/* CreateTodoThreadRequest */);
console.log(result);
```
