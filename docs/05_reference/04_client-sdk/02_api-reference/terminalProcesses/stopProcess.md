---
name: stopProcess
cbbaseinfo:
  description: "Stops a specific terminal process by its ID.

Sends a termination signal to the specified terminal process,
ending its execution gracefully if possible. The process will be
removed from the active process list."
cbparameters:
  parameters:
    - name: processId
      typeName: string
      description: The unique identifier of the terminal process to stop
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the process has been stopped
data:
  name: stopProcess
  category: terminalProcesses
  link: stopProcess.md
---
# stopProcess

```typescript
client.terminalProcesses.stopProcess(processId: string): Promise<unknown>
```

Stops a specific terminal process by its ID.

Sends a termination signal to the specified terminal process,
ending its execution gracefully if possible. The process will be
removed from the active process list.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `processId` | `string` | The unique identifier of the terminal process to stop |

## Returns

**`Promise<unknown>`** — A promise that resolves when the process has been stopped

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.terminalProcesses.stopProcess('processId');
```
