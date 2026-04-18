---
name: getPheromonesAggregated
cbbaseinfo:
  description: Call getPheromonesAggregated on the Plugin SDK job module.
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
  name: getPheromonesAggregated
  category: job
  link: getPheromonesAggregated.md
---
# getPheromonesAggregated

```typescript
plugin.job.getPheromonesAggregated(jobId: string): Promise<JobPheromoneAggregatedResponse>
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

await plugin.job.getPheromonesAggregated('jobId');
```
