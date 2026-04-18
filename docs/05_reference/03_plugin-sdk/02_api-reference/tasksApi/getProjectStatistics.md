---
title: getProjectStatistics
---

# `getProjectStatistics`

```typescript
plugin.tasksApi.getProjectStatistics(): Promise<TaskStatistics>
```

Retrieves statistics for tasks in the current project.

Returns aggregated statistics specific to the current project context,
including task counts by status, priority distribution, and other
project-specific metrics. Ideal for project dashboards.

## Parameters

_No parameters._

## Returns

`Promise<TaskStatistics>` — A promise that resolves to TaskStatistics for the current project

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.tasksApi.getProjectStatistics();
console.log(result);
```
