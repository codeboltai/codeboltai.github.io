---
name: createFeature
cbbaseinfo:
  description: "Creates a new feature within a specific phase.

Adds a feature to the roadmap under the specified phase. Features represent
discrete pieces of functionality planned for delivery."
cbparameters:
  parameters:
    - name: phaseId
      typeName: string
      description: The unique identifier of the phase to add the feature to
      isOptional: false
    - name: data
      typeName: CreateFeatureRequest
      description: The feature creation payload including title and description
      isOptional: false
  returns:
    signatureTypeName: "Promise<RoadmapFeature>"
    description: A promise that resolves to the newly created RoadmapFeature
data:
  name: createFeature
  category: roadmap
  link: createFeature.md
---
# createFeature

```typescript
client.roadmap.createFeature(phaseId: string, data: CreateFeatureRequest): Promise<RoadmapFeature>
```

Creates a new feature within a specific phase.

Adds a feature to the roadmap under the specified phase. Features represent
discrete pieces of functionality planned for delivery.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `phaseId` | `string` | The unique identifier of the phase to add the feature to |
| `data` | `CreateFeatureRequest` | The feature creation payload including title and description |

## Returns

**`Promise<RoadmapFeature>`** — A promise that resolves to the newly created RoadmapFeature

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.createFeature('phaseId', /* CreateFeatureRequest */);
```
