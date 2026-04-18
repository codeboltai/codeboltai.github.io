---
title: getStatistics
---

# `getStatistics`

```typescript
plugin.threadsApi.getStatistics(): Promise<ThreadStatistics>
```

Retrieves statistics about threads in the system.

Returns aggregated metrics including total thread counts, status distributions,
and other statistical data. Use this to gain insights into thread activity
and system performance.

## Parameters

_No parameters._

## Returns

`Promise<ThreadStatistics>` — A promise that resolves to ThreadStatistics containing various metrics

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.threadsApi.getStatistics();
console.log(result);
```
