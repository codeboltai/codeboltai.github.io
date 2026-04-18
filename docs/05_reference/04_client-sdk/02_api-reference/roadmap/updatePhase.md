---
name: updatePhase
cbbaseinfo:
  description: "Updates an existing roadmap phase.

Modifies the properties of a phase such as its name, description, or ordering."
cbparameters:
  parameters:
    - name: phaseId
      typeName: string
      description: The unique identifier of the phase to update
      isOptional: false
    - name: data
      typeName: UpdatePhaseRequest
      description: The fields to update on the phase
      isOptional: false
  returns:
    signatureTypeName: "Promise<RoadmapPhase>"
    description: A promise that resolves to the updated RoadmapPhase
data:
  name: updatePhase
  category: roadmap
  link: updatePhase.md
---
# updatePhase

```typescript
client.roadmap.updatePhase(phaseId: string, data: UpdatePhaseRequest): Promise<RoadmapPhase>
```

Updates an existing roadmap phase.

Modifies the properties of a phase such as its name, description, or ordering.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `phaseId` | `string` | The unique identifier of the phase to update |
| `data` | `UpdatePhaseRequest` | The fields to update on the phase |

## Returns

**`Promise<RoadmapPhase>`** — A promise that resolves to the updated RoadmapPhase

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.updatePhase('phaseId', /* UpdatePhaseRequest */);
```
