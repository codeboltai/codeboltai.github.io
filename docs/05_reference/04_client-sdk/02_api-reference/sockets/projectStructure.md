---
name: projectStructure
cbbaseinfo:
  description: Call projectStructure on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: projectStructure
  category: sockets
  link: projectStructure.md
---
# projectStructure

```typescript
client.sockets.projectStructure(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.projectStructure();
```
