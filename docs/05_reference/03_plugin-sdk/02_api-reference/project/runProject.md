---
name: runProject
cbbaseinfo:
  description: Call runProject on the Plugin SDK project module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: runProject
  category: project
  link: runProject.md
---
# runProject

```typescript
plugin.project.runProject(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.project.runProject();
```
