---
name: createThread
cbbaseinfo:
  description: Call createThread on the Plugin SDK todosApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateTodoThreadRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TodoList>"
    description: ""
data:
  name: createThread
  category: todosApi
  link: createThread.md
---
# createThread

```typescript
plugin.todosApi.createThread(data: CreateTodoThreadRequest): Promise<TodoList>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateTodoThreadRequest` |  |

## Returns

**`Promise<TodoList>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todosApi.createThread(/* CreateTodoThreadRequest */);
```
