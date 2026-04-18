---
name: updateFeature
cbbaseinfo:
  description: "Updates an existing feature.

Modifies the properties of a feature such as its title, description, status, or priority."
cbparameters:
  parameters:
    - name: featureId
      typeName: string
      description: The unique identifier of the feature to update
      isOptional: false
    - name: data
      typeName: UpdateFeatureRequest
      description: The fields to update on the feature
      isOptional: false
  returns:
    signatureTypeName: "Promise<RoadmapFeature>"
    description: A promise that resolves to the updated RoadmapFeature
data:
  name: updateFeature
  category: roadmap
  link: updateFeature.md
---
# updateFeature

```typescript
client.roadmap.updateFeature(featureId: string, data: UpdateFeatureRequest): Promise<RoadmapFeature>
```

Updates an existing feature.

Modifies the properties of a feature such as its title, description, status, or priority.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `featureId` | `string` | The unique identifier of the feature to update |
| `data` | `UpdateFeatureRequest` | The fields to update on the feature |

## Returns

**`Promise<RoadmapFeature>`** — A promise that resolves to the updated RoadmapFeature

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.updateFeature('featureId', /* UpdateFeatureRequest */);
```
