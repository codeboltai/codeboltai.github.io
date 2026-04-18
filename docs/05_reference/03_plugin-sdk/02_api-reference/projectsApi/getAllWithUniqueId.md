---
name: getAllWithUniqueId
cbbaseinfo:
  description: Call getAllWithUniqueId on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: GetAllProjectsRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<Project[]>"
    description: ""
data:
  name: getAllWithUniqueId
  category: projectsApi
  link: getAllWithUniqueId.md
---
# getAllWithUniqueId

```typescript
plugin.projectsApi.getAllWithUniqueId(data: GetAllProjectsRequest): Promise<Project[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GetAllProjectsRequest` |  |

## Returns

**`Promise<Project[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.getAllWithUniqueId(/* GetAllProjectsRequest */);
```
