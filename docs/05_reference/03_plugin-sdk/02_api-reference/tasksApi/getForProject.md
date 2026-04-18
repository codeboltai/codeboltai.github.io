---
title: getForProject
---

# `getForProject`

```typescript
plugin.tasksApi.getForProject(projectPath: string): Promise<Task[]>
```

Retrieves all tasks for a specific project path.

Returns tasks that belong to the project identified by its filesystem
path. This allows accessing tasks from any project regardless of the
current working directory context.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `projectPath` | `string` | Yes | The filesystem path identifying the target project |

## Returns

`Promise<Task[]>` — A promise that resolves to an array of Task objects for the specified project

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.tasksApi.getForProject('projectPath');
console.log(result);
```
