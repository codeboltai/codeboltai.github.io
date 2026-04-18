---
title: bulkCreate
---

# `bulkCreate`

```typescript
plugin.todosApi.bulkCreate(data: BulkCreateTodosRequest): Promise<TodoItem[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `BulkCreateTodosRequest` | Yes |  |

## Returns

`Promise<TodoItem[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todosApi.bulkCreate(/* BulkCreateTodosRequest */);
console.log(result);
```
