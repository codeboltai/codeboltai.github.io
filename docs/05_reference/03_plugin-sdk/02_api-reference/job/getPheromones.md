---
name: getPheromones
cbbaseinfo:
  description: Call getPheromones on the Plugin SDK job module.
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
  name: getPheromones
  category: job
  link: getPheromones.md
---
# getPheromones

```typescript
plugin.job.getPheromones(jobId: string): Promise<JobPheromoneListResponse>
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

await plugin.job.getPheromones('jobId');
```
