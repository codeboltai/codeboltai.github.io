---
title: getThreadsForGroup
---

# `getThreadsForGroup`

```typescript
plugin.projectsApi.getThreadsForGroup(groupId: string): Promise<string[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `groupId` | `string` | Yes |  |

## Returns

`Promise<string[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.getThreadsForGroup('groupId');
console.log(result);
```
