---
name: orchestrator
cbbaseinfo:
  description: Call orchestrator on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: orchestrator
  category: sockets
  link: orchestrator.md
---
# orchestrator

```typescript
client.sockets.orchestrator(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.orchestrator();
```
