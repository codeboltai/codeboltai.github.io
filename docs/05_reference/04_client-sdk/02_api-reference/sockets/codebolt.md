---
name: codebolt
cbbaseinfo:
  description: Call codebolt on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: codebolt
  category: sockets
  link: codebolt.md
---
# codebolt

```typescript
client.sockets.codebolt(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.codebolt();
```
