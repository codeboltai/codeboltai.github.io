---
name: capability
cbbaseinfo:
  description: Call capability on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: capability
  category: sockets
  link: capability.md
---
# capability

```typescript
client.sockets.capability(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.capability();
```
