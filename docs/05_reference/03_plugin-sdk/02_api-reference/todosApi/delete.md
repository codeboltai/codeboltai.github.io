---
name: delete
cbbaseinfo:
  description: Call delete on the Plugin SDK todosApi module.
cbparameters:
  parameters:
    - name: todoId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: delete
  category: todosApi
  link: delete.md
---
# delete

```typescript
plugin.todosApi.delete(todoId: string): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `todoId` | `string` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todosApi.delete('todoId');
```
