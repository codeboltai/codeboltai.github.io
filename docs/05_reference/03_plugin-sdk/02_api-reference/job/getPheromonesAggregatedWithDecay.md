---
name: getPheromonesAggregatedWithDecay
cbbaseinfo:
  description: Call getPheromonesAggregatedWithDecay on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobPheromoneAggregatedResponse>"
    description: ""
data:
  name: getPheromonesAggregatedWithDecay
  category: job
  link: getPheromonesAggregatedWithDecay.md
---
# getPheromonesAggregatedWithDecay

```typescript
plugin.job.getPheromonesAggregatedWithDecay(jobId: string): Promise<JobPheromoneAggregatedResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |

## Returns

**`Promise<JobPheromoneAggregatedResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.getPheromonesAggregatedWithDecay('jobId');
```
