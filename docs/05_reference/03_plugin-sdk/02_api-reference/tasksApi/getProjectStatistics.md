---
name: getProjectStatistics
cbbaseinfo:
  description: "Retrieves statistics for tasks in the current project.

Returns aggregated statistics specific to the current project context,
including task counts by status, priority distribution, and other
project-specific metrics. Ideal for project dashboards."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<TaskStatistics>"
    description: A promise that resolves to TaskStatistics for the current project
data:
  name: getProjectStatistics
  category: tasksApi
  link: getProjectStatistics.md
---
# getProjectStatistics

```typescript
plugin.tasksApi.getProjectStatistics(): Promise<TaskStatistics>
```

Retrieves statistics for tasks in the current project.

Returns aggregated statistics specific to the current project context,
including task counts by status, priority distribution, and other
project-specific metrics. Ideal for project dashboards.

## Parameters

_None_

## Returns

**`Promise<TaskStatistics>`** — A promise that resolves to TaskStatistics for the current project

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.tasksApi.getProjectStatistics();
```
