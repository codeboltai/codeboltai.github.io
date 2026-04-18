---
name: stop
cbbaseinfo:
  description: "Stops a running background agent instance.

Sends a stop signal to the specified background agent, causing it
to terminate gracefully."
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: The unique identifier of the background agent instance to stop
      isOptional: false
    - name: data
      typeName: StopBackgroundAgentRequest
      description: Optional stop configuration
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the stop signal has been sent
data:
  name: stop
  category: backgroundAgents
  link: stop.md
---
# stop

```typescript
client.backgroundAgents.stop(instanceId: string, data?: StopBackgroundAgentRequest): Promise<unknown>
```

Stops a running background agent instance.

Sends a stop signal to the specified background agent, causing it
to terminate gracefully.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | The unique identifier of the background agent instance to stop |
| `data` | `StopBackgroundAgentRequest` _(optional)_ | Optional stop configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the stop signal has been sent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.backgroundAgents.stop('instanceId');
```
