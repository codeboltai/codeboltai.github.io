---
title: removeDependency
---

# `removeDependency`

```typescript
plugin.job.removeDependency(jobId: string, targetId: string): Promise<JobDependencyResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `targetId` | `string` | Yes |  |

## Returns

`Promise<JobDependencyResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.removeDependency('jobId', 'targetId');
console.log(result);
```
