---
name: getFeatures
cbbaseinfo:
  description: "Retrieves all features across all roadmap phases.

Returns a flat list of all features regardless of which phase they belong to.
Use optional query parameters to filter by status, priority, or other criteria."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering features
      isOptional: true
  returns:
    signatureTypeName: "Promise<RoadmapFeature[]>"
    description: A promise that resolves to an array of RoadmapFeature objects
data:
  name: getFeatures
  category: roadmap
  link: getFeatures.md
---
# getFeatures

```typescript
client.roadmap.getFeatures(params?: Record<string, unknown>): Promise<RoadmapFeature[]>
```

Retrieves all features across all roadmap phases.

Returns a flat list of all features regardless of which phase they belong to.
Use optional query parameters to filter by status, priority, or other criteria.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering features |

## Returns

**`Promise<RoadmapFeature[]>`** — A promise that resolves to an array of RoadmapFeature objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.getFeatures();
```
