---
title: getStatistics
---

# `getStatistics`

```typescript
plugin.jobsApi.getStatistics(): Promise<JobStatistics>
```



## Parameters

_No parameters._

## Returns

`Promise<JobStatistics>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.getStatistics();
console.log(result);
```
