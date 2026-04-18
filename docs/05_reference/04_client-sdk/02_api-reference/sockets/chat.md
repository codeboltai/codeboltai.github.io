---
name: chat
cbbaseinfo:
  description: Call chat on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: chat
  category: sockets
  link: chat.md
---
# chat

```typescript
client.sockets.chat(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.chat();
```
