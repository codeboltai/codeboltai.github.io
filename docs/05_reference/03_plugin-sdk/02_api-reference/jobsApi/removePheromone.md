---
name: removePheromone
cbbaseinfo:
  description: Call removePheromone on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: type
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: removePheromone
  category: jobsApi
  link: removePheromone.md
---
# removePheromone

```typescript
plugin.jobsApi.removePheromone(id: string, type: string): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `type` | `string` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.removePheromone('id', 'type');
```
