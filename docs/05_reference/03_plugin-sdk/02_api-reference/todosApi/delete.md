---
title: delete
---

# `delete`

```typescript
plugin.todosApi.delete(todoId: string): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `todoId` | `string` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todosApi.delete('todoId');
console.log(result);
```
