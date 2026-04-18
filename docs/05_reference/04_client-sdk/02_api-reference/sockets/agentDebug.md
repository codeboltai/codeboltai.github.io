---
name: agentDebug
cbbaseinfo:
  description: Call agentDebug on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: agentDebug
  category: sockets
  link: agentDebug.md
---
# agentDebug

```typescript
client.sockets.agentDebug(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.agentDebug();
```
