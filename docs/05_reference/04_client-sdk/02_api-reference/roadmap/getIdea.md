---
name: getIdea
cbbaseinfo:
  description: "Retrieves a specific idea by its ID.

Fetches the full details of a single idea including its status and review history."
cbparameters:
  parameters:
    - name: ideaId
      typeName: string
      description: The unique identifier of the idea
      isOptional: false
  returns:
    signatureTypeName: "Promise<RoadmapIdea>"
    description: A promise that resolves to the RoadmapIdea object
data:
  name: getIdea
  category: roadmap
  link: getIdea.md
---
# getIdea

```typescript
client.roadmap.getIdea(ideaId: string): Promise<RoadmapIdea>
```

Retrieves a specific idea by its ID.

Fetches the full details of a single idea including its status and review history.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `ideaId` | `string` | The unique identifier of the idea |

## Returns

**`Promise<RoadmapIdea>`** — A promise that resolves to the RoadmapIdea object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.getIdea('ideaId');
```
