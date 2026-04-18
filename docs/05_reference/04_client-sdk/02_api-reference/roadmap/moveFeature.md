---
name: moveFeature
cbbaseinfo:
  description: "Moves a feature to a different phase or reorders it within its current phase.

Use this to reorganize the roadmap by relocating features between phases or
changing the display order of features within a phase."
cbparameters:
  parameters:
    - name: featureId
      typeName: string
      description: The unique identifier of the feature to move
      isOptional: false
    - name: data
      typeName: MoveFeatureRequest
      description: The move parameters including target phase and/or position
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the feature has been moved
data:
  name: moveFeature
  category: roadmap
  link: moveFeature.md
---
# moveFeature

```typescript
client.roadmap.moveFeature(featureId: string, data: MoveFeatureRequest): Promise<unknown>
```

Moves a feature to a different phase or reorders it within its current phase.

Use this to reorganize the roadmap by relocating features between phases or
changing the display order of features within a phase.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `featureId` | `string` | The unique identifier of the feature to move |
| `data` | `MoveFeatureRequest` | The move parameters including target phase and/or position |

## Returns

**`Promise<unknown>`** — A promise that resolves when the feature has been moved

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.moveFeature('featureId', /* MoveFeatureRequest */);
```
