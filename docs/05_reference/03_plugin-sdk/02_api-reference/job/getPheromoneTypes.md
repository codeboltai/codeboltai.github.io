---
title: getPheromoneTypes
---

# `getPheromoneTypes`

```typescript
plugin.job.getPheromoneTypes(): Promise<JobPheromoneTypesResponse>
```



## Parameters

_No parameters._

## Returns

`Promise<JobPheromoneTypesResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.getPheromoneTypes();
console.log(result);
```
