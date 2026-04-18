---
name: deleteAllCompleted
cbbaseinfo:
  description: "Deletes all completed todos, optionally filtered by thread.

Removes all todos with a completed status. When a threadId is provided,
only completed todos within that specific thread are deleted. This is
useful for cleanup operations to maintain a tidy task list."
cbparameters:
  parameters:
    - name: params
      typeName: TodoListParams
      description: Optional query parameters for filtering deletion scope
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when all completed todos have been deleted
data:
  name: deleteAllCompleted
  category: todos
  link: deleteAllCompleted.md
---
# deleteAllCompleted

```typescript
client.todos.deleteAllCompleted(params?: TodoListParams): Promise<void>
```

Deletes all completed todos, optionally filtered by thread.

Removes all todos with a completed status. When a threadId is provided,
only completed todos within that specific thread are deleted. This is
useful for cleanup operations to maintain a tidy task list.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `TodoListParams` _(optional)_ | Optional query parameters for filtering deletion scope |

## Returns

**`Promise<void>`** — A promise that resolves when all completed todos have been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.todos.deleteAllCompleted();
```
