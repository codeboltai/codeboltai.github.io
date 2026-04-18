---
title: getAll
---

# `getAll`

```typescript
plugin.jobsApi.getAll(params?: JobListFilters): Promise<Job[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `JobListFilters` | No |  |

## Returns

`Promise<Job[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.getAll();
console.log(result);
```
