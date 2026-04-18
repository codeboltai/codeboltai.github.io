---
title: listLabels
---

# `listLabels`

```typescript
plugin.job.listLabels(): Promise<JobLabelsResponse>
```



## Parameters

_No parameters._

## Returns

`Promise<JobLabelsResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.listLabels();
console.log(result);
```
