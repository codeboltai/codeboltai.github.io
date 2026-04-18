---
name: fileUpdateIntent
cbbaseinfo:
  description: Call fileUpdateIntent on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: fileUpdateIntent
  category: sockets
  link: fileUpdateIntent.md
---
# fileUpdateIntent

```typescript
client.sockets.fileUpdateIntent(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.fileUpdateIntent();
```
