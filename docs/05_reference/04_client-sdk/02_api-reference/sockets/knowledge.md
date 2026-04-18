---
name: knowledge
cbbaseinfo:
  description: Call knowledge on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: knowledge
  category: sockets
  link: knowledge.md
---
# knowledge

```typescript
client.sockets.knowledge(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.knowledge();
```
