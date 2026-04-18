---
name: create
cbbaseinfo:
  description: "Creates a new orchestrator instance with the specified configuration.

Sets up a new orchestrator that will coordinate agent interactions according to the
provided rules and workflow definitions. The orchestrator can be started immediately
or configured further before activation."
cbparameters:
  parameters:
    - name: data
      typeName: CreateOrchestratorRequest
      description: The orchestrator creation configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<OrchestratorInstance>"
    description: A promise that resolves to the newly created orchestrator instance
data:
  name: create
  category: orchestrator
  link: create.md
---
# create

```typescript
client.orchestrator.create(data: CreateOrchestratorRequest): Promise<OrchestratorInstance>
```

Creates a new orchestrator instance with the specified configuration.

Sets up a new orchestrator that will coordinate agent interactions according to the
provided rules and workflow definitions. The orchestrator can be started immediately
or configured further before activation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateOrchestratorRequest` | The orchestrator creation configuration |

## Returns

**`Promise<OrchestratorInstance>`** — A promise that resolves to the newly created orchestrator instance

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.orchestrator.create(/* CreateOrchestratorRequest */);
```
