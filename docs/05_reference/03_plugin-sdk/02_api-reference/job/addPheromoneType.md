---
name: addPheromoneType
cbbaseinfo:
  description: Call addPheromoneType on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: data
      typeName: AddPheromoneTypeData
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobPheromoneTypeResponse>"
    description: ""
data:
  name: addPheromoneType
  category: job
  link: addPheromoneType.md
---
# addPheromoneType

```typescript
plugin.job.addPheromoneType(data: AddPheromoneTypeData): Promise<JobPheromoneTypeResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `AddPheromoneTypeData` |  |

## Returns

**`Promise<JobPheromoneTypeResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.addPheromoneType(/* AddPheromoneTypeData */);
```
