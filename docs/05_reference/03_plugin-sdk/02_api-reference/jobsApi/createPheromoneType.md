---
name: createPheromoneType
cbbaseinfo:
  description: Call createPheromoneType on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreatePheromoneTypeRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<PheromoneType>"
    description: ""
data:
  name: createPheromoneType
  category: jobsApi
  link: createPheromoneType.md
---
# createPheromoneType

```typescript
plugin.jobsApi.createPheromoneType(data: CreatePheromoneTypeRequest): Promise<PheromoneType>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreatePheromoneTypeRequest` |  |

## Returns

**`Promise<PheromoneType>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.createPheromoneType(/* CreatePheromoneTypeRequest */);
```
