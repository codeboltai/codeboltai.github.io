---
name: resetProject
cbbaseinfo:
  description: Call resetProject on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: ResetProjectRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: resetProject
  category: projectsApi
  link: resetProject.md
---
# resetProject

```typescript
plugin.projectsApi.resetProject(data: ResetProjectRequest): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ResetProjectRequest` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.resetProject(/* ResetProjectRequest */);
```
