---
name: agentPortfolio
cbbaseinfo:
  description: Call agentPortfolio on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: agentPortfolio
  category: sockets
  link: agentPortfolio.md
---
# agentPortfolio

```typescript
client.sockets.agentPortfolio(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.agentPortfolio();
```
