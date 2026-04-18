---
name: send
cbbaseinfo:
  description: "Sends a command to the controllk endpoint.

Dispatches a structured command for the CodeBolt runtime to execute.
Commands are defined by their type and associated payload."
cbparameters:
  parameters:
    - name: data
      typeName: ControllkCommand
      description: The command to send, including its type and payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves with the command execution result
data:
  name: send
  category: controllk
  link: send.md
---
# send

```typescript
client.controllk.send(data: ControllkCommand): Promise<unknown>
```

Sends a command to the controllk endpoint.

Dispatches a structured command for the CodeBolt runtime to execute.
Commands are defined by their type and associated payload.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ControllkCommand` | The command to send, including its type and payload |

## Returns

**`Promise<unknown>`** — A promise that resolves with the command execution result

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.controllk.send(/* ControllkCommand */);
```
