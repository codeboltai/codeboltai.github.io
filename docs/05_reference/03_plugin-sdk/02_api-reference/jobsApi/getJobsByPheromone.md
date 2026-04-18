---
name: getJobsByPheromone
cbbaseinfo:
  description: Call getJobsByPheromone on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: type
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<Job[]>"
    description: ""
data:
  name: getJobsByPheromone
  category: jobsApi
  link: getJobsByPheromone.md
---
# getJobsByPheromone

```typescript
plugin.jobsApi.getJobsByPheromone(type: string): Promise<Job[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `type` | `string` |  |

## Returns

**`Promise<Job[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.getJobsByPheromone('type');
```
