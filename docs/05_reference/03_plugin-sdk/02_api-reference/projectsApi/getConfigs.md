---
name: getConfigs
cbbaseinfo:
  description: Call getConfigs on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ProjectConfig>"
    description: ""
data:
  name: getConfigs
  category: projectsApi
  link: getConfigs.md
---
# getConfigs

```typescript
plugin.projectsApi.getConfigs(): Promise<ProjectConfig>
```



## Parameters

_None_

## Returns

**`Promise<ProjectConfig>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.getConfigs();
```
