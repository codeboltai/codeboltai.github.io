---
name: calendar
cbbaseinfo:
  description: Call calendar on the Client SDK sockets module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: calendar
  category: sockets
  link: calendar.md
---
# calendar

```typescript
client.sockets.calendar(): void
```



## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.sockets.calendar();
```
