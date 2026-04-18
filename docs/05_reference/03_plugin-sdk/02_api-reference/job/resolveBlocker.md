---
title: resolveBlocker
---

# `resolveBlocker`

```typescript
plugin.job.resolveBlocker(jobId: string, blockerId: string, resolvedBy: string): Promise<JobBlockerResolveResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `blockerId` | `string` | Yes |  |
| `resolvedBy` | `string` | Yes |  |

## Returns

`Promise<JobBlockerResolveResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.resolveBlocker('jobId', 'blockerId', 'resolvedBy');
console.log(result);
```
