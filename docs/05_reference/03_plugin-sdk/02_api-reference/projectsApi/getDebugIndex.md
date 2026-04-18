---
name: getDebugIndex
cbbaseinfo:
  description: Call getDebugIndex on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: getDebugIndex
  category: projectsApi
  link: getDebugIndex.md
---
# getDebugIndex

```typescript
plugin.projectsApi.getDebugIndex(): Promise<unknown>
```



## Parameters

_None_

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.getDebugIndex();
```
