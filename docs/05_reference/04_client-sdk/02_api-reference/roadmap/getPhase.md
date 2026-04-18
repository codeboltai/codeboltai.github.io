---
name: getPhase
cbbaseinfo:
  description: "Retrieves a specific roadmap phase by its ID.

Fetches the full details of a single phase including its metadata and associated features."
cbparameters:
  parameters:
    - name: phaseId
      typeName: string
      description: The unique identifier of the phase
      isOptional: false
  returns:
    signatureTypeName: "Promise<RoadmapPhase>"
    description: A promise that resolves to the RoadmapPhase object
data:
  name: getPhase
  category: roadmap
  link: getPhase.md
---
# getPhase

```typescript
client.roadmap.getPhase(phaseId: string): Promise<RoadmapPhase>
```

Retrieves a specific roadmap phase by its ID.

Fetches the full details of a single phase including its metadata and associated features.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `phaseId` | `string` | The unique identifier of the phase |

## Returns

**`Promise<RoadmapPhase>`** — A promise that resolves to the RoadmapPhase object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.getPhase('phaseId');
```
