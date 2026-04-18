---
title: getForCurrentProject
---

# `getForCurrentProject`

```typescript
plugin.tasksApi.getForCurrentProject(): Promise<Task[]>
```

Retrieves all tasks associated with the current project.

Returns tasks that belong to the currently active project context.
This is useful for project-specific task views and when you need to
operate on tasks within the current working project.

## Parameters

_No parameters._

## Returns

`Promise<Task[]>` — A promise that resolves to an array of Task objects for the current project

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.tasksApi.getForCurrentProject();
console.log(result);
```
