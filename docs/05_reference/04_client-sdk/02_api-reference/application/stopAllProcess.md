---
name: stopAllProcess
cbbaseinfo:
  description: "Stops all running processes.

Terminates every active process in the CodeBolt runtime, including
agents, terminals, and background tasks. Use with caution."
cbparameters:
  parameters:
    - name: data
      typeName: StopAllProcessRequest
      description: Optional configuration for the stop operation
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when all processes have been stopped
data:
  name: stopAllProcess
  category: application
  link: stopAllProcess.md
---
# stopAllProcess

```typescript
client.application.stopAllProcess(data?: StopAllProcessRequest): Promise<void>
```

Stops all running processes.

Terminates every active process in the CodeBolt runtime, including
agents, terminals, and background tasks. Use with caution.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `StopAllProcessRequest` _(optional)_ | Optional configuration for the stop operation |

## Returns

**`Promise<void>`** — A promise that resolves when all processes have been stopped

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.application.stopAllProcess();
```
