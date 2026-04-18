---
title: getAllIncompleteTodos
---

# `getAllIncompleteTodos`

```typescript
plugin.todo.getAllIncompleteTodos(): Promise<GetAllIncompleteTodosResponse>
```

getAllIncompleteTodos

## Parameters

_No parameters._

## Returns

`Promise<GetAllIncompleteTodosResponse>` — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todo.getAllIncompleteTodos();
console.log(result);
```
