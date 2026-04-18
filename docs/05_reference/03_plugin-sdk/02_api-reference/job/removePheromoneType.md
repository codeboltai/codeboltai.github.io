---
name: removePheromoneType
cbbaseinfo:
  description: Call removePheromoneType on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobPheromoneTypeResponse>"
    description: ""
data:
  name: removePheromoneType
  category: job
  link: removePheromoneType.md
---
# removePheromoneType

```typescript
plugin.job.removePheromoneType(name: string): Promise<JobPheromoneTypeResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` |  |

## Returns

**`Promise<JobPheromoneTypeResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.removePheromoneType('name');
```
