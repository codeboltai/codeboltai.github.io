---
name: eventLog
cbbaseinfo:
  description: Call eventLog on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: eventLog
  category: sockets
  link: eventLog.md
---
# eventLog

```typescript
client.sockets.eventLog(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.eventLog();
```
