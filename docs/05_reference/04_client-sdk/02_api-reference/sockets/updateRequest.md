---
name: updateRequest
cbbaseinfo:
  description: Call updateRequest on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: updateRequest
  category: sockets
  link: updateRequest.md
---
# updateRequest

```typescript
client.sockets.updateRequest(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.updateRequest();
```
