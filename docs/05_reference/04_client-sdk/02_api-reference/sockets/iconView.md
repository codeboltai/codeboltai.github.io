---
name: iconView
cbbaseinfo:
  description: Call iconView on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: iconView
  category: sockets
  link: iconView.md
---
# iconView

```typescript
client.sockets.iconView(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.iconView();
```
