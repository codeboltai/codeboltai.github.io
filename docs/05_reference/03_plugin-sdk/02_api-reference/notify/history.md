---
name: history
cbbaseinfo:
  description: Call history on the Plugin SDK notify module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: history
  category: notify
  link: history.md
---
# history

```typescript
plugin.notify.history(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.notify.history();
```
