---
name: getAll
cbbaseinfo:
  description: Call getAll on the Plugin SDK todosApi module.
cbparameters:
  parameters:
    - name: params
      typeName: TodoListParams
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<TodoItem[]>"
    description: ""
data:
  name: getAll
  category: todosApi
  link: getAll.md
---
# getAll

```typescript
plugin.todosApi.getAll(params?: TodoListParams): Promise<TodoItem[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `TodoListParams` _(optional)_ |  |

## Returns

**`Promise<TodoItem[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todosApi.getAll();
```
