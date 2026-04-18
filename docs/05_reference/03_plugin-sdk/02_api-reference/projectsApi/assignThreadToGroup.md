---
name: assignThreadToGroup
cbbaseinfo:
  description: Call assignThreadToGroup on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: AssignThreadToGroupRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: assignThreadToGroup
  category: projectsApi
  link: assignThreadToGroup.md
---
# assignThreadToGroup

```typescript
plugin.projectsApi.assignThreadToGroup(data: AssignThreadToGroupRequest): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `AssignThreadToGroupRequest` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.assignThreadToGroup(/* AssignThreadToGroupRequest */);
```
