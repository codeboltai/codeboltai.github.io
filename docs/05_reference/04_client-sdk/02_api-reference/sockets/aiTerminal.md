---
name: aiTerminal
cbbaseinfo:
  description: Call aiTerminal on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: aiTerminal
  category: sockets
  link: aiTerminal.md
---
# aiTerminal

```typescript
client.sockets.aiTerminal(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.aiTerminal();
```
