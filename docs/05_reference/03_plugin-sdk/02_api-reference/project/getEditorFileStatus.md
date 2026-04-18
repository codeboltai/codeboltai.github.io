---
name: getEditorFileStatus
cbbaseinfo:
  description: Call getEditorFileStatus on the Plugin SDK project module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<any>"
    description: ""
data:
  name: getEditorFileStatus
  category: project
  link: getEditorFileStatus.md
---
# getEditorFileStatus

```typescript
plugin.project.getEditorFileStatus(): Promise<any>
```



## Parameters

_None_

## Returns

**`Promise<any>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.project.getEditorFileStatus();
```
