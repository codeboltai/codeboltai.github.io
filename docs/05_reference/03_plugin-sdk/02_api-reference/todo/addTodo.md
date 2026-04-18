---
name: addTodo
cbbaseinfo:
  description: addTodo
cbparameters:
  parameters:
    - name: params
      typeName: object
      description: The parameters for adding a todo.
      isOptional: false
  returns:
    signatureTypeName: "Promise<AddTodoResponse>"
    description: A promise that resolves with the server response.
data:
  name: addTodo
  category: todo
  link: addTodo.md
---
# addTodo

```typescript
plugin.todo.addTodo(params: object): Promise<AddTodoResponse>
```

addTodo

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `object` | The parameters for adding a todo. |

## Returns

**`Promise<AddTodoResponse>`** — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todo.addTodo(/* object */);
```
