---
name: getPheromoneTypes
cbbaseinfo:
  description: Call getPheromoneTypes on the Plugin SDK job module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<JobPheromoneTypesResponse>"
    description: ""
data:
  name: getPheromoneTypes
  category: job
  link: getPheromoneTypes.md
---
# getPheromoneTypes

```typescript
plugin.job.getPheromoneTypes(): Promise<JobPheromoneTypesResponse>
```



## Parameters

_None_

## Returns

**`Promise<JobPheromoneTypesResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.getPheromoneTypes();
```
