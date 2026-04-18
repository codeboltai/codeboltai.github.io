---
name: getThreads
cbbaseinfo:
  description: "Retrieves all todo threads.

Returns all thread objects that organize todos into logical groups.
Threads can represent projects, features, or any other categorization
scheme. Use this to get an overview of all todo collections."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<TodoList[]>"
    description: A promise that resolves to an array of TodoList thread objects
data:
  name: getThreads
  category: todos
  link: getThreads.md
---
# getThreads

```typescript
client.todos.getThreads(): Promise<TodoList[]>
```

Retrieves all todo threads.

Returns all thread objects that organize todos into logical groups.
Threads can represent projects, features, or any other categorization
scheme. Use this to get an overview of all todo collections.

## Parameters

_None_

## Returns

**`Promise<TodoList[]>`** — A promise that resolves to an array of TodoList thread objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.todos.getThreads();
```
