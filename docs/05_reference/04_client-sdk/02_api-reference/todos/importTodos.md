---
name: importTodos
cbbaseinfo:
  description: "Imports todos from an external source.

Imports todo items from an external system or file format. This enables
migrating tasks from other todo management tools or bulk loading
tasks from predefined lists."
cbparameters:
  parameters:
    - name: data
      typeName: ImportTodosRequest
      description: Import payload containing external todo data
      isOptional: false
  returns:
    signatureTypeName: "Promise<TodoItem[]>"
    description: A promise that resolves to an array of imported TodoItem objects
data:
  name: importTodos
  category: todos
  link: importTodos.md
---
# importTodos

```typescript
client.todos.importTodos(data: ImportTodosRequest): Promise<TodoItem[]>
```

Imports todos from an external source.

Imports todo items from an external system or file format. This enables
migrating tasks from other todo management tools or bulk loading
tasks from predefined lists.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ImportTodosRequest` | Import payload containing external todo data |

## Returns

**`Promise<TodoItem[]>`** — A promise that resolves to an array of imported TodoItem objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.todos.importTodos(/* ImportTodosRequest */);
```
