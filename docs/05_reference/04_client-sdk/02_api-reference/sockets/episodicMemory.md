---
name: episodicMemory
cbbaseinfo:
  description: Call episodicMemory on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: episodicMemory
  category: sockets
  link: episodicMemory.md
---
# episodicMemory

```typescript
client.sockets.episodicMemory(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.episodicMemory();
```
