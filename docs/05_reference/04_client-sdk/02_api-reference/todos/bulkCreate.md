---
name: bulkCreate
cbbaseinfo:
  description: "Bulk-creates multiple todos at once.

Creates multiple todo items in a single API call, which is more efficient
than creating them individually. Use this for batch operations, importing
tasks, or initializing a thread with multiple items."
cbparameters:
  parameters:
    - name: data
      typeName: BulkCreateTodosRequest
      description: Bulk todo creation payload containing multiple items
      isOptional: false
  returns:
    signatureTypeName: "Promise<TodoItem[]>"
    description: A promise that resolves to an array of created TodoItem objects
data:
  name: bulkCreate
  category: todos
  link: bulkCreate.md
---
# bulkCreate

```typescript
client.todos.bulkCreate(data: BulkCreateTodosRequest): Promise<TodoItem[]>
```

Bulk-creates multiple todos at once.

Creates multiple todo items in a single API call, which is more efficient
than creating them individually. Use this for batch operations, importing
tasks, or initializing a thread with multiple items.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `BulkCreateTodosRequest` | Bulk todo creation payload containing multiple items |

## Returns

**`Promise<TodoItem[]>`** — A promise that resolves to an array of created TodoItem objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.todos.bulkCreate(/* BulkCreateTodosRequest */);
```
