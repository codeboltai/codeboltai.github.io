---
name: persistentMemory
cbbaseinfo:
  description: Call persistentMemory on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: persistentMemory
  category: sockets
  link: persistentMemory.md
---
# persistentMemory

```typescript
client.sockets.persistentMemory(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.persistentMemory();
```
