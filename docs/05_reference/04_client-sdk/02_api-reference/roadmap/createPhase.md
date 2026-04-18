---
name: createPhase
cbbaseinfo:
  description: "Creates a new roadmap phase.

Adds a high-level phase to the roadmap for organizing features. Phases typically
represent milestones, sprints, or release versions."
cbparameters:
  parameters:
    - name: data
      typeName: CreatePhaseRequest
      description: The phase creation payload including name and optional description
      isOptional: false
  returns:
    signatureTypeName: "Promise<RoadmapPhase>"
    description: A promise that resolves to the newly created RoadmapPhase
data:
  name: createPhase
  category: roadmap
  link: createPhase.md
---
# createPhase

```typescript
client.roadmap.createPhase(data: CreatePhaseRequest): Promise<RoadmapPhase>
```

Creates a new roadmap phase.

Adds a high-level phase to the roadmap for organizing features. Phases typically
represent milestones, sprints, or release versions.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreatePhaseRequest` | The phase creation payload including name and optional description |

## Returns

**`Promise<RoadmapPhase>`** — A promise that resolves to the newly created RoadmapPhase

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.createPhase(/* CreatePhaseRequest */);
```
