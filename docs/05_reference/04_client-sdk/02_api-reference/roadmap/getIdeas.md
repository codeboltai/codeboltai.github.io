---
name: getIdeas
cbbaseinfo:
  description: "Retrieves all ideas in the roadmap idea pool.

Ideas are proposals that have not yet been promoted to features. Use optional
query parameters to filter by status or other criteria."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering ideas
      isOptional: true
  returns:
    signatureTypeName: "Promise<RoadmapIdea[]>"
    description: A promise that resolves to an array of RoadmapIdea objects
data:
  name: getIdeas
  category: roadmap
  link: getIdeas.md
---
# getIdeas

```typescript
client.roadmap.getIdeas(params?: Record<string, unknown>): Promise<RoadmapIdea[]>
```

Retrieves all ideas in the roadmap idea pool.

Ideas are proposals that have not yet been promoted to features. Use optional
query parameters to filter by status or other criteria.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering ideas |

## Returns

**`Promise<RoadmapIdea[]>`** — A promise that resolves to an array of RoadmapIdea objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.getIdeas();
```
