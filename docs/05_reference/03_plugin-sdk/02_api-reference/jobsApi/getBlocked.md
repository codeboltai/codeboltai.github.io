---
title: getBlocked
---

# `getBlocked`

```typescript
plugin.jobsApi.getBlocked(): Promise<Job[]>
```



## Parameters

_No parameters._

## Returns

`Promise<Job[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.getBlocked();
console.log(result);
```
