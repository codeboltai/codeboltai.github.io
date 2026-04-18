---
name: exportTodos
cbbaseinfo:
  description: "Exports todos, optionally filtered by thread.

Returns todo data in a format suitable for external systems or backup.
The export can be scoped to a specific thread or include all todos
in the system. The exact format depends on server configuration."
cbparameters:
  parameters:
    - name: params
      typeName: TodoExportParams
      description: Optional query parameters for filtering the export
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the exported todo data
data:
  name: exportTodos
  category: todos
  link: exportTodos.md
---
# exportTodos

```typescript
client.todos.exportTodos(params?: TodoExportParams): Promise<unknown>
```

Exports todos, optionally filtered by thread.

Returns todo data in a format suitable for external systems or backup.
The export can be scoped to a specific thread or include all todos
in the system. The exact format depends on server configuration.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `TodoExportParams` _(optional)_ | Optional query parameters for filtering the export |

## Returns

**`Promise<unknown>`** — A promise that resolves to the exported todo data

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.todos.exportTodos();
```
