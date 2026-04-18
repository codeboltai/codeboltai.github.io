---
name: getPheromones
cbbaseinfo:
  description: Call getPheromones on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<Pheromone[]>"
    description: ""
data:
  name: getPheromones
  category: jobsApi
  link: getPheromones.md
---
# getPheromones

```typescript
plugin.jobsApi.getPheromones(id: string): Promise<Pheromone[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<Pheromone[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.getPheromones('id');
```
