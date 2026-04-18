---
name: addDependency
cbbaseinfo:
  description: Call addDependency on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: AddDependencyRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: addDependency
  category: jobsApi
  link: addDependency.md
---
# addDependency

```typescript
plugin.jobsApi.addDependency(id: string, data: AddDependencyRequest): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `AddDependencyRequest` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.addDependency('id', /* AddDependencyRequest */);
```
