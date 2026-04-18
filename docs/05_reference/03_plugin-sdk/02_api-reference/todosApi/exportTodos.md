---
name: exportTodos
cbbaseinfo:
  description: Call exportTodos on the Plugin SDK todosApi module.
cbparameters:
  parameters:
    - name: params
      typeName: TodoExportParams
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: exportTodos
  category: todosApi
  link: exportTodos.md
---
# exportTodos

```typescript
plugin.todosApi.exportTodos(params?: TodoExportParams): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `TodoExportParams` _(optional)_ |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todosApi.exportTodos();
```
