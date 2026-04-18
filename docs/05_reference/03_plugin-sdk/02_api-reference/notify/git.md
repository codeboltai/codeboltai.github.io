---
name: git
cbbaseinfo:
  description: Call git on the Plugin SDK notify module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: git
  category: notify
  link: git.md
---
# git

```typescript
plugin.notify.git(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.notify.git();
```
