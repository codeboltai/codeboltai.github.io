---
name: browser
cbbaseinfo:
  description: Call browser on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: browser
  category: sockets
  link: browser.md
---
# browser

```typescript
client.sockets.browser(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.browser();
```
