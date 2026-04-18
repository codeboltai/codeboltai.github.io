---
name: create
cbbaseinfo:
  description: Call create on the Plugin SDK todosApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateTodoRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TodoItem>"
    description: ""
data:
  name: create
  category: todosApi
  link: create.md
---
# create

```typescript
plugin.todosApi.create(data: CreateTodoRequest): Promise<TodoItem>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateTodoRequest` |  |

## Returns

**`Promise<TodoItem>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todosApi.create(/* CreateTodoRequest */);
```
