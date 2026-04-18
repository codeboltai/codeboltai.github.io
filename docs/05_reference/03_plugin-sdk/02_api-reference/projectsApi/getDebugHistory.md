---
name: getDebugHistory
cbbaseinfo:
  description: Call getDebugHistory on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<unknown[]>"
    description: ""
data:
  name: getDebugHistory
  category: projectsApi
  link: getDebugHistory.md
---
# getDebugHistory

```typescript
plugin.projectsApi.getDebugHistory(): Promise<unknown[]>
```



## Parameters

_None_

## Returns

**`Promise<unknown[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.getDebugHistory();
```
