---
name: stopAllProcesses
cbbaseinfo:
  description: "Stops all running terminal processes.

Terminates every currently active terminal process in the system.
Use this for cleanup operations or when shutting down the platform
to ensure no orphaned processes remain."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when all processes have been stopped
data:
  name: stopAllProcesses
  category: terminalProcesses
  link: stopAllProcesses.md
---
# stopAllProcesses

```typescript
client.terminalProcesses.stopAllProcesses(): Promise<unknown>
```

Stops all running terminal processes.

Terminates every currently active terminal process in the system.
Use this for cleanup operations or when shutting down the platform
to ensure no orphaned processes remain.

## Parameters

_None_

## Returns

**`Promise<unknown>`** — A promise that resolves when all processes have been stopped

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.terminalProcesses.stopAllProcesses();
```
