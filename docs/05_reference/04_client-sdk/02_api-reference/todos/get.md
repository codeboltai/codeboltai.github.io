---
name: get
cbbaseinfo:
  description: "Retrieves a specific todo by ID.

Returns detailed information about a single todo item including
its current status, description, assignee, and all other fields.
Use this to get the full details of a particular task."
cbparameters:
  parameters:
    - name: todoId
      typeName: string
      description: The unique identifier of the todo to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<TodoItem>"
    description: A promise that resolves to the requested TodoItem object
data:
  name: get
  category: todos
  link: get.md
---
# get

```typescript
client.todos.get(todoId: string): Promise<TodoItem>
```

Retrieves a specific todo by ID.

Returns detailed information about a single todo item including
its current status, description, assignee, and all other fields.
Use this to get the full details of a particular task.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `todoId` | `string` | The unique identifier of the todo to retrieve |

## Returns

**`Promise<TodoItem>`** — A promise that resolves to the requested TodoItem object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.todos.get('todoId');
```
