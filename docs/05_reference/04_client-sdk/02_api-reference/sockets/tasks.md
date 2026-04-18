---
name: tasks
cbbaseinfo:
  description: Call tasks on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: tasks
  category: sockets
  link: tasks.md
---
# tasks

```typescript
client.sockets.tasks(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.tasks();
```
