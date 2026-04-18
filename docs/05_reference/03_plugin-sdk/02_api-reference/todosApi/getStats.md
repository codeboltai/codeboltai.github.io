---
name: getStats
cbbaseinfo:
  description: Call getStats on the Plugin SDK todosApi module.
cbparameters:
  parameters:
    - name: params
      typeName: TodoListParams
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<TodoStats>"
    description: ""
data:
  name: getStats
  category: todosApi
  link: getStats.md
---
# getStats

```typescript
plugin.todosApi.getStats(params?: TodoListParams): Promise<TodoStats>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `TodoListParams` _(optional)_ |  |

## Returns

**`Promise<TodoStats>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todosApi.getStats();
```
