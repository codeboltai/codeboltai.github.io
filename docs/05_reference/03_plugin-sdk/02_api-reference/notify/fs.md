---
name: fs
cbbaseinfo:
  description: Call fs on the Plugin SDK notify module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: fs
  category: notify
  link: fs.md
---
# fs

```typescript
plugin.notify.fs(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.notify.fs();
```
