---
title: getAll
---

# `getAll`

```typescript
plugin.todosApi.getAll(params?: TodoListParams): Promise<TodoItem[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `TodoListParams` | No |  |

## Returns

`Promise<TodoItem[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todosApi.getAll();
console.log(result);
```
