---
name: get
cbbaseinfo:
  description: "Retrieves a specific execution phase by its name.

Returns the full definition of a single phase including its
configuration, order, and associated behavior."
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: The unique name of the execution phase
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentExecutionPhase>"
    description: A promise that resolves to the AgentExecutionPhase object
data:
  name: get
  category: agentExecutionPhases
  link: get.md
---
# get

```typescript
client.agentExecutionPhases.get(name: string): Promise<AgentExecutionPhase>
```

Retrieves a specific execution phase by its name.

Returns the full definition of a single phase including its
configuration, order, and associated behavior.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The unique name of the execution phase |

## Returns

**`Promise<AgentExecutionPhase>`** — A promise that resolves to the AgentExecutionPhase object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentExecutionPhases.get('name');
```
