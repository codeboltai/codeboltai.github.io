---
name: todo
cbbaseinfo:
  description: Call todo on the Plugin SDK notify module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: todo
  category: notify
  link: todo.md
---
# todo

```typescript
plugin.notify.todo(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.notify.todo();
```
