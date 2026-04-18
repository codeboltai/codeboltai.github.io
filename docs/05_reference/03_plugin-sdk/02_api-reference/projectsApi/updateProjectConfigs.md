---
name: updateProjectConfigs
cbbaseinfo:
  description: Call updateProjectConfigs on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: UpdateProjectConfigRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: updateProjectConfigs
  category: projectsApi
  link: updateProjectConfigs.md
---
# updateProjectConfigs

```typescript
plugin.projectsApi.updateProjectConfigs(data: UpdateProjectConfigRequest): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateProjectConfigRequest` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.updateProjectConfigs(/* UpdateProjectConfigRequest */);
```
