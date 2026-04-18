---
title: exportTodos
---

# `exportTodos`

```typescript
plugin.todo.exportTodos(params?: object): Promise<ExportTodosResponse>
```

exportTodos

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `object` | No | The parameters for exporting todos. |

## Returns

`Promise<ExportTodosResponse>` — A promise that resolves with the exported data.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todo.exportTodos();
console.log(result);
```
