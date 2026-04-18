---
name: getStatistics
cbbaseinfo:
  description: "Retrieves overall task statistics across all projects.

Returns aggregated statistics including total task counts, status
distribution, and other metrics. Use this for dashboard displays or
high-level reporting on task activity across the entire platform."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<TaskStatistics>"
    description: A promise that resolves to TaskStatistics containing overview metrics
data:
  name: getStatistics
  category: tasksApi
  link: getStatistics.md
---
# getStatistics

```typescript
plugin.tasksApi.getStatistics(): Promise<TaskStatistics>
```

Retrieves overall task statistics across all projects.

Returns aggregated statistics including total task counts, status
distribution, and other metrics. Use this for dashboard displays or
high-level reporting on task activity across the entire platform.

## Parameters

_None_

## Returns

**`Promise<TaskStatistics>`** — A promise that resolves to TaskStatistics containing overview metrics

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.tasksApi.getStatistics();
```
