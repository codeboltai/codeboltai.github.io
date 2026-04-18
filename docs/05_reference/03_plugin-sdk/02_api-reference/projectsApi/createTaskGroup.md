---
title: createTaskGroup
---

# `createTaskGroup`

```typescript
plugin.projectsApi.createTaskGroup(data: CreateTaskGroupRequest): Promise<TaskGroup>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateTaskGroupRequest` | Yes |  |

## Returns

`Promise<TaskGroup>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.createTaskGroup(/* CreateTaskGroupRequest */);
console.log(result);
```
