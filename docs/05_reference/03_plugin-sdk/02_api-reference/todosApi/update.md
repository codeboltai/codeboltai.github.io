---
name: update
cbbaseinfo:
  description: Call update on the Plugin SDK todosApi module.
cbparameters:
  parameters:
    - name: todoId
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateTodoRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TodoItem>"
    description: ""
data:
  name: update
  category: todosApi
  link: update.md
---
# update

```typescript
plugin.todosApi.update(todoId: string, data: UpdateTodoRequest): Promise<TodoItem>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `todoId` | `string` |  |
| `data` | `UpdateTodoRequest` |  |

## Returns

**`Promise<TodoItem>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todosApi.update('todoId', /* UpdateTodoRequest */);
```
