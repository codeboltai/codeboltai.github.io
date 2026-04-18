---
name: create
cbbaseinfo:
  description: "Creates a new todo.

Initializes a new todo item with the provided data. The todo can be
assigned to a thread, given a priority, and include any other relevant
task information."
cbparameters:
  parameters:
    - name: data
      typeName: CreateTodoRequest
      description: Todo creation payload containing task details
      isOptional: false
  returns:
    signatureTypeName: "Promise<TodoItem>"
    description: A promise that resolves to the created TodoItem object
data:
  name: create
  category: todos
  link: create.md
---
# create

```typescript
client.todos.create(data: CreateTodoRequest): Promise<TodoItem>
```

Creates a new todo.

Initializes a new todo item with the provided data. The todo can be
assigned to a thread, given a priority, and include any other relevant
task information.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateTodoRequest` | Todo creation payload containing task details |

## Returns

**`Promise<TodoItem>`** — A promise that resolves to the created TodoItem object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.todos.create(/* CreateTodoRequest */);
```
