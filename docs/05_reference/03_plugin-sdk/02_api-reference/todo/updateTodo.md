---
name: updateTodo
cbbaseinfo:
  description: updateTodo
cbparameters:
  parameters:
    - name: params
      typeName: object
      description: The parameters for updating a todo.
      isOptional: false
  returns:
    signatureTypeName: "Promise<UpdateTodoResponse>"
    description: A promise that resolves with the server response.
data:
  name: updateTodo
  category: todo
  link: updateTodo.md
---
# updateTodo

```typescript
plugin.todo.updateTodo(params: object): Promise<UpdateTodoResponse>
```

updateTodo

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `object` | The parameters for updating a todo. |

## Returns

**`Promise<UpdateTodoResponse>`** — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todo.updateTodo(/* object */);
```
