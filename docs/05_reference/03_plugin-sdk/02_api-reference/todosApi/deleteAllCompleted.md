---
title: deleteAllCompleted
---

# `deleteAllCompleted`

```typescript
plugin.todosApi.deleteAllCompleted(params?: TodoListParams): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `TodoListParams` | No |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todosApi.deleteAllCompleted();
console.log(result);
```
