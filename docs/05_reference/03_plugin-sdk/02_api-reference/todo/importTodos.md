---
title: importTodos
---

# `importTodos`

```typescript
plugin.todo.importTodos(params: object): Promise<ImportTodosResponse>
```

importTodos

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `object` | Yes | The parameters for importing todos. |

## Returns

`Promise<ImportTodosResponse>` — A promise that resolves with the import result.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todo.importTodos(/* object */);
console.log(result);
```
