---
name: dbmemory
cbbaseinfo:
  description: Call dbmemory on the Plugin SDK notify module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: dbmemory
  category: notify
  link: dbmemory.md
---
# dbmemory

```typescript
plugin.notify.dbmemory(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.notify.dbmemory();
```
