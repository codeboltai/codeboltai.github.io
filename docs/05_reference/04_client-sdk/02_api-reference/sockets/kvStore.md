---
name: kvStore
cbbaseinfo:
  description: Call kvStore on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: kvStore
  category: sockets
  link: kvStore.md
---
# kvStore

```typescript
client.sockets.kvStore(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.kvStore();
```
