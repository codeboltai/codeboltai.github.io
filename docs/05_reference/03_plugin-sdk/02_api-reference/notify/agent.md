---
name: agent
cbbaseinfo:
  description: Call agent on the Plugin SDK notify module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: agent
  category: notify
  link: agent.md
---
# agent

```typescript
plugin.notify.agent(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.notify.agent();
```
