---
name: addPheromone
cbbaseinfo:
  description: Call addPheromone on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: PheromoneDepositRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<Pheromone>"
    description: ""
data:
  name: addPheromone
  category: jobsApi
  link: addPheromone.md
---
# addPheromone

```typescript
plugin.jobsApi.addPheromone(id: string, data: PheromoneDepositRequest): Promise<Pheromone>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `PheromoneDepositRequest` |  |

## Returns

**`Promise<Pheromone>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.addPheromone('id', /* PheromoneDepositRequest */);
```
