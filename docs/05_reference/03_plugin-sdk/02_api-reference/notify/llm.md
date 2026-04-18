---
name: llm
cbbaseinfo:
  description: Call llm on the Plugin SDK notify module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: llm
  category: notify
  link: llm.md
---
# llm

```typescript
plugin.notify.llm(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.notify.llm();
```
