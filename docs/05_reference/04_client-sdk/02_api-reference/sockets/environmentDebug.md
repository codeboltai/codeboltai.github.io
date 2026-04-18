---
name: environmentDebug
cbbaseinfo:
  description: Call environmentDebug on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: environmentDebug
  category: sockets
  link: environmentDebug.md
---
# environmentDebug

```typescript
client.sockets.environmentDebug(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.environmentDebug();
```
