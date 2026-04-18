---
title: addDependency
---

# `addDependency`

```typescript
plugin.job.addDependency(jobId: string, targetId: string, type?: DependencyType): Promise<JobDependencyResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `targetId` | `string` | Yes |  |
| `type` | `DependencyType` | No |  |

## Returns

`Promise<JobDependencyResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.addDependency('jobId', 'targetId');
console.log(result);
```
