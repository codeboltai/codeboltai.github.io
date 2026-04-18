---
name: deleteAllCompleted
cbbaseinfo:
  description: Call deleteAllCompleted on the Plugin SDK todosApi module.
cbparameters:
  parameters:
    - name: params
      typeName: TodoListParams
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: deleteAllCompleted
  category: todosApi
  link: deleteAllCompleted.md
---
# deleteAllCompleted

```typescript
plugin.todosApi.deleteAllCompleted(params?: TodoListParams): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `TodoListParams` _(optional)_ |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todosApi.deleteAllCompleted();
```
