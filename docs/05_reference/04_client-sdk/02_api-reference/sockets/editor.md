---
name: editor
cbbaseinfo:
  description: Call editor on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: editor
  category: sockets
  link: editor.md
---
# editor

```typescript
client.sockets.editor(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.editor();
```
