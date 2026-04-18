---
name: bulkCreate
cbbaseinfo:
  description: Call bulkCreate on the Plugin SDK todosApi module.
cbparameters:
  parameters:
    - name: data
      typeName: BulkCreateTodosRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TodoItem[]>"
    description: ""
data:
  name: bulkCreate
  category: todosApi
  link: bulkCreate.md
---
# bulkCreate

```typescript
plugin.todosApi.bulkCreate(data: BulkCreateTodosRequest): Promise<TodoItem[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `BulkCreateTodosRequest` |  |

## Returns

**`Promise<TodoItem[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.todosApi.bulkCreate(/* BulkCreateTodosRequest */);
```
