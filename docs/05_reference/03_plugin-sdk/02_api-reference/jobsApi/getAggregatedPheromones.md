---
name: getAggregatedPheromones
cbbaseinfo:
  description: Call getAggregatedPheromones on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<Record<string, unknown>>"
    description: ""
data:
  name: getAggregatedPheromones
  category: jobsApi
  link: getAggregatedPheromones.md
---
# getAggregatedPheromones

```typescript
plugin.jobsApi.getAggregatedPheromones(id: string): Promise<Record<string, unknown>>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<Record<string, unknown>>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.getAggregatedPheromones('id');
```
