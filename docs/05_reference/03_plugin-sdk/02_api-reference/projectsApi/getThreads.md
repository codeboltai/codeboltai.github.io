---
name: getThreads
cbbaseinfo:
  description: Call getThreads on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<unknown[]>"
    description: ""
data:
  name: getThreads
  category: projectsApi
  link: getThreads.md
---
# getThreads

```typescript
plugin.projectsApi.getThreads(): Promise<unknown[]>
```



## Parameters

_None_

## Returns

**`Promise<unknown[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.getThreads();
```
