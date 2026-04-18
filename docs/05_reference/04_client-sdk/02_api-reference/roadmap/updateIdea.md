---
name: updateIdea
cbbaseinfo:
  description: "Updates an existing idea.

Modifies the properties of an idea such as its title, description, or status."
cbparameters:
  parameters:
    - name: ideaId
      typeName: string
      description: The unique identifier of the idea to update
      isOptional: false
    - name: data
      typeName: UpdateIdeaRequest
      description: The fields to update on the idea
      isOptional: false
  returns:
    signatureTypeName: "Promise<RoadmapIdea>"
    description: A promise that resolves to the updated RoadmapIdea
data:
  name: updateIdea
  category: roadmap
  link: updateIdea.md
---
# updateIdea

```typescript
client.roadmap.updateIdea(ideaId: string, data: UpdateIdeaRequest): Promise<RoadmapIdea>
```

Updates an existing idea.

Modifies the properties of an idea such as its title, description, or status.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `ideaId` | `string` | The unique identifier of the idea to update |
| `data` | `UpdateIdeaRequest` | The fields to update on the idea |

## Returns

**`Promise<RoadmapIdea>`** — A promise that resolves to the updated RoadmapIdea

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.updateIdea('ideaId', /* UpdateIdeaRequest */);
```
