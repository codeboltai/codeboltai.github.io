---
name: lsp
cbbaseinfo:
  description: Call lsp on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: lsp
  category: sockets
  link: lsp.md
---
# lsp

```typescript
client.sockets.lsp(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.lsp();
```
