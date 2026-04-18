---
title: exportTodos
---

# `exportTodos`

```typescript
plugin.todosApi.exportTodos(params?: TodoExportParams): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `TodoExportParams` | No |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todosApi.exportTodos();
console.log(result);
```
