---
name: getTaskGroups
cbbaseinfo:
  description: Call getTaskGroups on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<TaskGroup[]>"
    description: ""
data:
  name: getTaskGroups
  category: projectsApi
  link: getTaskGroups.md
---
# getTaskGroups

```typescript
plugin.projectsApi.getTaskGroups(): Promise<TaskGroup[]>
```



## Parameters

_None_

## Returns

**`Promise<TaskGroup[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.getTaskGroups();
```
