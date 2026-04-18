---
name: getPheromoneTypes
cbbaseinfo:
  description: Call getPheromoneTypes on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<PheromoneType[]>"
    description: ""
data:
  name: getPheromoneTypes
  category: jobsApi
  link: getPheromoneTypes.md
---
# getPheromoneTypes

```typescript
plugin.jobsApi.getPheromoneTypes(): Promise<PheromoneType[]>
```



## Parameters

_None_

## Returns

**`Promise<PheromoneType[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.getPheromoneTypes();
```
