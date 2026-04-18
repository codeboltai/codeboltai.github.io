---
name: depositPheromone
cbbaseinfo:
  description: Call depositPheromone on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobId
      typeName: string
      description: ""
      isOptional: false
    - name: deposit
      typeName: DepositPheromoneData
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobPheromoneDepositResponse>"
    description: ""
data:
  name: depositPheromone
  category: job
  link: depositPheromone.md
---
# depositPheromone

```typescript
plugin.job.depositPheromone(jobId: string, deposit: DepositPheromoneData): Promise<JobPheromoneDepositResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobId` | `string` |  |
| `deposit` | `DepositPheromoneData` |  |

## Returns

**`Promise<JobPheromoneDepositResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.depositPheromone('jobId', /* DepositPheromoneData */);
```
