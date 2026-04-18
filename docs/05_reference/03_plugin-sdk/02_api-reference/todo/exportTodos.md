---
name: exportTodos
cbbaseinfo:
  description: exportTodos
cbparameters:
  parameters:
    - name: params
      typeName: object
      description: The parameters for exporting todos.
      isOptional: true
  returns:
    signatureTypeName: "Promise<ExportTodosResponse>"
    description: A promise that resolves with the exported data.
data:
  name: exportTodos
  category: todo
  link: exportTodos.md
---
# exportTodos

```typescript
plugin.todo.exportTodos(params?: object): Promise<ExportTodosResponse>
```

exportTodos

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `object` _(optional)_ | The parameters for exporting todos. |

## Returns

**`Promise<ExportTodosResponse>`** — A promise that resolves with the exported data.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todo.exportTodos();
```
