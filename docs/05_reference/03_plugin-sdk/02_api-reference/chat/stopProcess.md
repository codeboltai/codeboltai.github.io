---
name: stopProcess
cbbaseinfo:
  description: "Stops the ongoing process.
Sends a specific message to the server to stop the process."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: stopProcess
  category: chat
  link: stopProcess.md
---
# stopProcess

```typescript
plugin.chat.stopProcess(): void
```

Stops the ongoing process.
Sends a specific message to the server to stop the process.

## Parameters

_None_

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chat.stopProcess();
```
