---
name: update
cbbaseinfo:
  description: "Updates an existing todo.

Modifies the specified todo with the provided field values. Only the
fields included in the request will be updated; all other fields remain
unchanged. Use this to change status, reassign tasks, or update details."
cbparameters:
  parameters:
    - name: todoId
      typeName: string
      description: The unique identifier of the todo to update
      isOptional: false
    - name: data
      typeName: UpdateTodoRequest
      description: Partial update payload containing fields to modify
      isOptional: false
  returns:
    signatureTypeName: "Promise<TodoItem>"
    description: A promise that resolves to the updated TodoItem object
data:
  name: update
  category: todos
  link: update.md
---
# update

```typescript
client.todos.update(todoId: string, data: UpdateTodoRequest): Promise<TodoItem>
```

Updates an existing todo.

Modifies the specified todo with the provided field values. Only the
fields included in the request will be updated; all other fields remain
unchanged. Use this to change status, reassign tasks, or update details.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `todoId` | `string` | The unique identifier of the todo to update |
| `data` | `UpdateTodoRequest` | Partial update payload containing fields to modify |

## Returns

**`Promise<TodoItem>`** — A promise that resolves to the updated TodoItem object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.todos.update('todoId', /* UpdateTodoRequest */);
```
