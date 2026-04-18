---
name: getAll
cbbaseinfo:
  description: "Retrieves all todos, optionally filtered by thread.

Returns all todo items in the system. When a threadId is provided,
only todos belonging to that specific thread are returned. This
is useful for displaying task lists scoped to a particular context."
cbparameters:
  parameters:
    - name: params
      typeName: TodoListParams
      description: Optional query parameters for filtering todos
      isOptional: true
  returns:
    signatureTypeName: "Promise<TodoItem[]>"
    description: A promise that resolves to an array of TodoItem objects
data:
  name: getAll
  category: todos
  link: getAll.md
---
# getAll

```typescript
client.todos.getAll(params?: TodoListParams): Promise<TodoItem[]>
```

Retrieves all todos, optionally filtered by thread.

Returns all todo items in the system. When a threadId is provided,
only todos belonging to that specific thread are returned. This
is useful for displaying task lists scoped to a particular context.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `TodoListParams` _(optional)_ | Optional query parameters for filtering todos |

## Returns

**`Promise<TodoItem[]>`** — A promise that resolves to an array of TodoItem objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.todos.getAll();
```
