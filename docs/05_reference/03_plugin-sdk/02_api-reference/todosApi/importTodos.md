---
name: importTodos
cbbaseinfo:
  description: Call importTodos on the Plugin SDK todosApi module.
cbparameters:
  parameters:
    - name: data
      typeName: ImportTodosRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TodoItem[]>"
    description: ""
data:
  name: importTodos
  category: todosApi
  link: importTodos.md
---
# importTodos

```typescript
plugin.todosApi.importTodos(data: ImportTodosRequest): Promise<TodoItem[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ImportTodosRequest` |  |

## Returns

**`Promise<TodoItem[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todosApi.importTodos(/* ImportTodosRequest */);
```
