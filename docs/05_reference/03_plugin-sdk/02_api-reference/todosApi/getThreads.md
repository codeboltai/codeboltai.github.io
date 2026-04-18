---
title: getThreads
---

# `getThreads`

```typescript
plugin.todosApi.getThreads(): Promise<TodoList[]>
```



## Parameters

_No parameters._

## Returns

`Promise<TodoList[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todosApi.getThreads();
console.log(result);
```
