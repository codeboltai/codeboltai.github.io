---
name: system
cbbaseinfo:
  description: Call system on the Plugin SDK notify module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: system
  category: notify
  link: system.md
---
# system

```typescript
plugin.notify.system(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.notify.system();
```
