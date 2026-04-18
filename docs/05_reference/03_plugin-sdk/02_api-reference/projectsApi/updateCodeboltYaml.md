---
name: updateCodeboltYaml
cbbaseinfo:
  description: Call updateCodeboltYaml on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: UpdateCodeboltYamlRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: updateCodeboltYaml
  category: projectsApi
  link: updateCodeboltYaml.md
---
# updateCodeboltYaml

```typescript
plugin.projectsApi.updateCodeboltYaml(data: UpdateCodeboltYamlRequest): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateCodeboltYamlRequest` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.updateCodeboltYaml(/* UpdateCodeboltYamlRequest */);
```
