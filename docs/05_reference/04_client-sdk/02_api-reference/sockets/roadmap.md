---
name: roadmap
cbbaseinfo:
  description: Call roadmap on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: roadmap
  category: sockets
  link: roadmap.md
---
# roadmap

```typescript
client.sockets.roadmap(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.roadmap();
```
