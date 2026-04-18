---
title: getGroups
---

# `getGroups`

```typescript
plugin.jobsApi.getGroups(): Promise<JobGroup[]>
```



## Parameters

_No parameters._

## Returns

`Promise<JobGroup[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.getGroups();
console.log(result);
```
