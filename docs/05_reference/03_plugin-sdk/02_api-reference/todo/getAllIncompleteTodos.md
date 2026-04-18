---
name: getAllIncompleteTodos
cbbaseinfo:
  description: getAllIncompleteTodos
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<GetAllIncompleteTodosResponse>"
    description: A promise that resolves with the server response.
data:
  name: getAllIncompleteTodos
  category: todo
  link: getAllIncompleteTodos.md
---
# getAllIncompleteTodos

```typescript
plugin.todo.getAllIncompleteTodos(): Promise<GetAllIncompleteTodosResponse>
```

getAllIncompleteTodos

## Parameters

_None_

## Returns

**`Promise<GetAllIncompleteTodosResponse>`** — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todo.getAllIncompleteTodos();
```
