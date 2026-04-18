---
name: updateConfig
cbbaseinfo:
  description: Call updateConfig on the Plugin SDK projectsApi module.
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
  name: updateConfig
  category: projectsApi
  link: updateConfig.md
---
# updateConfig

```typescript
plugin.projectsApi.updateConfig(data: UpdateProjectConfigRequest): Promise<void>
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

await plugin.projectsApi.updateConfig(/* UpdateProjectConfigRequest */);
```
