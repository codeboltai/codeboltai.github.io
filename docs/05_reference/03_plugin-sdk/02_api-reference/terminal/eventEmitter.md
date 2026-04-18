---
name: eventEmitter
cbbaseinfo:
  description: Call eventEmitter on the Plugin SDK terminal module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: eventEmitter
  category: terminal
  link: eventEmitter.md
---
# eventEmitter

```typescript
plugin.terminal.eventEmitter(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.terminal.eventEmitter();
```
