---
name: browser
cbbaseinfo:
  description: Call browser on the Plugin SDK notify module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: browser
  category: notify
  link: browser.md
---
# browser

```typescript
plugin.notify.browser(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.notify.browser();
```
