---
title: get
---

# `get`

```typescript
plugin.todosApi.get(todoId: string): Promise<TodoItem>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `todoId` | `string` | Yes |  |

## Returns

`Promise<TodoItem>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todosApi.get('todoId');
console.log(result);
```
