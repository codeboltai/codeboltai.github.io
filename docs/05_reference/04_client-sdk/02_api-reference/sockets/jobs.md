---
name: jobs
cbbaseinfo:
  description: Call jobs on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: jobs
  category: sockets
  link: jobs.md
---
# jobs

```typescript
client.sockets.jobs(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.jobs();
```
