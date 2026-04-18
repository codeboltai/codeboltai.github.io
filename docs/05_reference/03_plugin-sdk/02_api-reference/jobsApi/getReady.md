---
title: getReady
---

# `getReady`

```typescript
plugin.jobsApi.getReady(): Promise<Job[]>
```



## Parameters

_No parameters._

## Returns

`Promise<Job[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.getReady();
console.log(result);
```
