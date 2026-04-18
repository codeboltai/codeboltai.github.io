---
name: deletePheromoneType
cbbaseinfo:
  description: Call deletePheromoneType on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: deletePheromoneType
  category: jobsApi
  link: deletePheromoneType.md
---
# deletePheromoneType

```typescript
plugin.jobsApi.deletePheromoneType(name: string): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.deletePheromoneType('name');
```
