---
name: terminal
cbbaseinfo:
  description: Call terminal on the Plugin SDK notify module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: terminal
  category: notify
  link: terminal.md
---
# terminal

```typescript
plugin.notify.terminal(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.notify.terminal();
```
