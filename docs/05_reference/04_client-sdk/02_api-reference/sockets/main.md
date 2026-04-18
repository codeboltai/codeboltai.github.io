---
name: main
cbbaseinfo:
  description: Call main on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: main
  category: sockets
  link: main.md
---
# main

```typescript
client.sockets.main(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.main();
```
