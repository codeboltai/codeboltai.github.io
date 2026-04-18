---
name: localModel
cbbaseinfo:
  description: Call localModel on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: localModel
  category: sockets
  link: localModel.md
---
# localModel

```typescript
client.sockets.localModel(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.localModel();
```
