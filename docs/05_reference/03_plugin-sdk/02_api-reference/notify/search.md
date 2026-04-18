---
name: search
cbbaseinfo:
  description: Call search on the Plugin SDK notify module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: search
  category: notify
  link: search.md
---
# search

```typescript
plugin.notify.search(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.notify.search();
```
