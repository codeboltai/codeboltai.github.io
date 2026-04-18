---
name: list
cbbaseinfo:
  description: "Lists all orchestrator instances with optional filtering.

Returns the collection of configured orchestrators, which can be filtered by status,
type, or other criteria. Each orchestrator defines a coordination strategy for
multi-agent workflows."
cbparameters:
  parameters:
    - name: params
      typeName: OrchestratorListParams
      description: Optional filtering and pagination parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<OrchestratorInstance[]>"
    description: A promise that resolves to an array of orchestrator instances
data:
  name: list
  category: orchestrator
  link: list.md
---
# list

```typescript
client.orchestrator.list(params?: OrchestratorListParams): Promise<OrchestratorInstance[]>
```

Lists all orchestrator instances with optional filtering.

Returns the collection of configured orchestrators, which can be filtered by status,
type, or other criteria. Each orchestrator defines a coordination strategy for
multi-agent workflows.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `OrchestratorListParams` _(optional)_ | Optional filtering and pagination parameters |

## Returns

**`Promise<OrchestratorInstance[]>`** — A promise that resolves to an array of orchestrator instances

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.orchestrator.list();
```
