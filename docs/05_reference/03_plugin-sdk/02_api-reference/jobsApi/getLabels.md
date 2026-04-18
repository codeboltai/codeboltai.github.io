---
title: getLabels
---

# `getLabels`

```typescript
plugin.jobsApi.getLabels(): Promise<JobLabel[]>
```



## Parameters

_No parameters._

## Returns

`Promise<JobLabel[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.getLabels();
console.log(result);
```
