---
title: getThreadGroup
---

# `getThreadGroup`

```typescript
plugin.projectsApi.getThreadGroup(threadId: string): Promise<TaskGroup | null>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |

## Returns

`Promise<TaskGroup | null>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.getThreadGroup('threadId');
console.log(result);
```
