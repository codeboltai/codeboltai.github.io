---
name: debug
cbbaseinfo:
  description: Call debug on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: debug
  category: sockets
  link: debug.md
---
# debug

```typescript
client.sockets.debug(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.debug();
```
