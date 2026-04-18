---
name: moveIdeaToRoadmap
cbbaseinfo:
  description: "Promotes an idea to the roadmap as a feature.

Converts a reviewed and approved idea into a feature within a specified roadmap phase.
This is the final step in the idea-to-feature pipeline."
cbparameters:
  parameters:
    - name: ideaId
      typeName: string
      description: The unique identifier of the idea to promote
      isOptional: false
    - name: data
      typeName: MoveIdeaToRoadmapRequest
      description: Optional parameters including target phase for the new feature
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the idea has been promoted to a feature
data:
  name: moveIdeaToRoadmap
  category: roadmap
  link: moveIdeaToRoadmap.md
---
# moveIdeaToRoadmap

```typescript
client.roadmap.moveIdeaToRoadmap(ideaId: string, data?: MoveIdeaToRoadmapRequest): Promise<unknown>
```

Promotes an idea to the roadmap as a feature.

Converts a reviewed and approved idea into a feature within a specified roadmap phase.
This is the final step in the idea-to-feature pipeline.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `ideaId` | `string` | The unique identifier of the idea to promote |
| `data` | `MoveIdeaToRoadmapRequest` _(optional)_ | Optional parameters including target phase for the new feature |

## Returns

**`Promise<unknown>`** — A promise that resolves when the idea has been promoted to a feature

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.moveIdeaToRoadmap('ideaId');
```
