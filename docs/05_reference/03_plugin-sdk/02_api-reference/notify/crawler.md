---
name: crawler
cbbaseinfo:
  description: Call crawler on the Plugin SDK notify module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: crawler
  category: notify
  link: crawler.md
---
# crawler

```typescript
plugin.notify.crawler(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.notify.crawler();
```
