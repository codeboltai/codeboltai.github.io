---
name: createThread
cbbaseinfo:
  description: "Creates a new todo thread.

Initializes a new thread for organizing related todos. Threads
provide structure and context for groups of tasks, making them
easier to manage and track together."
cbparameters:
  parameters:
    - name: data
      typeName: CreateTodoThreadRequest
      description: Thread creation payload containing name and optional metadata
      isOptional: false
  returns:
    signatureTypeName: "Promise<TodoList>"
    description: A promise that resolves to the created TodoList thread object
data:
  name: createThread
  category: todos
  link: createThread.md
---
# createThread

```typescript
client.todos.createThread(data: CreateTodoThreadRequest): Promise<TodoList>
```

Creates a new todo thread.

Initializes a new thread for organizing related todos. Threads
provide structure and context for groups of tasks, making them
easier to manage and track together.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateTodoThreadRequest` | Thread creation payload containing name and optional metadata |

## Returns

**`Promise<TodoList>`** — A promise that resolves to the created TodoList thread object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.todos.createThread(/* CreateTodoThreadRequest */);
```
