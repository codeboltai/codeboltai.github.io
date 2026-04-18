---
name: reviewMerge
cbbaseinfo:
  description: Call reviewMerge on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: reviewMerge
  category: sockets
  link: reviewMerge.md
---
# reviewMerge

```typescript
client.sockets.reviewMerge(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.reviewMerge();
```
