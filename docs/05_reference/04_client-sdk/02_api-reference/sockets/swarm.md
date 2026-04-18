---
name: swarm
cbbaseinfo:
  description: Call swarm on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: swarm
  category: sockets
  link: swarm.md
---
# swarm

```typescript
client.sockets.swarm(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.swarm();
```
