---
title: getStats
---

# `getStats`

```typescript
plugin.todosApi.getStats(params?: TodoListParams): Promise<TodoStats>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `TodoListParams` | No |  |

## Returns

`Promise<TodoStats>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todosApi.getStats();
console.log(result);
```
