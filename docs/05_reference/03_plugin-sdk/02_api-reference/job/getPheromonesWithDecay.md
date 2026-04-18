---
name: getPheromonesWithDecay
cbbaseinfo:
  description: Call getPheromonesWithDecay on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobPheromoneListResponse>"
    description: ""
data:
  name: getPheromonesWithDecay
  category: job
  link: getPheromonesWithDecay.md
---
# getPheromonesWithDecay

```typescript
plugin.job.getPheromonesWithDecay(jobId: string): Promise<JobPheromoneListResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |

## Returns

**`Promise<JobPheromoneListResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.getPheromonesWithDecay('jobId');
```
