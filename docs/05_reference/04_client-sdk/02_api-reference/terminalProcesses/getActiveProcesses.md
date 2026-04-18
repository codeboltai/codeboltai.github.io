---
name: getActiveProcesses
cbbaseinfo:
  description: "Retrieves all currently active terminal processes.

Returns terminal processes that are currently running, including
their process IDs, commands, and status information. Use this to
monitor what shell operations are in progress."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<TerminalProcess[]>"
    description: A promise that resolves to an array of active TerminalProcess objects
data:
  name: getActiveProcesses
  category: terminalProcesses
  link: getActiveProcesses.md
---
# getActiveProcesses

```typescript
client.terminalProcesses.getActiveProcesses(): Promise<TerminalProcess[]>
```

Retrieves all currently active terminal processes.

Returns terminal processes that are currently running, including
their process IDs, commands, and status information. Use this to
monitor what shell operations are in progress.

## Parameters

_None_

## Returns

**`Promise<TerminalProcess[]>`** — A promise that resolves to an array of active TerminalProcess objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.terminalProcesses.getActiveProcesses();
```
