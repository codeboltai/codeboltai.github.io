---
name: stop
cbbaseinfo:
  description: "Stops a currently running action block execution.

Sends a stop signal to the specified action block execution, causing it
to terminate gracefully. Use this to cancel long-running or stuck executions."
cbparameters:
  parameters:
    - name: data
      typeName: StopActionBlockRequest
      description: The stop request containing the execution identifier to halt
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the stop signal has been sent
data:
  name: stop
  category: actionBlocks
  link: stop.md
---
# stop

```typescript
client.actionBlocks.stop(data: StopActionBlockRequest): Promise<unknown>
```

Stops a currently running action block execution.

Sends a stop signal to the specified action block execution, causing it
to terminate gracefully. Use this to cancel long-running or stuck executions.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `StopActionBlockRequest` | The stop request containing the execution identifier to halt |

## Returns

**`Promise<unknown>`** — A promise that resolves when the stop signal has been sent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.actionBlocks.stop(/* StopActionBlockRequest */);
```
