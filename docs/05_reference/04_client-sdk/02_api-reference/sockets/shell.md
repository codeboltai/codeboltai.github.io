---
name: shell
cbbaseinfo:
  description: Call shell on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: shell
  category: sockets
  link: shell.md
---
# shell

```typescript
client.sockets.shell(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.shell();
```
