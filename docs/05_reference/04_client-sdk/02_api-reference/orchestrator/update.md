---
name: update
cbbaseinfo:
  description: "Updates an existing orchestrator instance's configuration.

Modifies the settings, rules, or agent assignments of an orchestrator. Changes take
effect for subsequent workflow executions."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the orchestrator to update
      isOptional: false
    - name: data
      typeName: UpdateOrchestratorRequest
      description: The fields to update on the orchestrator
      isOptional: false
  returns:
    signatureTypeName: "Promise<OrchestratorInstance>"
    description: A promise that resolves to the updated orchestrator instance
data:
  name: update
  category: orchestrator
  link: update.md
---
# update

```typescript
client.orchestrator.update(id: string, data: UpdateOrchestratorRequest): Promise<OrchestratorInstance>
```

Updates an existing orchestrator instance's configuration.

Modifies the settings, rules, or agent assignments of an orchestrator. Changes take
effect for subsequent workflow executions.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the orchestrator to update |
| `data` | `UpdateOrchestratorRequest` | The fields to update on the orchestrator |

## Returns

**`Promise<OrchestratorInstance>`** — A promise that resolves to the updated orchestrator instance

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.orchestrator.update('id', /* UpdateOrchestratorRequest */);
```
