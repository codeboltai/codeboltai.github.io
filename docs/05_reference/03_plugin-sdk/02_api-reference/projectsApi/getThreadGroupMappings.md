---
name: getThreadGroupMappings
cbbaseinfo:
  description: Call getThreadGroupMappings on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ThreadGroupMapping[]>"
    description: ""
data:
  name: getThreadGroupMappings
  category: projectsApi
  link: getThreadGroupMappings.md
---
# getThreadGroupMappings

```typescript
plugin.projectsApi.getThreadGroupMappings(): Promise<ThreadGroupMapping[]>
```



## Parameters

_None_

## Returns

**`Promise<ThreadGroupMapping[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.getThreadGroupMappings();
```
