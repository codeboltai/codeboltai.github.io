---
title: addUnlockRequest
---

# `addUnlockRequest`

```typescript
plugin.job.addUnlockRequest(jobId: string, request: AddUnlockRequestData): Promise<JobUnlockRequestAddResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `request` | `AddUnlockRequestData` | Yes |  |

## Returns

`Promise<JobUnlockRequestAddResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.addUnlockRequest('jobId', /* AddUnlockRequestData */);
console.log(result);
```
