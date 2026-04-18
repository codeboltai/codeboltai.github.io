---
title: getStatistics
---

# `getStatistics`

```typescript
plugin.tasksApi.getStatistics(): Promise<TaskStatistics>
```

Retrieves overall task statistics across all projects.

Returns aggregated statistics including total task counts, status
distribution, and other metrics. Use this for dashboard displays or
high-level reporting on task activity across the entire platform.

## Parameters

_No parameters._

## Returns

`Promise<TaskStatistics>` — A promise that resolves to TaskStatistics containing overview metrics

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.tasksApi.getStatistics();
console.log(result);
```
