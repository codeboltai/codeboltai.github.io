---
name: codeutils
cbbaseinfo:
  description: Call codeutils on the Plugin SDK notify module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: codeutils
  category: notify
  link: codeutils.md
---
# codeutils

```typescript
plugin.notify.codeutils(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.notify.codeutils();
```
