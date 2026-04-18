---
name: mcp
cbbaseinfo:
  description: Call mcp on the Plugin SDK notify module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: mcp
  category: notify
  link: mcp.md
---
# mcp

```typescript
plugin.notify.mcp(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.notify.mcp();
```
