---
name: listJobsByPheromone
cbbaseinfo:
  description: Call listJobsByPheromone on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: type
      typeName: string
      description: ""
      isOptional: false
    - name: minIntensity
      typeName: number
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<JobPheromoneSearchResponse>"
    description: ""
data:
  name: listJobsByPheromone
  category: job
  link: listJobsByPheromone.md
---
# listJobsByPheromone

```typescript
plugin.job.listJobsByPheromone(type: string, minIntensity?: number): Promise<JobPheromoneSearchResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `type` | `string` |  |
| `minIntensity` | `number` _(optional)_ |  |

## Returns

**`Promise<JobPheromoneSearchResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.listJobsByPheromone('type');
```
