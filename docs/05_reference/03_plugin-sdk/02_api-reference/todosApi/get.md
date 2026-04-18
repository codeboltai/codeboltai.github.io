---
name: get
cbbaseinfo:
  description: Call get on the Plugin SDK todosApi module.
cbparameters:
  parameters:
    - name: todoId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TodoItem>"
    description: ""
data:
  name: get
  category: todosApi
  link: get.md
---
# get

```typescript
plugin.todosApi.get(todoId: string): Promise<TodoItem>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `todoId` | `string` |  |

## Returns

**`Promise<TodoItem>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todosApi.get('todoId');
```
