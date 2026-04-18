---
name: backgroundAgent
cbbaseinfo:
  description: Call backgroundAgent on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: backgroundAgent
  category: sockets
  link: backgroundAgent.md
---
# backgroundAgent

```typescript
client.sockets.backgroundAgent(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.backgroundAgent();
```
