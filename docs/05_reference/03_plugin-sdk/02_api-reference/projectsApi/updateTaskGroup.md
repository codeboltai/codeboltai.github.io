---
title: updateTaskGroup
---

# `updateTaskGroup`

```typescript
plugin.projectsApi.updateTaskGroup(groupId: string, data: UpdateTaskGroupRequest): Promise<TaskGroup>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `groupId` | `string` | Yes |  |
| `data` | `UpdateTaskGroupRequest` | Yes |  |

## Returns

`Promise<TaskGroup>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.updateTaskGroup('groupId', /* UpdateTaskGroupRequest */);
console.log(result);
```
