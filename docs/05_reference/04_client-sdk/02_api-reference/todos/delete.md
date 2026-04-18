---
name: delete
cbbaseinfo:
  description: "Deletes a todo by ID.

Permanently removes the specified todo from the system. This operation
cannot be undone. Use with caution and consider alternatives like
archiving if the todo should be preserved for historical purposes."
cbparameters:
  parameters:
    - name: todoId
      typeName: string
      description: The unique identifier of the todo to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the todo has been deleted
data:
  name: delete
  category: todos
  link: delete.md
---
# delete

```typescript
client.todos.delete(todoId: string): Promise<void>
```

Deletes a todo by ID.

Permanently removes the specified todo from the system. This operation
cannot be undone. Use with caution and consider alternatives like
archiving if the todo should be preserved for historical purposes.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `todoId` | `string` | The unique identifier of the todo to delete |

## Returns

**`Promise<void>`** — A promise that resolves when the todo has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.todos.delete('todoId');
```
