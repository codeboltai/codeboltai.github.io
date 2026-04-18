---
name: systemAlert
cbbaseinfo:
  description: Call systemAlert on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: systemAlert
  category: sockets
  link: systemAlert.md
---
# systemAlert

```typescript
client.sockets.systemAlert(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.systemAlert();
```
