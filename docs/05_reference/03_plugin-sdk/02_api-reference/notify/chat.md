---
name: chat
cbbaseinfo:
  description: Call chat on the Plugin SDK notify module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: chat
  category: notify
  link: chat.md
---
# chat

```typescript
plugin.notify.chat(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.notify.chat();
```
