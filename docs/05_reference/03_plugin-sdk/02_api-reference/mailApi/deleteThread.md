---
title: deleteThread
---

# `deleteThread`

```typescript
plugin.mailApi.deleteThread(threadId: string): Promise<void>
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

const result = await plugin.mailApi.deleteThread('threadId');
console.log(result);
```
