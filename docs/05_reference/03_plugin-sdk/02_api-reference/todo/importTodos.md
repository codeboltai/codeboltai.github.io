---
name: importTodos
cbbaseinfo:
  description: importTodos
cbparameters:
  parameters:
    - name: params
      typeName: object
      description: The parameters for importing todos.
      isOptional: false
  returns:
    signatureTypeName: "Promise<ImportTodosResponse>"
    description: A promise that resolves with the import result.
data:
  name: importTodos
  category: todo
  link: importTodos.md
---
# importTodos

```typescript
plugin.todo.importTodos(params: object): Promise<ImportTodosResponse>
```

importTodos

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `object` | The parameters for importing todos. |

## Returns

**`Promise<ImportTodosResponse>`** — A promise that resolves with the import result.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todo.importTodos(/* object */);
```
