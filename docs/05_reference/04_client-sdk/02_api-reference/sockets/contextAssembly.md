---
name: contextAssembly
cbbaseinfo:
  description: Call contextAssembly on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: contextAssembly
  category: sockets
  link: contextAssembly.md
---
# contextAssembly

```typescript
client.sockets.contextAssembly(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.contextAssembly();
```
