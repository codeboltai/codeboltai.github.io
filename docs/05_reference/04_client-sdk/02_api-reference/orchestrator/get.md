---
name: get
cbbaseinfo:
  description: "Retrieves a specific orchestrator instance by its unique identifier.

Returns the full configuration and current state of an orchestrator, including its
assigned agents, coordination rules, and execution history."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the orchestrator to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<OrchestratorInstance>"
    description: A promise that resolves to the orchestrator instance details
data:
  name: get
  category: orchestrator
  link: get.md
---
# get

```typescript
client.orchestrator.get(id: string): Promise<OrchestratorInstance>
```

Retrieves a specific orchestrator instance by its unique identifier.

Returns the full configuration and current state of an orchestrator, including its
assigned agents, coordination rules, and execution history.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the orchestrator to retrieve |

## Returns

**`Promise<OrchestratorInstance>`** — A promise that resolves to the orchestrator instance details

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.orchestrator.get('id');
```
