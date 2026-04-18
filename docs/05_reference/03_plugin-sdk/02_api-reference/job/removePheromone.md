---
name: removePheromone
cbbaseinfo:
  description: Call removePheromone on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
    - name: type
      typeName: string
      description: ""
      isOptional: false
    - name: depositedBy
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<JobPheromoneRemoveResponse>"
    description: ""
data:
  name: removePheromone
  category: job
  link: removePheromone.md
---
# removePheromone

```typescript
plugin.job.removePheromone(jobId: string, type: string, depositedBy?: string): Promise<JobPheromoneRemoveResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `type` | `string` |  |
| `depositedBy` | `string` _(optional)_ |  |

## Returns

**`Promise<JobPheromoneRemoveResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.removePheromone('jobId', 'type');
```
