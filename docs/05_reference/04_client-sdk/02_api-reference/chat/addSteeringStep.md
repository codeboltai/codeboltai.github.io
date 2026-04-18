---
name: addSteeringStep
cbbaseinfo:
  description: "Adds a steering step to a thread.

Creates a steering step that guides the agent's behavior during
execution, providing directional instructions or constraints."
cbparameters:
  parameters:
    - name: data
      typeName: AddSteeringStepRequest
      description: The steering step creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<SteeringStep>"
    description: A promise that resolves to the created SteeringStep
data:
  name: addSteeringStep
  category: chat
  link: addSteeringStep.md
---
# addSteeringStep

```typescript
client.chat.addSteeringStep(data: AddSteeringStepRequest): Promise<SteeringStep>
```

Adds a steering step to a thread.

Creates a steering step that guides the agent's behavior during
execution, providing directional instructions or constraints.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `AddSteeringStepRequest` | The steering step creation payload |

## Returns

**`Promise<SteeringStep>`** — A promise that resolves to the created SteeringStep

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.addSteeringStep(/* AddSteeringStepRequest */);
```
