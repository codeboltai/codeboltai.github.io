---
title: removeBlocker
---

# `removeBlocker`

```typescript
plugin.job.removeBlocker(jobId: string, blockerId: string): Promise<JobBlockerRemoveResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `blockerId` | `string` | Yes |  |

## Returns

`Promise<JobBlockerRemoveResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.removeBlocker('jobId', 'blockerId');
console.log(result);
```
