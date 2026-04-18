---
name: getTodoList
cbbaseinfo:
  description: getTodoList
cbparameters:
  parameters:
    - name: params
      typeName: any
      description: The parameters for getting the todo list.
      isOptional: true
  returns:
    signatureTypeName: "Promise<GetTodoListResponse>"
    description: A promise that resolves with the server response.
data:
  name: getTodoList
  category: todo
  link: getTodoList.md
---
# getTodoList

```typescript
plugin.todo.getTodoList(params?: any): Promise<GetTodoListResponse>
```

getTodoList

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `any` _(optional)_ | The parameters for getting the todo list. |

## Returns

**`Promise<GetTodoListResponse>`** — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todo.getTodoList();
```
