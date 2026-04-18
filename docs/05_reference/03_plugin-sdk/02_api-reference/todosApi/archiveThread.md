---
title: archiveThread
---

# `archiveThread`

```typescript
plugin.todosApi.archiveThread(threadId: string): Promise<void>
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

const result = await plugin.todosApi.archiveThread('threadId');
console.log(result);
```
