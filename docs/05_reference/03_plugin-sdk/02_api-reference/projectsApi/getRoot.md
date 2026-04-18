---
name: getRoot
cbbaseinfo:
  description: Call getRoot on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<Project>"
    description: ""
data:
  name: getRoot
  category: projectsApi
  link: getRoot.md
---
# getRoot

```typescript
plugin.projectsApi.getRoot(): Promise<Project>
```



## Parameters

_None_

## Returns

**`Promise<Project>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.getRoot();
```
