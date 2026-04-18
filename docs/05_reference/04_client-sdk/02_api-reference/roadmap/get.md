---
name: get
cbbaseinfo:
  description: "Retrieves the full roadmap with all phases.

Returns the complete roadmap structure including all phases and their nested features.
Use optional query parameters to filter or paginate results."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering the roadmap
      isOptional: true
  returns:
    signatureTypeName: "Promise<RoadmapPhase[]>"
    description: A promise that resolves to an array of RoadmapPhase objects
data:
  name: get
  category: roadmap
  link: get.md
---
# get

```typescript
client.roadmap.get(params?: Record<string, unknown>): Promise<RoadmapPhase[]>
```

Retrieves the full roadmap with all phases.

Returns the complete roadmap structure including all phases and their nested features.
Use optional query parameters to filter or paginate results.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering the roadmap |

## Returns

**`Promise<RoadmapPhase[]>`** — A promise that resolves to an array of RoadmapPhase objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.get();
```
