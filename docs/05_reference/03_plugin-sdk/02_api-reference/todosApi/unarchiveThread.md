---
title: unarchiveThread
---

# `unarchiveThread`

```typescript
plugin.todosApi.unarchiveThread(threadId: string): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.todosApi.unarchiveThread('threadId');
console.log(result);
```
