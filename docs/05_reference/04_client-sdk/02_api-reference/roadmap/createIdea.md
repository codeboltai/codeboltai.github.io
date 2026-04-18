---
name: createIdea
cbbaseinfo:
  description: "Creates a new idea in the roadmap idea pool.

Adds an idea that can later be reviewed, refined, and potentially promoted
to a full feature on the roadmap."
cbparameters:
  parameters:
    - name: data
      typeName: CreateIdeaRequest
      description: The idea creation payload including title and description
      isOptional: false
  returns:
    signatureTypeName: "Promise<RoadmapIdea>"
    description: A promise that resolves to the newly created RoadmapIdea
data:
  name: createIdea
  category: roadmap
  link: createIdea.md
---
# createIdea

```typescript
client.roadmap.createIdea(data: CreateIdeaRequest): Promise<RoadmapIdea>
```

Creates a new idea in the roadmap idea pool.

Adds an idea that can later be reviewed, refined, and potentially promoted
to a full feature on the roadmap.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateIdeaRequest` | The idea creation payload including title and description |

## Returns

**`Promise<RoadmapIdea>`** — A promise that resolves to the newly created RoadmapIdea

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.createIdea(/* CreateIdeaRequest */);
```
