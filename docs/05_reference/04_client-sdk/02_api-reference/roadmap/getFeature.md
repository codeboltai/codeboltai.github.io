---
name: getFeature
cbbaseinfo:
  description: "Retrieves a specific feature by its ID.

Fetches the full details of a single feature including its status, description,
and associated metadata."
cbparameters:
  parameters:
    - name: featureId
      typeName: string
      description: The unique identifier of the feature
      isOptional: false
  returns:
    signatureTypeName: "Promise<RoadmapFeature>"
    description: A promise that resolves to the RoadmapFeature object
data:
  name: getFeature
  category: roadmap
  link: getFeature.md
---
# getFeature

```typescript
client.roadmap.getFeature(featureId: string): Promise<RoadmapFeature>
```

Retrieves a specific feature by its ID.

Fetches the full details of a single feature including its status, description,
and associated metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `featureId` | `string` | The unique identifier of the feature |

## Returns

**`Promise<RoadmapFeature>`** — A promise that resolves to the RoadmapFeature object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.getFeature('featureId');
```
